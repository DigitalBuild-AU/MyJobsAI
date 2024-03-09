import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CVHelperPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userCV, setUserCV] = useState('');
  const [cvSuggestions, setCvSuggestions] = useState('');

  /**
  * Handles the submission of job description and user CV to fetch CV suggestions.
  * @param {Object} e - The event object.
  * No return value.
  */
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/cv/suggestions', { jobDescription, userCV })
      .then(response => {
        setCvSuggestions(response.data.suggestions);
      })
      .catch(error => {
        console.error('Failed to fetch CV suggestions. Please try again later:', error);
        setCvSuggestions('Error fetching CV suggestions. Please check your network connection and try again.');
        // Adding a retry button for user convenience
        setCvSuggestions(prev => prev + ' <button onClick={handleSubmit}>Retry</button>');
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

    useEffect(() => {
        fetchNavbarContent();
        handleBootstrapScript();
            if (scriptTags[i].src.includes('bootstrap.bundle.min.js')) {
                scriptTags[i].remove();
                break;
            }
        }
/**
 * This file defines the CVHelperPage component, which provides functionality for users to get suggestions on improving their CVs
 * based on job descriptions. Users can input a job description and their CV, and receive tailored suggestions.
        // Adding form validation to ensure job description and user CV are not empty
        if (!jobDescription.trim()) {
          alert('Please enter a job description.');
          return;
        }
        if (!userCV.trim()) {
          alert('Please paste your CV.');
          return;
        }
 */
/**
 * CVHelperPage function that renders the CV Helper page.
 * This page allows users to input job descriptions and their CVs to fetch suggestions for CV improvement.
 * No parameters.
 * Returns a JSX element representing the CV Helper page.
 */
            if (scriptTags[i].src.includes('bootstrap.bundle.min.js')) {
                scriptTags[i].remove();
                break;
            }
        }

        const newBootstrapScript = document.createElement('script');
        newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(newBootstrapScript);
    }, []);
      <div id="cvAssistant">
        <textarea id="jobDescriptionInput" placeholder="Paste the job description here..." className="form-control mb-2" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
        <textarea id="userCVInput" placeholder="Paste your CV here..." className="form-control mb-2" value={userCV} onChange={(e) => setUserCV(e.target.value)}></textarea>
        <button onClick={handleSubmit} className="btn btn-primary">Get CV Suggestions</button>
      </div>

      {cvSuggestions && (
        <div>
          <h2>CV Suggestions</h2>
          <p>{cvSuggestions}</p>
    // Fetches the navbar content and sets it using setNavbarContent
    const fetchNavbarContent = () => {
        axios.get('navbar.html')
            .then(response => {
                setNavbarContent(response.data);
                console.log('Navbar dynamically added.'); // gpt_pilot_debugging_log
            })
            .catch(error => {
                console.error('Failed to load navbar:', error); // gpt_pilot_debugging_log
            });
    };
        </div>
      )}
    </div>
};

export default CVHelperPage;
    /**
     * Removes any existing Bootstrap script tags and appends a new one to the document body.
     * This ensures the page uses the latest version of Bootstrap's JavaScript bundle.
     * No parameters.
     * No return value.
     */
    const handleBootstrapScript = () => {
        const scriptTags = document.getElementsByTagName('script');
        for (let i = 0; i < scriptTags.length; i++) {
            if (scriptTags[i].src.includes('bootstrap.bundle.min.js')) {
                scriptTags[i].remove();
                break;
            }
        }

        const newBootstrapScript = document.createElement('script');
        newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(newBootstrapScript);
    };
/**
 * Fetches the navbar content from a static HTML file and sets it in the state.
 * Utilizes Axios for the HTTP GET request. Logs the success or error in the console.
 * No parameters.
 * No return value.
 */
/**
 * Removes any existing bootstrap script tags from the document and appends a new one for the latest version.
 * This ensures the page uses the most up-to-date version of Bootstrap.
 * No parameters.
 * No return value.
 */
