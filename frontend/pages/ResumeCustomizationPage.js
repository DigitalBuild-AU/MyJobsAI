/**
 * Page component for customizing resumes based on job listings.
 * Users can select a job listing and receive suggestions for customizing their CVs accordingly.
 */
import React, { useState, useEffect } from 'react';
import { postResumeCustomization } from '../utils/apiHelpers';
import './ResumeCustomizationPage.css';

const ResumeCustomizationPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [cvAnalysisResults, setCvAnalysisResults] = useState('');
  const [customizedCV, setCustomizedCV] = useState('');

  useEffect(() => {
    const fetchJobListings = async () => {
      const response = await axios.get('/api/joblistings');
      setJobListings(response.data);
    };
    fetchJobListings();
  }, []);

  const handleJobSelection = (e) => {
    setSelectedJob(e.target.value);
  };

  const customizeCV = async () => {

/**
 * Fetches job listings on component mount and updates the state.
 * @async
 * @function useEffect
 * @return {Promise<void>} A promise that resolves when job listings are fetched and set in state.
 */
/**
 * Handles the selection of a job from the dropdown.
 * @function handleJobSelection
 * @param {Event} e - The event triggered on job selection.
 */

    const response = await axios.post('/api/cv_customization', {
      jobDescription: selectedJob.description,
      userCV: uploadedCV // Use the state variable for the uploaded CV
    });
    setCvAnalysisResults(response.data.analysisResults);
    setCustomizedCV(response.data.customizedCV);

  };

  const downloadAsPDF = () => {
    console.log('Downloading customized CV as PDF...');
  };

  const downloadAsDOC = () => {
    console.log('Downloading customized CV as DOC...');
  };

  return (
const [uploadedCV, setUploadedCV] = useState(null);

  const handleCVUpload = (e) => {
    setUploadedCV(e.target.files[0]);
  };

  const downloadFile = async (fileType) => {
    const response = await axios.get(`/api/download_cv/${fileType}`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `customized-cv.${fileType}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const downloadAsPDF = () => {
    downloadFile('pdf');
  };

  const downloadAsDOC = () => {
    downloadFile('doc');
  };
    <div className="resume-customization-page">
      <select onChange={handleJobSelection} value={selectedJob}>
        {jobListings.map(job => (
          <option key={job.id} value={job.id}>{job.title}</option>
        ))}
      </select>
      <button onClick={customizeCV}>Customize CV</button>
      <div className="cv-analysis-results">
        {cvAnalysisResults.map((result) => (
          <div key={result.id} className={`feedback feedback-${result.type}`}>
            {result.message}
          </div>
        ))}
      </div>
      <div>{customizedCV}</div>
      <button onClick={downloadAsPDF}>Download as PDF</button>
      <button onClick={downloadAsDOC}>Download as DOC</button>
    </div>
  );
};

export default ResumeCustomizationPage;

/**
 * Sends the selected job and user CV to the server for customization suggestions.
 * @async
 * @function customizeCV
 * @throws {Error} When unable to customize the CV.
 * @return {Promise<void>} A promise that resolves when CV customization suggestions are received and set in state.
 */
/**
 * Placeholder function for downloading the customized CV as a PDF.
 * @function downloadAsPDF
 */
/**
 * Placeholder function for downloading the customized CV as a DOC.
 * @function downloadAsDOC
 */

<input type="file" onChange={handleCVUpload} />
