// Functionality migrated to React components.
    .catch(function(error) {
      debugLog(`Error fetching job listings: ${error}`, error);
      alert('Failed to fetch job listings.');
    });
  }

  function isValidURL(string) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+[\\w-.,@?^=%&:;\\/\\+#]*$', 'i'); // Adjusted for more inclusive URL validation
    const isValid = !!urlPattern.test(string);
  * @param {string} string - The string to validate.
  * @returns {boolean} - True if the string is a valid URL, false otherwise.
  */
  function isValidURL(string) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+[\\w-.,@?^=%&:;\\/\\+#]*$', 'i'); // Adjusted for more inclusive URL validation
    const isValid = !!urlPattern.test(string);
    debugLog(`URL being validated: ${string}, isValid: ${isValid}`);
    return isValid;
  }

  function validateJobListingForm() {
  * Validates the job listing form inputs and displays error messages if invalid.
  *
  * @returns {boolean} - True if the form data is valid, false otherwise.
  */
  function validateJobListingForm() {
    let isValid = true;
    const jobURL = document.getElementById('jobURL').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const jobDescription = document.getElementById('jobDescription').value.trim();
    const salaryAmount = document.getElementById('salaryAmount').value.trim();
    const status = document.getElementById('status').value.trim();
    const errorMessages = document.querySelectorAll('.validation-error');
    errorMessages.forEach(msg => msg.remove());

    if (jobURL.length > 0 && !isValidURL(jobURL)) {
      displayErrorMessage('jobURL', 'Job URL must be in correct format (http://, https://).');
      isValid = false;
    }

    if (!jobTitle) {
      displayErrorMessage('jobTitle', 'Job Title is required.');
      isValid = false;
    }

    if (!jobDescription) {
      displayErrorMessage('jobDescription', 'Job Description is required.');
      isValid = false;
    }

    if (salaryAmount && (!salaryAmount || isNaN(salaryAmount) || Number(salaryAmount) <= 0)) {
      displayErrorMessage('salaryAmount', 'Salary amount must be a positive number when provided.');
      isValid = false;
    }

    if (!status || status === '') {
      displayErrorMessage('status', 'Status is required.');
      isValid = false;
    }

    debugLog(`Validating form data: ${isValid ? 'Valid' : 'Invalid'}`);

    return isValid;
  }

  /**
  * Displays an error message next to the form element.
  *
  * @param {string} elementId - The ID of the form element.
  * @param {string} message - The error message to display.
  */
  function displayErrorMessage(elementId, message) {
    const inputElement = document.getElementById(elementId);
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.className = 'validation-error';
    errorMessage.style.color = 'red';
    inputElement.insertAdjacentElement('afterend', errorMessage);
  }

  document.getElementById('fetchJobInfo').addEventListener('click', function() {
    const jobURL = document.getElementById('jobURL').value.trim();

    if (!jobURL || !isValidURL(jobURL)) {
      debugLog('Invalid job URL provided.');
      alert('Please provide a valid job URL.');
      return;
    }

    axios.post('http://localhost:3000/api/fetch-job-info', { url: jobURL })
      .then(function(response) {
        const { jobTitle, company, location, jobDescription } = response.data;
        document.getElementById('jobTitle').value = jobTitle;
        document.getElementById('company').value = company;
        document.getElementById('location').value = location;
        document.getElementById('jobDescription').value = jobDescription;
        debugLog('Job details fetched successfully.');
      })
      .catch(function(error) {
        debugLog(`Error fetching job details: ${error}`, error);
        alert('Failed to fetch job details. Please check the console for more details.');
      });
  });
});
