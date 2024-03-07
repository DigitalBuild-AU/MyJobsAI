import React, { useState, useEffect } from 'react';
import { postCoverLetter } from '../utils/apiHelpers';
import './CoverLetterGenerationPage.css';

const CoverLetterGenerationPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [contactPerson, setContactPerson] = useState('');
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

  const handleJobSelection = (e) => {
/**
 * useEffect hook to fetch job listings on component mount.
 * Fetches job listings from the server and updates the jobListings state.
 */
    const job = jobListings.find(job => job.id === e.target.value);
    setSelectedJob(job);
    setContactPerson(job.contact); // Assuming each job has a 'contact' field
  };

  const createCoverLetter = async () => {
    postCoverLetter(selectedJob.description, 'User Name', 'User Skills', 'User Experience')
      .then(data => {
        setGeneratedCoverLetter(data.coverLetter);
      })
      .catch(error => {
        console.error('Error generating cover letter:', error);
      });
  };

  const downloadAsPDF = () => {
    // Placeholder function for downloading the cover letter as PDF
    console.log('Downloading as PDF...');
  };
/**
 * React component page for generating personalized cover letters based on job descriptions.
 * Allows users to select a job listing, generate a cover letter, and download it in PDF or DOC format.
 */
  const downloadAsDOC = () => {
    // Placeholder function for downloading the cover letter as DOC
    console.log('Downloading as DOC...');
  };

  return (
    <div className="cover-letter-generation-page">
      <select onChange={handleJobSelection} value={selectedJob.id}>
        {jobListings.map(job => (
          <option key={job.id} value={job.id}>{job.title}</option>
        ))}
      </select>
      <input type="text" value={contactPerson} readOnly />
      <button onClick={createCoverLetter}>Create Cover Letter</button>
      {generatedCoverLetter && (
        <div>
          <p>{generatedCoverLetter}</p>
          <button onClick={downloadAsPDF}>Download as PDF</button>
          <button onClick={downloadAsDOC}>Download as DOC</button>
        </div>
      )}
/**
 * Generates a cover letter based on the selected job's description, user's name, skills, and experience.
 * Updates the generatedCoverLetter state with the response from the server.
 */
    </div>
  );
};

export default CoverLetterGenerationPage;
