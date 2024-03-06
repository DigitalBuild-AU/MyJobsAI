const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  date: { type: Date, required: true },
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Interview', interviewSchema);