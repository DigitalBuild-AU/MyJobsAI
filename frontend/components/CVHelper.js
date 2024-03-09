/**
 * CVHelper.js
 * This file contains the CVHelper component, which is responsible for providing users with CV suggestions based on their job description and CV inputs. It interacts with the backend to fetch tailored advice to improve the user's CV for specific job applications.
 */
import axios from 'axios';
import React, { useState } from 'react';

const CVHelper = () => {
  /**
   * CVHelper component assists users by generating CV suggestions.
   * It takes user input for job descriptions and CV content to provide tailored advice.
   */
  const [jobDescriptionInput, setJobDescriptionInput] = useState('');
  const [userCVInput, setUserCVInput] = useState('');

  const [cvSuggestions, setCvSuggestions] = useState('');
  const [error, setError] = useState('');
  /**
   * handleGenerateCVSuggestions
   * This function is triggered when the user requests CV suggestions. It sends a POST request to the backend with the user's job description and CV content. Upon success, it updates the state with the received CV suggestions; on failure, it sets an error message.
   * Parameters: None.
   * Returns: None.
   */
  const handleGenerateCVSuggestions = () => {
   * Handles the generation of CV suggestions by sending user inputs to the backend.
   * Parameters: None.
   * Returns: None. Updates the state with CV suggestions or an error message.
   */
  const handleGenerateCVSuggestions = () => {
    console.log('Sending request to generate CV suggestions.'); // Log for debugging
    axios.post('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription: jobDescriptionInput, userCV: userCVInput })
      .then(function(response) {
        console.log('CV suggestions were successfully fetched.'); // Success log
        setCvSuggestions(response.data.suggestions);
        setError('');
      })
      .catch(function(error) {
        console.error(`Error fetching CV suggestions: ${error.message}, Stack: ${error.stack}`);
        setError('Unable to load CV suggestions. Please check your network connection and try again.');
        setCvSuggestions('');
      });
  };

  return (
    <div className="container mt-4">
      <div id="cvAssistant">
        <textarea id="jobDescriptionInput" placeholder="Paste the job description here..." className="form-control mb-2" value={jobDescriptionInput} onChange={(e) => setJobDescriptionInput(e.target.value)}></textarea>
        <textarea id="userCVInput" placeholder="Paste your CV here..." className="form-control mb-2" value={userCVInput} onChange={(e) => setUserCVInput(e.target.value)}></textarea>
        <button onClick={handleGenerateCVSuggestions} className="btn btn-primary">Get CV Suggestions</button>
/**
 * This file defines the CVHelper component, which assists users by generating CV suggestions based on job descriptions and user CV input.
 */
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';

export default CVHelper;
import { Link } from 'react-router-dom';
        <div id="cvSuggestionsOutput">{cvSuggestions}</div>
        {error && <div className="error">{error}</div>}
        <button onClick={handleGenerateCVSuggestions} className="btn btn-secondary mt-2">Retry</button>
