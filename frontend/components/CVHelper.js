import React, { useState } from 'react';

const CVHelper = () => {
  const [jobDescriptionInput, setJobDescriptionInput] = useState('');
  const [userCVInput, setUserCVInput] = useState('');

  const handleGenerateCVSuggestions = () => {
    // Placeholder for generating CV suggestions based on jobDescriptionInput and userCVInput
    console.log('Generating CV suggestions for:', jobDescriptionInput, userCVInput);
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

export default CVHelper;
