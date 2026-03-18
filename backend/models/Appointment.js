const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  time: String,
  address: String,
  weatherAlert: String,
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
