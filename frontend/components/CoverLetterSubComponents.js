import React, { useState } from 'react';
import axios from 'axios';
import { postCoverLetter } from '../utils/apiHelpers';

/**
 * `CoverLetterForm` collects user inputs for generating a cover letter.
 * Props:
 * - setUserName: Function to set the user's name.
 * - setJobDescription: Function to set the job description.
 * - setUserSkills: Function to set the user's skills.
 * - setUserExperience: Function to set the user's experience.
 * - generateCoverLetter: Function to trigger the cover letter generation.
 */
const CoverLetterForm = ({ setUserName, setJobDescription, setUserSkills, setUserExperience, generateCoverLetter }) => (
  <div id="coverLetterAssistant">
    <input type="text" id="userName" placeholder="Your Name" onChange={(e) => setUserName(e.target.value)} />
    <textarea id="jobDescriptionInput" placeholder="Paste the job description here..." onChange={(e) => setJobDescription(e.target.value)}></textarea>
    <textarea id="userSkills" placeholder="Your Skills..." onChange={(e) => setUserSkills(e.target.value)}></textarea>
    <textarea id="userExperience" placeholder="Your Experience..." onChange={(e) => setUserExperience(e.target.value)}></textarea>
    <button onClick={generateCoverLetter}>Generate Cover Letter</button>
  </div>
);

const CoverLetterPreview = ({ generatedCoverLetter }) => (
  <div id="coverLetterOutput">
    {generatedCoverLetter && <p>{generatedCoverLetter}</p>}
  </div>
);

const DownloadButtons = ({ generatedCoverLetter }) => {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const downloadAsPDF = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedCoverLetter], {type: 'application/pdf'});
    element.href = URL.createObjectURL(file);
    element.download = "coverLetter.pdf";
    document.body.appendChild(element);
    element.click();
  };

  const downloadAsDOC = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedCoverLetter], {type: 'application/msword'});
    element.href = URL.createObjectURL(file);
    element.download = "coverLetter.doc";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <button onClick={downloadAsPDF}>Download as PDF</button>
      <button onClick={downloadAsDOC}>Download as DOC</button>
      <button onClick={() => setIsSaveModalOpen(true)}>Save Cover Letter</button>
      {isSaveModalOpen && (
        <div>
          <h2>Save Cover Letter</h2>
          <p>Do you want to save the generated cover letter?</p>
          <button onClick={() => {
            console.log('Cover letter saved.');
            setIsSaveModalOpen(false);
          }}>Save</button>
          <button onClick={() => setIsSaveModalOpen(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export { CoverLetterForm, CoverLetterPreview, DownloadButtons };
