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
