const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema ({
    name:{
        type:String,
        required: [true,'Name field is required']
    },
    email:{
        type: String,
        required: [true, 'Email field is required']
    },
    contact: {
        type: Number,
        required: [true, 'Contact field is required']
    }

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;