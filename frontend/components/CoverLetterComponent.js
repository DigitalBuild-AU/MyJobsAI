import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const CoverLetterComponent = () => {
  const [userName, setUserName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [userSkills, setUserSkills] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');

  useEffect(() => {

/**
 * CoverLetterComponent is a React functional component that provides users with tools to generate cover letters based on their job application data in MyJobsAI.
 */
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

  const generateCoverLetter = () => {
/**
 * useEffect hook to dynamically load the Bootstrap script for styling purposes.
 */
    const coverLetter = `Dear Hiring Manager,\n\nBased on the job description, my skills include ${userSkills} and my experience includes ${userExperience}. I am excited about the opportunity to work with your team.\n\nSincerely,\n${userName}`;
    setGeneratedCoverLetter(coverLetter);
  };

  return (
        setGeneratedCoverLetter(response.data.coverLetter);
      })
      .catch(function(error) {
        console.error(`Error generating cover letter: ${error.message}, Stack: ${error.stack}`);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Cover Letter | MyJobsAI</h1>
        <div id="coverLetterAssistant">
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Your Name" />
          <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the job description here..."></textarea>
          <textarea value={userSkills} onChange={(e) => setUserSkills(e.target.value)} placeholder="Your Skills..."></textarea>
          <textarea value={userExperience} onChange={(e) => setUserExperience(e.target.value)} placeholder="Your Experience..."></textarea>
          <button onClick={generateCoverLetter}>Generate Cover Letter</button>
        </div>
        <div id="coverLetterOutput">
          {generatedCoverLetter}
        </div>
      </div>
    </>
  );
};

export default CoverLetterComponent;
/**
 * Generates a cover letter based on user input.
 *
 * @returns {void} - Sets the state of the generatedCoverLetter.
 */
