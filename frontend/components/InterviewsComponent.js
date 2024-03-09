/**
 * InterviewsComponent.js
 * 
 * This file contains the InterviewsComponent, a React functional component used within the MyJobsAI application.
 * The component is designed to allow users to schedule and manage job interviews, providing a user-friendly interface
 * for inputting job titles, interview dates, and additional notes. It interacts with other components and services
 * to store and retrieve interview information, contributing to the application's broader functionality of job application tracking.
 * 
 * Dependencies: React, Bootstrap for styling
 */
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const InterviewsComponent = () => {
  /**
   * InterviewsComponent is a React functional component for scheduling and managing job interviews within the MyJobsAI application.
   */
  
  const [jobTitle, setJobTitle] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [notes, setNotes] = useState('');

  /**
   * Dynamically loads the Bootstrap script for styling purposes upon component mount.
   * This useEffect hook runs once after the initial render.
   * @params None
   * @return None
   */
  useEffect(() => {
    loadBootstrapScript();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ jobTitle, interviewDate, notes });
    // Here, you would typically send the form data to a backend service or API.
  };

  return (
    <>
      <Navbar />
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
          <button type="submit" className="btn btn-primary">Schedule Interview</button>
        </form>
      </div>
    </>
  );
};

export default InterviewsComponent;
// Importing loadBootstrapScript to dynamically load Bootstrap for component functionality
import { loadBootstrapScript } from '../../utils/bootstrapUtils';
