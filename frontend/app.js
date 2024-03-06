console.log('app.js is loading correctly'); // gpt_pilot_debugging_log

function generateCVSuggestions() {
  const jobDescription = document.getElementById('jobDescriptionInput').value;
  const userCV = document.getElementById('userCVInput').value;
  console.log('Sending request to generate CV suggestions.'); // Log for debugging
  axios.post('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription, userCV })
    .then(function(response) {
      console.log('CV suggestions were successfully fetched.'); // Success log
      document.getElementById('cvSuggestionsOutput').innerText = response.data.suggestions;
    })
    .catch(function(error) {
      console.error(`Error fetching CV suggestions: ${error.message}, Stack: ${error.stack}`);
    });
}

function generateCoverLetter() {
  const jobDescription = document.getElementById('jobDescriptionInput').value;
  const userName = document.getElementById('userName').value;
  const userSkills = document.getElementById('userSkills').value;
  const userExperience = document.getElementById('userExperience').value;
  console.log('Sending request to generate a personalized cover letter.'); // Log for debugging
  axios.post('http://localhost:3000/api/gpt/cover_letter', { jobDescription, userName, userSkills, userExperience })
    .then(function(response) {
      console.log('Personalized cover letter was successfully generated.'); // Success log
      document.getElementById('coverLetterOutput').innerText = response.data.coverLetter;
    })
    .catch(function(error) {
      console.error(`Error generating cover letter: ${error.message}, Stack: ${error.stack}`);
    });
}

function sendEmail() {
  const to = document.getElementById('emailTo').value;
  const subject = document.getElementById('emailSubject').value;
  const body = document.getElementById('emailBody').value;
  console.log('Attempting to send email.'); // Log for debugging
  axios.post('http://localhost:3000/api/email/send', { to, subject, body })
    .then(function(response) {
      console.log('Email was sent successfully.'); // Success log
      document.getElementById('emailResponse').innerText = response.data.message;
    })
    .catch(function(error) {
      console.error(`Error sending email: ${error.message}, Stack: ${error.stack}`);
      document.getElementById('emailResponse').innerText = 'Failed to send email.';
    });
}

function fetchAndDisplayAnalytics() {
  axios.get('http://localhost:3000/api/analytics')
    .then(function(response) {
      const data = response.data;
      document.getElementById('analyticsContent').innerHTML = `
        <p>Total Applications: ${data.totalApplications}</p>
        <p>Interviews Scheduled: ${data.interviewsScheduled}</p>
        <p>Offers Received: ${data.offersReceived}</p>
        <p>Average Response Time (days): ${data.avgResponseTime ? data.avgResponseTime.toFixed(2) : 'No data'}</p>
      `;
      console.log('Analytics fetched and displayed successfully.'); // gpt_pilot_debugging_log
    })
    .catch(function(error) {
      console.error(`Error fetching analytics: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
      document.getElementById('analyticsContent').innerText = 'Failed to fetch analytics.';
    });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAndDisplayAnalytics();
});