/**
 * Implements the InterviewsPage component for scheduling and displaying interviews.
 */
import React, { useState, useEffect } from 'react';
import { submitInterview, handleInterviewResponse, handleInterviewError } from '../utils/interviewAPI';
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
