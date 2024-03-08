/**
 * JobListingsComponent.js
 * Displays job listings and allows users to filter and apply to jobs. Users can also add new job listings.
 */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const JobListingsComponent = () => {
  const [filterLocation, setFilterLocation] = useState('');
  const [filterJobType, setFilterJobType] = useState('');
  const [filterKeywords, setFilterKeywords] = useState('');
  const [jobURL, setJobURL] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [salaryAmount, setSalaryAmount] = useState('');
  const [salaryPeriod, setSalaryPeriod] = useState('');
  const [includesSuper, setIncludesSuper] = useState(false);
  const [status, setStatus] = useState('');
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
// Importing loadBootstrapScript to dynamically load Bootstrap for component styling and functionality
import { loadBootstrapScript } from '../../utils/bootstrapUtils';

    loadBootstrapScript();
import { loadBootstrapScript } from '../../utils/bootstrapUtils';

  /**
   * Handles changes in form inputs by updating the component's state.
   * @param {Object} event - The event object from the form input change.
   */
  const handleChange = (event) => {

/**
 * useEffect hook to dynamically load the Bootstrap script for styling purposes.
 *
 * @returns {void}
 */
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };

  const handleSubmit = (event) => {
   * Submits the new job listing form, adding the listing to the state and resetting form fields.
   * @param {Object} event - The event object from the form submission.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const newJobListing = { jobURL, jobTitle, company, location, jobDescription, jobType, salaryAmount, salaryPeriod, includesSuper, status };
    setJobListings([...jobListings, newJobListing]);
    // Reset form fields
    setJobURL('');
    setJobTitle('');
    setCompany('');
    setLocation('');
    setJobDescription('');
    setJobType('');
    setSalaryAmount('');
    setSalaryPeriod('');
    setIncludesSuper(false);
    setStatus('');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Job Listings | MyJobsAI</h1>
        {/* Filter and Add Job Listing Forms */}
        <div id="jobListingsForms">
          {/* Form elements and inputs for filtering and adding job listings */}
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Job Title</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
                <th scope="col">Job Description</th>
              </tr>
            </thead>
            <tbody>
              {jobListings.map((listing, index) => (
/**
 * Handles changes in form inputs by updating component state.
 *
 * @param {Object} event - The event object from the input change.
 * @returns {void}
 */
/**
 * Submits the new job listing form, adding the listing to the state and resetting form fields.
 *
 * @param {Object} event - The event object from the form submission.
 * @returns {void}
 */
                <tr key={index}>
                  <td>{listing.jobTitle}</td>
                  <td>{listing.company}</td>
                  <td>{listing.location}</td>
                  <td>{listing.jobDescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default JobListingsComponent;
