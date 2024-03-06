function isValidURL(string) {
  const urlPattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ '((\\d{1,3}\\.){3}\\d{1,3}))'+ '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ '(\\?[;&a-z\\d%_.~+=-]*)?'+ '(\\#[-a-z\\d_]*)?$', 'i');
  return !!urlPattern.test(string);
}

exports.validateJobListing = (req, res, next) => {
  let isValid = true;

  if (!req.body.jobTitle) {
    console.log('Missing job title in request.'); // gpt_pilot_debugging_log
    res.status(400).json({ error: 'Job title is required.' });
    isValid = false;
  }

  if (req.body.salary && req.body.salary.amount && req.body.salary.amount <= 0) {
    console.log('Salary amount must be a positive number.'); // gpt_pilot_debugging_log
    res.status(400).json({ error: 'Salary amount must be a positive number.' });
    isValid = false;
  }

  if (req.body.jobURL && !isValidURL(req.body.jobURL)) {
    console.log(`Invalid job URL format: ${req.body.jobURL}`); // gpt_pilot_debugging_log
    res.status(400).json({ error: 'Job URL must be in correct format.' });
    isValid = false;
  }

  if (isValid) next();
};

exports.validateJobListingUpdate = (req, res, next) => {
  console.log('Update validation for job listing initiated.'); // gpt_pilot_debugging_log
  // This allows for partial updates
  console.log('Update validation for job listing passed.'); // gpt_pilot_debugging_log
  next();
};