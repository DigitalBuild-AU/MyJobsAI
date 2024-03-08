/**
 * This file contains the React component for the Interviews Page, facilitating the scheduling and display of interviews.
 */
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

  /**
  * Handles the submission of the interview form, scheduling a new interview.
  * @param {Event} e - The event object from the form submission.
  */
  const handleSubmit = (e) => {
