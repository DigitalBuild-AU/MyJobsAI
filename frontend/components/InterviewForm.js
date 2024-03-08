import React, { useState } from 'react';
import InteractiveGuide from '../components/InteractiveGuide';
import { getInterviewFormGuideSteps } from '../utils/guideSteps';
import axios from 'axios';
/**
 * Renders a form for scheduling an interview. Allows users to input job title, date, and notes for the interview.
 *
 * @param {function} setInterviews - Function to update the list of interviews.
 * @param {Array} interviews - Current list of interviews.
 */
function InterviewForm({ setInterviews, interviews }) {
  const [jobTitle, setJobTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleJobTitleChange = (e) => {
    const value = e.target.value;
    setJobTitle(value);
    onJobTitleChange(value);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    onDateChange(value);
  };

  const handleNotesChange = (e) => {
    const value = e.target.value;
    setNotes(value);
    onNotesChange(value);
  };

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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="jobTitleInput">Job Title</label>
        <input type="text" className="form-control" id="jobTitleInput" value={jobTitle} onChange={handleJobTitleChange} placeholder="Enter job title" />
      </div>
      <div className="form-group">
        <label htmlFor="interviewDateInput">Date and Time</label>
        <input type="datetime-local" className="form-control" id="interviewDateInput" value={date} onChange={handleDateChange} />
      </div>
      <div className="form-group">
        <label htmlFor="notesInput">Notes</label>
        <textarea className="form-control" id="notesInput" value={notes} onChange={handleNotesChange} placeholder="Enter any notes" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Schedule Interview</button>
    </form>
  );
}

export default InterviewForm;
  const [showGuide, setShowGuide] = useState(false);

      <button onClick={() => setShowGuide(true)} style={{ margin: '10px 0', padding: '5px 10px' }}>Show Guide</button>
      {showGuide && <InteractiveGuide steps={getInterviewFormGuideSteps()} />}
