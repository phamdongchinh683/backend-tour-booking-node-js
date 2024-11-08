const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  tour_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Tour",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  guide_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  number_visitors: {
    type: Number,
    required: true,
  },
  start_tour: {
    type: Date,
    required: true,
  },
  time: {
    type: Timestamp,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);