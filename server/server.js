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

//Middlewares 

const { auth } = require('./middlwares/auth');


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
        if(err) return res.json({ success:false,err })
        res.status(200).json({
            success:true,
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






port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})