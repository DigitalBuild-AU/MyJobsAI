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
        setError('Failed to fetch CV suggestions.');
        setCvSuggestions('');
      });
  };

  return (
    <div className="container mt-4">
      <div id="cvAssistant">
        <textarea id="jobDescriptionInput" placeholder="Paste the job description here..." className="form-control mb-2" value={jobDescriptionInput} onChange={(e) => setJobDescriptionInput(e.target.value)}></textarea>
        <textarea id="userCVInput" placeholder="Paste your CV here..." className="form-control mb-2" value={userCVInput} onChange={(e) => setUserCVInput(e.target.value)}></textarea>
        <button onClick={handleGenerateCVSuggestions} className="btn btn-primary">Get CV Suggestions</button>
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';

export default CVHelper;
import { Link } from 'react-router-dom';
        <div id="cvSuggestionsOutput">{cvSuggestions}</div>
        {error && <div className="error">{error}</div>}
