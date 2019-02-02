const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema ({
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
    },
    date: {
        type: Date
    }

});

const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;