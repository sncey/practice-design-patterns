const mongoose = require('mongoose');

const SingleRoom = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: 'SingleRoom',
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
    default: 100,
  },
  guests: {
    type: Number,
    required: true,
    default: 1,
  },
  guestRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'guest',
  },
});

module.exports = mongoose.model('SingleRoom', SingleRoom);
