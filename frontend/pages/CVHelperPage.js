import React, { useState } from 'react';
import axios from 'axios';

const CVHelperPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userCV, setUserCV] = useState('');
  const [cvSuggestions, setCvSuggestions] = useState('');

  /**
   * Handles the form submission. Prevents the default form submission behavior, sends the job description and user CV to the server via a POST request,
   * and updates the state with the CV suggestions received from the server or an error message if the request fails.
   * 
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/cv/suggestions', { jobDescription, userCV })
      .then(response => {
        setCvSuggestions(response.data.suggestions);
      })
      .catch(error => {
        console.error('Failed to fetch CV suggestions:', error);
        setCvSuggestions('Error fetching CV suggestions.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobDescription">Job Description:</label>
          <input
            id="jobDescription"
            type="text"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userCV">Your CV:</label>
          <textarea
            id="userCV"
            value={userCV}
            onChange={(e) => setUserCV(e.target.value)}
          />
        </div>
        <button type="submit">Generate CV Suggestions</button>
/**
 * This file implements the CVHelperPage component, which allows users to input job descriptions and their CVs to generate CV suggestions.
 */
/**
 * The CVHelperPage component allows users to input job descriptions and their CVs to generate CV suggestions.
 * It maintains state for the job description, user CV, and CV suggestions. It renders a form for inputting job descriptions and CVs,
 * and displays CV suggestions.
 */
      </form>
      {cvSuggestions && (
        <div>
          <h2>CV Suggestions</h2>
          <p>{cvSuggestions}</p>
        </div>
      )}
    </div>
  );
};

export default CVHelperPage;
