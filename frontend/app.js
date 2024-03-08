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

console.log('app.js is loading correctly'); // gpt_pilot_debugging_log

function generateCVSuggestions() {
function generateCoverLetter() {
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