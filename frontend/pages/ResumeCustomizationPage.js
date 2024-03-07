import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
<input type="file" onChange={handleCVUpload} />
