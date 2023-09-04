const mongoose = require('mongoose');

const DoubleRoom = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: 'DoubleRoom',
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  reservationStatus: {
    type: String,
    enum: ['checkedin', 'reserved', 'pending', 'canceled', 'unreserved'],
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  view: {
    type: String,
    enum: ['sea', 'mountain', 'city'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 200,
  },
  guests: {
    type: Number,
    required: true,
    default: 2,
  },
  guestRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'guest',
  },
});

module.exports = mongoose.model('DoubleRoom', DoubleRoom);
