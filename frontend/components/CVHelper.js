/**
 * CVHelper Component
 * 
 * This component is responsible for providing users with personalized CV suggestions to enhance their job application materials. It interacts with the backend to fetch tailored advice based on the user's job description and CV inputs. The goal is to offer actionable suggestions that users can apply to improve their CVs for specific job applications.
 * 
 * Main functionalities include:
 * - Fetching and displaying personalized CV advice from the backend.
 * - Allowing users to input their job description and CV details for customized suggestions.
 * - Offering a user-friendly interface for navigating through CV improvement tips.
 */
import { sendCVRequest, processCVResponse } from './CVHelperUtils';
import React, { useState } from 'react';

const CVHelper = () => {
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
   * handleGenerateCVSuggestions
   * This function is triggered when the user requests CV suggestions. It sends a POST request to the backend with the user's job description and CV content. Upon success, it updates the state with the received CV suggestions; on failure, it sets an error message.
   * Parameters: None.
   * Returns: None. Updates the state with CV suggestions or an error message.
   */
  const handleGenerateCVSuggestions = async () => {
    console.log('Sending request to generate CV suggestions.'); // Log for debugging
    try {
      const response = await sendCVRequest(jobDescriptionInput, userCVInput);
      console.log('CV suggestions were successfully fetched.'); // Success log
      processCVResponse(response, setCvSuggestions, setError);
    } catch (error) {
      console.error(`Error fetching CV suggestions: ${error.message}, Stack: ${error.stack}`);
      setError('Unable to load CV suggestions. Please check your network connection and try again.');
      setCvSuggestions('');
    }
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
