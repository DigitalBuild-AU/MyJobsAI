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

console.log('app.js is loading correctly'); // gpt_pilot_debugging_log


/**
 * Generates a cover letter based on user input.
 * This function is a placeholder for future implementation.
 */
/**
 * Sends an email with the specified details.
 * Parameters:
 * - to (string): The recipient's email address.
 * - subject (string): The email's subject line.
 * - body (string): The content of the email.
 * This function performs an HTTP POST request to the backend to send the email and does not return anything.
 */
function generateCoverLetter() {
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