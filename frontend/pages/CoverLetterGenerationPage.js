/**
 * CoverLetterGenerationPage is a React functional component that renders the cover letter generation page,
 * allowing users to input details and generate a cover letter.
 */

import React, { useState } from 'react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { postCoverLetter } from '../utils/apiHelpers';
import axios from 'axios'; // Assuming axios is used for HTTP requests
import './CoverLetterGenerationPage.css';
import { CoverLetterForm, CoverLetterPreview, DownloadButtons } from '../components/CoverLetterSubComponents';
import CoverLetter from '../components/CoverLetter';

const CoverLetterGenerationPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [userSkills, setUserSkills] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');
  const [coverLetterTemplate, setCoverLetterTemplate] = useState('Basic');
  const [coverLetterTone, setCoverLetterTone] = useState('Professional');

  /**
   * useEffect hook to fetch job listings on component mount.
   * Fetches job listings from the server and updates the jobListings state.
   */
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

  /**
  * Generates a cover letter based on the provided user inputs.
  * @async
  * @returns {Promise<void>} A promise that resolves when the cover letter has been generated and set in the state.
  */
  const generateCoverLetter = async () => {
    // Assuming postCoverLetter is a function that sends user inputs to the server and receives the generated cover letter
    try {
      const response = await generateCoverLetter(jobDescription, userName, userSkills, userExperience);
      setGeneratedCoverLetter(`Cover letter successfully generated with template ${coverLetterTemplate} and tone ${coverLetterTone}:` + response.data.coverLetter);
      alert('Cover letter successfully generated!'); // Provide visual feedback
    } catch (error) {
      alert('Failed to generate Cover Letter. Please check your inputs and try again.');
      setGeneratedCoverLetter(`Error: ${error.response.data.message}`);
    }
  };

/**
 * Generates a personalized cover letter based on the selected job and user profile.
 */
  /**
   * Generates a personalized cover letter based on the selected job and user profile.
   * Sends user input to the server to generate a cover letter.
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
   * Creates a PDF file of the generated cover letter for download.
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

/**
 * Opens the modal to save the generated cover letter.
 */
const handleSaveCoverLetter = () => {
};

/**
 * Closes the save cover letter modal.
 */
const handleCloseSaveModal = () => {
  setIsSaveModalOpen(true);
};

const handleCloseSaveModal = () => {
  setIsSaveModalOpen(false);
};

const renderSaveModal = () => (
  <Modal isOpen={isSaveModalOpen} onClose={handleCloseSaveModal}>
    <div>
      <h2>Save Cover Letter</h2>
        <CoverLetterForm
          setUserName={setUserName}
          setJobDescription={setJobDescription}
          setUserSkills={setUserSkills}
          setUserExperience={setUserExperience}
          generateCoverLetter={generateCoverLetter}
        />
        <CoverLetterPreview generatedCoverLetter={generatedCoverLetter} />
        <DownloadButtons generatedCoverLetter={generatedCoverLetter} />
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
