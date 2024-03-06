const mongoose = require('mongoose');

const userNoteSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobListing'
  },
  content: { type: String, required: true }
}, { timestamps: true });

userNoteSchema.methods.logNote = function() {
  console.log(`Note created for job ID ${this.jobId}: ${this.content}`);
};

module.exports = mongoose.model('UserNote', userNoteSchema);