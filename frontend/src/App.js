/**
 * App.js serves as the entry point for the MyJobsAI React application. It sets up the router and defines routes for different components of the application, facilitating navigation and rendering of different pages.
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Applications from './components/Applications';
import CoverLetterComponent from './components/CoverLetterComponent';
import CVHelperComponent from './components/CVHelperComponent';
import Interviews from './components/Interviews';
import JobListings from './components/JobListings';
import Settings from './components/Settings';
import EmailComponent from './components/EmailComponent';
import AnalyticsComponent from './components/AnalyticsComponent';

function useEmailSender() {
/**
 * Main application file for MyJobsAI.
 * This file sets up the router and defines routes for the application, integrating various components
 * for job application tracking and related features. It also includes a custom hook for sending emails.
 */
 * Custom hook for sending emails.
 * This hook provides functionality to send emails by making a POST request to the backend.
/**
 * Custom hook for sending emails.
 * Utilizes axios for making POST requests to the backend API to send emails.
 * 
 * @param {string} to - The email address to send the email to.
 * @param {string} subject - The subject of the email.
 * @param {string} body - The body of the email.
 * @returns {Promise<string>} A promise that resolves to a message indicating the result of the email sending operation.
 * @throws {Error} If the email sending operation fails.
 */
function useEmailSender() {
  const sendEmail = async (to, subject, body) => {
    try {
      const response = await axios.post('http://localhost:3000/api/email/send', { to, subject, body });
      return response.data.message;
    } catch (error) {
      throw new Error('Failed to send email.');
    }
  };
  return sendEmail;
}

/**
 * Main React component for the MyJobsAI application.
 * Sets up the application's routing using React Router and renders the appropriate components
 * based on the current URL path. It also provides the `sendEmail` function to the EmailComponent.
 */
function App() {
 * This component sets up the router and defines routes for the application, integrating various components
 * for job application tracking and related features. It also utilizes the useEmailSender hook for email functionality.
 */
function App() {
  const sendEmail = useEmailSender();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/applications" component={Applications} />
        <Route path="/cover-letter" component={CoverLetterComponent} />
        <Route path="/cv-helper" component={CVHelperComponent} />
        <Route path="/interviews" component={Interviews} />
        <Route path="/job-listings" component={JobListings} />
        <Route path="/settings" component={Settings} />
        <Route path="/email" render={(props) => <EmailComponent {...props} sendEmail={sendEmail} />} />
        <Route path="/analytics" component={AnalyticsComponent} />
      </Switch>
    </Router>
  );
}

export default App;
/**
 * The App component is a functional component that sets up the application's routing using React Router. It defines routes for various components, enabling navigation between different sections of the application.
 * 
 * @returns {JSX.Element} The JSX structure for the application's routing.
 */
