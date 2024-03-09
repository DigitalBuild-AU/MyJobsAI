import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Interviews Component
 * Renders a form for scheduling interviews. Users can input a job title, select an interview date, and add additional notes.
 * Utilizes useState for managing form inputs and handles form submission to log input values or potentially save them in the future.
 */

const Interviews = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [notes, setNotes] = useState('');

  /**
   * Handles the submission of the interview scheduling form.
   * Logs the input values and sends an email notification.
   * Parameters: event (Event) - The form submission event.
   * Returns: None.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Scheduling interview with details:', { jobTitle, interviewDate, notes });
    // Send an email notification about the scheduled interview
    const emailBody = `An interview for the position of ${jobTitle} has been scheduled. Date and Time: ${interviewDate}. Notes: ${notes}`;
    axios.post('http://localhost:3000/api/email/send', { to: 'email@example.com', subject: 'Interview Scheduled', body: emailBody })
      .then(function(response) {
        console.log('Email was sent successfully.'); // Success log
        // Update state to show confirmation message
      })
      .catch(function(error) {
        console.error(`Error sending email: ${error.message}, Stack: ${error.stack}`);
        // Update state to show error message
      });
  };

  return (
    <div className="container mt-4">
      <h1>Interview Scheduler</h1>
      <form id="scheduleInterviewForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitleInput">Job Title</label>
          <input type="text" className="form-control" id="jobTitleInput" placeholder="Enter job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="interviewDateInput">Date and Time</label>
          <input type="datetime-local" className="form-control" id="interviewDateInput" value={interviewDate} onChange={(e) => setInterviewDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="notesInput">Notes</label>
          <textarea className="form-control" id="notesInput" placeholder="Enter any notes" rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Schedule Interview</button>
      </form>
    </div>
  );
};
    </div>
  );
};
/**
 * This file contains the Interviews component that provides a form for users to schedule interviews and keep track of them.
 */
import { Link } from 'react-router-dom';

export default Interviews;
