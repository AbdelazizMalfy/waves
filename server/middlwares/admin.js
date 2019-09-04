

let admin = (req,res,next) => {
    if(req.user.role === 0){
        return res.send("Only Admins Can Add Products");
    }else {
        next();
    }
}


module.exports = { admin } 