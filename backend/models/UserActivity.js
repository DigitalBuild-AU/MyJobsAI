const mongoose = require('mongoose');

const userActivitySchema = new mongoose.Schema({
  jobId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'JobListing', 
    required: true 
  },
  activityType: {
    type: String,
    required: true,
    enum: ['Application', 'Interview', 'Follow-Up', 'Offer']
  },
  details: String,
  date: Date,
  status: {
    type: String,
    enum: ['Pending', 'Completed']
  }
}, { timestamps: true });

userActivitySchema.methods.logActivity = function() {
  console.log(`New activity logged for job ID ${this.jobId}: ${this.activityType}`);
};

module.exports = mongoose.model('UserActivity', userActivitySchema);
userActivitySchema.index({ activityType: 1 });
userActivitySchema.index({ date: 1 });