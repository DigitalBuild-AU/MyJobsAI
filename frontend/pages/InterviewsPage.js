import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InterviewForm from './components/InterviewForm';

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
  return (
    <div className="container mt-4">
      <h1>Interview Scheduler</h1>
          <label htmlFor="interviewDateInput">Date and Time</label>
          <input type="datetime-local" className="form-control" id="interviewDateInput" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
    </div>
  );
}

export default InterviewsPage;
