/**
 * This is the main application file for MyJobsAI. It imports and uses various components to build the app's UI,
 * including routing and global styles. It also contains utility functions for sending emails and fetching analytics.
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Applications from './components/Applications';
import CoverLetterComponent from './components/CoverLetterComponent';
import CVHelperComponent from './components/CVHelperComponent';
import Interviews from './components/Interviews';
import JobListings from './components/JobListings';
import Settings from './components/Settings';
import EmailComponent from './components/EmailComponent';
import AnalyticsComponent from './components/AnalyticsComponent';
import GlobalStyles from './styles/GlobalStyles';




/**
 * Sends an email using the values entered in the form fields. It makes a POST request to the backend API with the email details and updates the DOM based on the response.
 * Parameters: This function does not take parameters directly; it retrieves the recipient's email address, subject, and body content from the DOM.
 * Return value: This function does not return a value. It updates the DOM with the success or failure message based on the email sending attempt.
 */
/**
 * Generates a cover letter based on user input.
 * Parameters:
 * - userName (string): The user's name.
 * - jobTitle (string): The job title being applied for.
 * - companyName (string): The company name where the job is being applied.
 * Returns: A string representing a simple cover letter.
 */
function generateCoverLetter(userName, jobTitle, companyName) {
  // Basic implementation - to be enhanced with actual business logic
  return `Dear Hiring Manager at ${companyName},\n\nI am writing to express my interest in the ${jobTitle} position listed on your company website. My unique skills and experiences make me a perfect fit for this role.\n\nSincerely,\n${userName}`;
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
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/applications">Applications</Link>
            </li>
            <li>
              <Link to="/cover-letter">Cover Letter</Link>
            </li>
            <li>
              <Link to="/cv-helper">CV Helper</Link>
            </li>
            <li>
              <Link to="/interviews">Interviews</Link>
            </li>
            <li>
              <Link to="/job-listings">Job Listings</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/email">Email</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/applications">
            <Applications />
          </Route>
          <Route path="/cover-letter">
            <CoverLetterComponent />
          </Route>
          <Route path="/cv-helper">
            <CVHelperComponent />
          </Route>
          <Route path="/interviews">
            <Interviews />
          </Route>
          <Route path="/job-listings">
            <JobListings />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/email">
            <EmailComponent />
          </Route>
          <Route path="/analytics">
            <AnalyticsComponent />
          </Route>
          <Route path="/" exact>
            {/* Home component or redirect can be placed here */}
          </Route>
        </Switch>
        <GlobalStyles />
      </div>
    </Router>
  );
}

export default App;
        <p>Total Applications: ${data.totalApplications}</p>
        <p>Interviews Scheduled: ${data.interviewsScheduled}</p>
        <p>Offers Received: ${data.offersReceived}</p>
        <p>Average Response Time (days): ${data.avgResponseTime ? data.avgResponseTime.toFixed(2) : 'No data'}</p>
      `;
/**
 * Fetches analytics data from the backend and displays it in the UI.
 * This function performs an HTTP GET request to retrieve analytics data and updates the DOM to display this data.
 */
        <GlobalStyles />