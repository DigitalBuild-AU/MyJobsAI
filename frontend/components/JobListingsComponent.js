/**
 * JobListingsComponent.js
 * This file defines the JobListingsComponent, which displays job listings and provides functionalities for users to filter, apply, and add new job listings.
 * It serves as a key component in the application's job search and application process.
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
    loadBootstrapScript();

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

  // Duplicate handleSubmit declaration removed
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
          <form onSubmit={handleSubmit}>
            <input type="text" value={jobURL} onChange={(e) => setJobURL(e.target.value)} placeholder="Job URL" />
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Job Title" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
            <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Job Description"></textarea>
            <input type="text" value={jobType} onChange={(e) => setJobType(e.target.value)} placeholder="Job Type" />
  /**
   * Handles the submission of the new job listing form, adding the listing to the state and resetting form fields.
   * @param {Event} event - The event object to prevent the default form submission behavior.
   * @returns {void} - This function does not return a value but updates the component's state.
   */
            <input type="number" value={salaryAmount} onChange={(e) => setSalaryAmount(e.target.value)} placeholder="Salary Amount" />
            <select value={salaryPeriod} onChange={(e) => setSalaryPeriod(e.target.value)}>
              <option value="">Select Salary Period</option>
              <option value="hourly">Hourly</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
            <label>
              <input type="checkbox" checked={includesSuper} onChange={(e) => setIncludesSuper(e.target.checked)} /> Includes Super
            </label>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
            <button type="submit">Add Job Listing</button>
          </form>
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
