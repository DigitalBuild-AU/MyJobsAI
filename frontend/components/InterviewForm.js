import React, { useState } from 'react';

function InterviewForm({ onSubmit, onJobTitleChange, onDateChange, onNotesChange }) {
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
    onSubmit({ jobTitle, date, notes });
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
