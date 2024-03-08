import React, { useState, useEffect } from 'react';
import { postCoverLetter } from '../utils/apiHelpers';
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
        setGeneratedCoverLetter(data.coverLetter);
      .then(function(response) {
        setGeneratedCoverLetter(response.data.coverLetter);
        console.log('Cover Letter generated.');
      })
      .catch(function(error) {
        console.error('Failed to generate Cover Letter:', error);
        setGeneratedCoverLetter('Error generating Cover Letter.');
      });
  };

/**
 * Generates a personalized cover letter based on the selected job and user profile.
 */
  const createCoverLetter = async () => {
    postCoverLetter(selectedJob.description, 'User Name', 'User Skills', 'User Experience')
      .then(data => {
        setGeneratedCoverLetter(data.coverLetter);
      .then(function(response) {
        setGeneratedCoverLetter(response.data.coverLetter);
        console.log('Cover Letter generated.');
      })
      .catch(function(error) {
        console.error('Failed to generate Cover Letter:', error);
        setGeneratedCoverLetter('Error generating Cover Letter.');
      });
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
    <div className="cover-letter-generation-page">
      <Card>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
          <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="text" placeholder="Your Skills" value={userSkills} onChange={(e) => setUserSkills(e.target.value)} />
          <input type="text" placeholder="Your Experience" value={userExperience} onChange={(e) => setUserExperience(e.target.value)} />
          <button type="submit">Generate Cover Letter</button>
        </form>
      </Card>
      {generatedCoverLetter && (
        <Card>
          <p>{generatedCoverLetter}</p>
          <button onClick={downloadAsPDF}>Download as PDF</button>
          <button onClick={downloadAsDOC}>Download as DOC</button>
        </Card>
      )}
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
