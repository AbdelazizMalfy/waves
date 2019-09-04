const mongooose = require('mongoose');

const woodSchema = mongooose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:100,
        unique:1
    }
})

const Wood = mongooose.model('Wood',woodSchema);

module.exports = { Wood };