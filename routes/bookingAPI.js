const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('/bookings', function(req, res){
    // res.send({type:'GET'});
    var booking = new Booking(req.body);
    Booking.find(req.body).toArray(function(booking)
    {
        res.send(booking)
    });
});

router.post('/bookings', function(req, res){
    var booking = new Booking(req.body);
    Booking.create(req.body).then(function(booking){
        res.send(booking);
    });
});

router.put('/bookings/:id', function(req, res){
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
       Booking.findOne({_id: req.params.id}).then(function(booking){
        res.send({booking});
       });
    });
});

router.delete('/bookings/:id', function(req, res){
    Booking.findByIdAndRemove({_id: req.params.id}).then(function(booking){
        res.send(booking);
    });
});

module.exports = router;