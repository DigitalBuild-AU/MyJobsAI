import React, { useState } from 'react';

/**
 * Interviews Component
 * Renders a form for scheduling interviews. Users can input a job title, select an interview date, and add additional notes.
 * Utilizes useState for managing form inputs and handles form submission to log input values or potentially save them in the future.
 */

const Interviews = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Scheduling interview with details:', { jobTitle, interviewDate, notes });
    // Placeholder for actual interview scheduling logic
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
