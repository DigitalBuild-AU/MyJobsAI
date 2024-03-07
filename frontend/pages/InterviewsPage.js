import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InterviewsPage() {
  const [interviews, setInterviews] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/interviews')
      .then(response => {
        setInterviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching interviews:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/interviews', { jobTitle, date, notes })
      .then(response => {
        alert('Interview scheduled successfully.');
        setInterviews([...interviews, response.data]);
        setJobTitle('');
        setDate('');
        setNotes('');
      })
      .catch(error => {
        console.error('Error scheduling interview:', error);
        alert('Failed to schedule interview.');
      });
  };

  return (
    <div className="container mt-4">
      <h1>Interview Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitleInput">Job Title</label>
          <input type="text" className="form-control" id="jobTitleInput" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter job title" />
        </div>
        <div className="form-group">
          <label htmlFor="interviewDateInput">Date and Time</label>
          <input type="datetime-local" className="form-control" id="interviewDateInput" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="notesInput">Notes</label>
          <textarea className="form-control" id="notesInput" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Enter any notes" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Schedule Interview</button>
      </form>
    </div>
  );
}

export default InterviewsPage;
