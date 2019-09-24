const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);



//Models

const { User } = require('./models/user');
const { Brand } = require('./models/brand');
const { Wood } = require('./models/wood');
const { Product } = require('./models/product');
const { Payment } = require('./models/payment');

//Middlewares 

const { auth } = require('./middlwares/auth');
const { admin } = require('./middlwares/admin');


//=============================
//          PRODUCTS
//=============================


app.post('/api/product/shop',(req,res)=>{

    let order = req.body.order ? req.body.order : 'desc' ;
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id' ;
    let limit = req.body.limit ? parseInt(req.body.limit) : 100; 
    let skip = parseInt(req.body.skip)  
    let findArgs = {}; 
    
    for (let key in req.body.filters){
        if(req.body.filters[key].length > 0){
            if(key === 'price'){
                findArgs[key] = {
                    $gte:req.body.filters[key][0],
                    $lte:req.body.filters[key][1]
                }
            }else{
                findArgs[key]= req.body.filters[key];
            }
        }
    }
    

    findArgs['publish'] = true;


    Product.
    find(findArgs).
    populate('brand').
    populate('wood')
    .sort([[sortBy,order]])
    .skip(skip)
    .limit(limit)
    .exec((err,filteredProducts)=>{
        if(err) return res.status(400).send(err)

        res.status(200).json({
            size:filteredProducts.length,
            products:filteredProducts
        })

    })

})


// Getting Products by arrival or sold 

app.get('/api/product/products',(req,res)=>{
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product
    .find()
    .populate('brand')
    .populate('wood')
    .sort([[sortBy,order]])
    .limit(limit)
    .exec((err,docs)=>{
        if(err) return res.status(400).send(err)

        res.send(docs)
    })

})


// Getting Products by specific ID
app.get('/api/product/products_by_id',(req,res)=>{
    let type = req.query.type;
    items = req.query.id
    
    if(type === 'array'){
        let ids = req.query.id.split(',');
        items = []
        items = ids.map(item => mongoose.Types.ObjectId(item))
    }

    Product
    .find({'_id':{$in:items}})
    .populate('brand')
    .populate('wood')
    .exec((err,docs)=>{
        return res.status(200).send(docs)
    })

    
})


app.post('/api/product/product',auth,admin,(req,res)=>{
    const product = new Product(req.body)

    product.save((err,doc)=>{
        if(err) return res.json({addProductSuccess:false,err})

        res.status(200).json({
            addProductSuccess:true,
            product:doc
        })
    })
})



//=============================
//            WOODS
//=============================


app.post('/api/product/wood',auth,admin,(req,res)=>{
    const wood = new Wood(req.body);

    wood.save((err,doc)=>{
        if(err) return res.json({addWoodSuccess:false,err})

        res.status(200).json({
            addWoodSuccess:true,
            wood:doc
        })
    })
})

app.get('/api/product/woods',(req,res)=>{
    Wood.find({},(err,woods)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(woods);
    })
})

//=============================
//            Brand
//=============================


app.post('/api/product/brand',auth,admin,(req,res)=>{
    const brand = new Brand(req.body)

    brand.save((err,doc)=>{
        if (err) return res.json({addBrandSuccess:false,err})

        res.status(200).json({
            addBrandSuccess:true,
            brand:doc
        })
    })
})


app.get('/api/product/brands',(req,res)=>{
    Brand.find({},(err,brands)=>{
        if(err) return res.status(400).send(err)
        res.status(200).send(brands)
    })
})

//=============================
//            USERS
//=============================

// Auth

app.get('/api/users/auth',auth,(req,res) =>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false:true,
        isAuth:true,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        role:req.user.role,
        cart:req.user.cart,
        history:req.user.history
    })
})



//Register 

app.post('/api/users/register', (req,res) =>{
    const user = new User(req.body)

    user.save((err,doc) => {
        if(err) return res.json({ registerSuccess:false,err })
        res.status(200).json({
            registerSuccess:true,
        })
    })
})

// Login

app.post('/api/users/login', (req,res) =>{
    User.findOne({'email':req.body.email},(err,user) =>{
        if(!user) return res.json({loginSuccess: false, message:'Email not found'})

        // User found --> compare password

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false,message:'password is incorrect' })
        
            // passwords matched ---> generate token

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err)

                // Token is generated --> save it in cookies

                res.cookie('w_auth',user.token).status(200).json({loginSuccess:true})
            })

        })
    })
})


// Logout

app.get('/api/users/logout',auth,(req,res)=>{

    User.findOneAndUpdate({_id:req.user._id},{token:''},(err,doc)=>{
        if (err) return res.json({logoutSuccess:false,err})

        res.status(200).json({
            logoutSuccess:true
        })
    })
})

app.post('/api/users/addToCart',auth,(req,res) =>{

    User.findOne({_id:req.user._id},(err,doc)=>{
        let duplicate = false;

        doc.cart.forEach(item=>{
            if(item.id == req.query.productId){
                duplicate = true;
            }
        })

        if(duplicate){
            User.findOneAndUpdate(
                {_id: req.user._id, "cart.id":mongoose.Types.ObjectId(req.query.productId)},
                { $inc: {"cart.$.quantity":1}},
                { new: true},
                (err,doc) =>{
                    if(err) return res.json({addToCartsuccess:false,err})
                    res.status(200).json(doc.cart)
                }                
                )
        }else {
            User.findOneAndUpdate(
                {_id:req.user._id},
                { $push:{cart: { 
                    id: mongoose.Types.ObjectId(req.query.productId),
                    quantity:1,
                    date: Date.now()
                 }}},
                { new : true },
                (err,doc) =>{
                    if(err) return res.json({addToCartsuccess:false,err})
                    res.status(200).json(doc.cart)
                }
            )
        }   
    })
})


app.get('/api/users/removeFromCard',auth,(req,res) =>{

    User.findOneAndUpdate(
        {_id:req.user._id},
        { "$pull":
            {"cart": {"id": mongoose.Types.ObjectId(req.query._id)} }
        },
        {new:true},
        (err,doc)=>{
            let cart = doc.cart;
            let array = cart.map(item=>{
                return mongoose.Types.ObjectId(item.id)
            })

            Product
            .find({'_id': { $in: array }})
            .populate('brand')
            .populate('wood')
            .exec((err,cartDetails)=>{
                return res.status(200).json({
                    cartDetails,
                    cart
                })
            })
        }
    )
})

app.post('/api/users/successBuy',auth,(req,res)=>{
    let history = [];
    let transactionData= {}


    // user history
    req.body.cartDetails.forEach((item) => {
        history.push({
            dateOfPurchase: Date.now(),
            name: item.name,
            brand: item.brand.name,
            id: item._id,
            price: item.price,
            quantity: item.quantity,
            paymentId: req.body.paymentData.paymentID
        })
    })

    // Payment Dash 
    transactionData.user = {
        id: req.user._id,
        name: req.user.name,
        lastname: req.user.lastname,
        email: req.user.email,
    }
    transactionData.data = req.body.paymentData;
    transactionData.product = history;


    User.findOneAndUpdate(
        {_id: req.user._id},
        { $push: { history:history }, $set: {cart : [] } },
        { new : true },
        (err,user) =>{
            if(err) return json({success:false,err})

            const payment = new Payment(transactionData);

            payment.save((err,doc)=> {
                if(err) return json({success:false,err})

                
            })
        }  
    )
})


port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})