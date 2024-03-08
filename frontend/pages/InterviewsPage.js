/**
 * InterviewsPage is a React functional component that renders the interviews scheduling and listing page.
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveNavbar from '../components/ResponsiveNavbar';

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

  /**
  * Handles the submission of the interview form, scheduling a new interview.
  * @param {Event} e - The event object from the form submission.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    submitInterview(jobTitle, date, notes, setInterviews)
      .then(response => handleInterviewResponse(response))
      .catch(error => handleInterviewError(error));
  };

/**
 * Fetches interviews from the server on component mount and updates the state accordingly.
 */
/**
 * The InterviewsPage component manages the scheduling and display of interviews. It uses state to manage interviews, job title, date, and notes.
 * The component fetches existing interviews from the server on mount using the useEffect hook and updates the state.
 */

export default function InterviewsPage() {
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

  /**
  * Prevents the default form submission behavior, sends the interview details to the server,
  * and updates the state based on the server's response or an error.
  * @param {Event} e - The event object from the form submission.
  */
  const handleSubmit = (e) => {
import { useForm } from 'react-hook-form';

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    handleFormSubmit(data.jobTitle, data.date, data.notes);
  };

  return (
    <>
      <ResponsiveNavbar />
      <div className="container mt-4">
        <h1>Interview Scheduler</h1>
        <form onSubmit={handleSubmit(onSubmit)} id="scheduleInterviewForm">
          <div className="form-group">
            <label htmlFor="jobTitleInput">Job Title</label>
            <input type="text" className="form-control" id="jobTitleInput" placeholder="Enter job title" {...register('jobTitle')} />
          </div>
          <div className="form-group">
            <label htmlFor="interviewDateInput">Date and Time</label>
            <input type="datetime-local" className="form-control" id="interviewDateInput" {...register('date')} />
          </div>
          <div className="form-group">
            <label htmlFor="notesInput">Notes</label>
            <textarea className="form-control" id="notesInput" placeholder="Enter any notes" rows="3" {...register('notes')}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Schedule Interview</button>
        </form>
      </div>
    </>
  );
    e.preventDefault();
    handleFormSubmit(jobTitle, date, notes);
  };

/**
 * Submits the interview details to the server to schedule a new interview.
 * @param {string} jobTitle - The title of the job.
 * @param {string} date - The date of the interview.
 * @param {string} notes - Additional notes for the interview.
 * @returns {void}
 */
function handleFormSubmit(jobTitle, date, notes) {
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
  }
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
}
