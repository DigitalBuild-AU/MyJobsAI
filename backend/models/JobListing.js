const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: false },
  location: { type: String, required: false },
  jobDescription: { type: String, required: false }, // Now optional
  status: { 
    type: String, 
    required: true, 
    enum: ['To Apply', 'Applied', 'Interviewing', 'Offered']
  },
  priority: Boolean,
  jobType: { type: String, required: false }, // Enum removed to make it flexible
  salary: {
    amount: { type: Number, required: false },
    period: { type: String, required: false },
    includesSuper: { type: Boolean, required: false }
  }
}, { timestamps: true });

// Text index for keyword searching on jobTitle and jobDescription
jobListingSchema.index({ jobTitle: 'text', jobDescription: 'text' });

jobListingSchema.methods.logCreation = function() {
  console.log(`New job listing created: ${this.jobTitle} at ${this.company}, Job Type: ${this.jobType}, Salary: ${JSON.stringify(this.salary)}`);
};

jobListingSchema.post('save', function(err, doc, next) {
  if (err) {
    console.error(`Error saving job listing: ${err.message}, Stack: ${err.stack}`);
    next(err);
  } else {
    console.log('Job listing saved successfully.');
    next();
  }
});

module.exports = mongoose.model('JobListing', jobListingSchema);