/**
 * Renders the interviews page, displaying a list of scheduled interviews.
 * Fetches and displays interviews from the backend.
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(jobTitle, date, notes);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(jobTitle, date, notes);
  };

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
