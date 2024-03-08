
/**
 * CVHelperComponent is a React functional component designed to assist users in creating and optimizing their CVs within the MyJobsAI application.
 */
import React, { useEffect } from 'react';
import Navbar from './Navbar';

const CVHelperComponent = () => {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>CV Helper | MyJobsAI</h1>
        <form onSubmit={generateCVSuggestions}>
          <div className="mb-3">
            <label htmlFor="jobDescriptionInput" className="form-label">Job Description</label>
            <textarea className="form-control" id="jobDescriptionInput" rows="3" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="userCVInput" className="form-label">Your CV</label>
            <textarea className="form-control" id="userCVInput" rows="5" value={userCV} onChange={(e) => setUserCV(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Generate Suggestions</button>
        </form>
/**
 * CVHelperComponent.js
 * This component provides an interface for users to input their job description and CV, and receive AI-generated suggestions for improving their CV.
 */
        <div className="mt-3">
          <h3>CV Suggestions:</h3>
          <p id="cvSuggestionsOutput">{cvSuggestionsOutput}</p>
        </div>
      </div>
    </>
  );
};

export default CVHelperComponent;
const CVHelperComponent = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userCV, setUserCV] = useState('');
  const [cvSuggestionsOutput, setCvSuggestionsOutput] = useState('');

  const generateCVSuggestions = (e) => {
    e.preventDefault();
    console.log('Sending request to generate CV suggestions.'); // Log for debugging
    axios.post('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription, userCV })
      .then(function(response) {
        console.log('CV suggestions were successfully fetched.'); // Success log
        setCvSuggestionsOutput(response.data.suggestions);
      })
      .catch(function(error) {
        console.error(`Error fetching CV suggestions: ${error.message}, Stack: ${error.stack}`);
      });
  };

  useEffect(() => {
    const loadBootstrapScript = () => {
      const existingScriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
      if (existingScriptTag) {
        existingScriptTag.remove();
      }
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.async = true;
      document.body.appendChild(bootstrapScript);
    };

    loadBootstrapScript();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>CV Helper | MyJobsAI</h1>
        <form onSubmit={generateCVSuggestions}>
  /**
   * Generates CV suggestions based on the user's job description and CV.
   * @param {Event} e - The event object from the form submission.
   */
          <div className="mb-3">
            <label htmlFor="jobDescriptionInput" className="form-label">Job Description</label>
            <textarea className="form-control" id="jobDescriptionInput" rows="3" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="userCVInput" className="form-label">Your CV</label>
            <textarea className="form-control" id="userCVInput" rows="5" value={userCV} onChange={(e) => setUserCV(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Generate Suggestions</button>
        </form>
        <div className="mt-3">
          <h3>CV Suggestions:</h3>
          <p id="cvSuggestionsOutput">{cvSuggestionsOutput}</p>
        </div>
      </div>
    </>
  );
};

export default CVHelperComponent;

import { loadBootstrapScript } from '../../utils/bootstrapUtils';
// Importing loadBootstrapScript to dynamically load Bootstrap for component styling and functionality
