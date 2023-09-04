const mongoose = require('mongoose');

const guest = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 120,
  },
  numberOfCompanions: {
    type: Number,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  requestedView: {
    type: String,
    enum: ['sea', 'mountain', 'city'],
  },
});

module.exports = mongoose.model('guest', guest);
