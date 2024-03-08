import React, { useState } from 'react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { postCoverLetter } from '../utils/apiHelpers';
import axios from 'axios'; // Assuming axios is used for HTTP requests
import './CoverLetterGenerationPage.css';

const CoverLetterGenerationPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [userSkills, setUserSkills] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get('/api/joblistings');
        setJobListings(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };
    fetchJobListings();
  }, []);

/**
 * Handles the selection of a job from the dropdown, updating the state with the selected job's details.
 * @param {Event} e - The event object from the job selection.
 */
  const handleJobSelection = (e) => {
/**
 * useEffect hook to fetch job listings on component mount.
 * Fetches job listings from the server and updates the jobListings state.
 * Page component for generating personalized cover letters.
/**
 * This file implements the React component for generating personalized cover letters based on user input and selected job descriptions.
 */

    const job = jobListings.find(job => job.id === e.target.value);
    setSelectedJob(job.id); // Update to store only the job ID
    setContactPerson(job.contactPerson || ''); // Update to use the correct field and handle possible undefined value
  };

  const generateCoverLetter = async () => {
    // Assuming postCoverLetter is a function that sends user inputs to the server and receives the generated cover letter
    try {
      const response = await postCoverLetter({ userName, jobDescription, userSkills, userExperience });
      setGeneratedCoverLetter(response.data.coverLetter);
      console.log('Cover Letter generated.'); // For debugging
    } catch (error) {
      console.error('Failed to generate Cover Letter:', error); // For debugging
      setGeneratedCoverLetter('Error generating Cover Letter.');
    }
  };

/**
 * Generates a personalized cover letter based on the selected job and user profile.
 */
  const createCoverLetter = () => {
    generateCoverLetter(jobDescription, userName, userSkills, userExperience)
      .then(response => handleCoverLetterResponse(response))
      .then(coverLetter => setGeneratedCoverLetter(coverLetter))
      .catch(error => handleCoverLetterError(error));
  };

/**
 * Downloads the generated cover letter as a PDF file.
 */
  const downloadAsPDF = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedCoverLetter], {type: 'application/pdf'});
    element.href = URL.createObjectURL(file);
    element.download = "coverLetter.pdf";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  
/**
 * React component page for generating personalized cover letters based on job descriptions.
 * Allows users to select a job listing, generate a cover letter, and download it in PDF or DOC format.
 */
/**
 * Downloads the generated cover letter as a DOC file.
 */
  const downloadAsDOC = () => {

import Card from '../components/Card';
import Modal from '../components/Modal';

const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

const handleSaveCoverLetter = () => {
  setIsSaveModalOpen(true);
};

const handleCloseSaveModal = () => {
  setIsSaveModalOpen(false);
};

const renderSaveModal = () => (
  <Modal isOpen={isSaveModalOpen} onClose={handleCloseSaveModal}>
    <div>
      <h2>Save Cover Letter</h2>
      <p>Do you want to save the generated cover letter?</p>
      <button onClick={() => {
        console.log('Cover letter saved.');
        setIsSaveModalOpen(false);
      }}>Save</button>
      <button onClick={() => setIsSaveModalOpen(false)}>Cancel</button>
    </div>
  </Modal>
);
    // Placeholder function for downloading the cover letter as DOC
    console.log('Downloading as DOC...');

    const element = document.createElement("a");
    const file = new Blob([generatedCoverLetter], {type: 'application/msword'});
    element.href = URL.createObjectURL(file);
    element.download = "coverLetter.doc";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <>
      <ResponsiveNavbar />
      <div className="container mt-4">
        <div id="coverLetterAssistant">
          <input type="text" id="userName" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <textarea id="jobDescriptionInput" placeholder="Paste the job description here..." value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
          <textarea id="userSkills" placeholder="Your Skills..." value={userSkills} onChange={(e) => setUserSkills(e.target.value)}></textarea>
          <textarea id="userExperience" placeholder="Your Experience..." value={userExperience} onChange={(e) => setUserExperience(e.target.value)}></textarea>
          <button onClick={generateCoverLetter}>Generate Cover Letter</button>
        </div>
        <div id="coverLetterOutput">{generatedCoverLetter && <p>{generatedCoverLetter}</p>}</div>
      </div>
    </>
/**
 * Generates a cover letter based on the selected job's description, user's name, skills, and experience.
 * Updates the generatedCoverLetter state with the response from the server.
 */
    </div>
  );
};

export default CoverLetterGenerationPage;
/**
 * Placeholder function for downloading the generated cover letter as a PDF.
 * @function downloadAsPDF
 */
/**
 * Placeholder function for downloading the generated cover letter as a DOC.
 * @function downloadAsDOC
 */
        <div className="cover-letter-output">
          <h3>Generated Cover Letter</h3>
          <p>{generatedCoverLetter}</p>
        </div>
