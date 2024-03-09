/**
 * JobListings.js
 * This file contains the JobListings component, which is responsible for rendering a list of job listings on the UI.
 * It allows users to filter job listings based on various criteria such as location, job type, and keywords.
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const JobListings = () => {
  /**
   * JobListings component for viewing and filtering job listings.
   * Users can filter listings by location, job type, and keywords, and add new job listings.
   */
  const [filterLocation, setFilterLocation] = useState('');
  const [filterJobType, setFilterJobType] = useState('');
  const [filterKeywords, setFilterKeywords] = useState('');
  const [jobListings, setJobListings] = useState([]);

  /**
   * useEffect hook for adding and removing the Bootstrap script.
   * Ensures Bootstrap functionalities are available by dynamically injecting the script tag into the document on component mount and removing it on component unmount.
   */
  useEffect(() => {
    const bootstrapScriptTag = document.querySelector('script[src*="bootstrap.bundle.min.js"]');
    if (bootstrapScriptTag) {
      bootstrapScriptTag.remove();
    }
    const newBootstrapScript = document.createElement('script');
    newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(newBootstrapScript);

    return () => {
      if (newBootstrapScript.parentNode) {
        newBootstrapScript.parentNode.removeChild(newBootstrapScript);
      }
    };
  }, []);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    axios.get('/api/jobListings', { params: { location: filterLocation, jobType: filterJobType, keywords: filterKeywords } })
      .then(response => setJobListings(response.data))
      .catch(error => console.error('Error fetching filtered job listings:', error));
  };

  /**
   * Handles the submission of the add job listing form.
   * @param {Event} e - The event object to prevent the default form submission behavior.
   * @returns {void} - This function does not return a value but triggers a POST request to add a new job listing.
   */
  const handleAddJobListing = (e) => {
    e.preventDefault();
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const jobListingData = { jobTitle, company, location, jobDescription };
    axios.post('/api/addJobListing', jobListingData)
      .then(response => {
        console.log('Job listing added successfully');
        // Optionally refresh the job listings to include the newly added listing
      })
      .catch(error => console.error('Error adding job listing:', error));

    // Fetch job information based on the provided URL
    const fetchJobInfo = () => {
      const jobURL = document.getElementById('jobURL').value;
      axios.get(`/api/fetchJobInfo?url=${jobURL}`)
        .then(response => {
          const { jobTitle, company, location, jobDescription } = response.data;
          document.getElementById('jobTitle').value = jobTitle;
          document.getElementById('company').value = company;
          document.getElementById('location').value = location;
          document.getElementById('jobDescription').value = jobDescription;
          console.log('Job information fetched successfully');
        })
        .catch(error => console.error('Error fetching job info:', error));
    };
    // Add onClick listener to Fetch Job Info button
    document.getElementById('fetchJobInfo').addEventListener('click', fetchJobInfo);
  };

  return (
    <>
      <Navbar />
      <div id="filterSidebar" style={{ float: 'left', width: '200px', marginRight: '20px' }}>
        <h3>Filter Listings</h3>
// Filter form code extracted to JobFilterForm component
  /**
   * Submits the filter form data to fetch filtered job listings.
   * @param {Event} e - The event object to prevent the default form submission behavior.
   * @returns {void} - This function does not return a value.
   */
        <JobFilterForm
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          filterJobType={filterJobType}
          setFilterJobType={setFilterJobType}
          filterKeywords={filterKeywords}
          setFilterKeywords={setFilterKeywords}
          handleFilterSubmit={handleFilterSubmit}
        />
          <div className="form-group">
        console.log('Analytics fetched and displayed successfully.'); // Log for debugging
        // Update component state with fetched analytics data here
      })
      .catch(function(error) {
        console.error(`Error fetching analytics: ${error.message}, Stack: ${error.stack}`);
        // Update component state to indicate error in fetching analytics
      });
  }, []);
              <option value="Temp">Temp</option>
              <option value="Casual">Casual</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="filterKeywords">Keywords</label>
            <input type="text" className="form-control mb-3" id="filterKeywords" placeholder="Enter keywords" value={filterKeywords} onChange={(e) => setFilterKeywords(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary mb-3">Apply Filters</button>
        </form>
      </div>
      <div className="container mt-4" style={{ marginLeft: '220px' }}>
        <h2>Add New Job Listing</h2>
        <form id="addJobListingForm" className="d-flex flex-column" onSubmit={handleAddJobListing}>
          {/* Form fields for adding job listing */}
        </form>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="table-header" data-column-name="jobTitle">Job Title</th>
                <th scope="col" className="table-header" data-column-name="company">Company</th>
                <th scope="col" className="table-header" data-column-name="location">Location</th>
                <th scope="col" className="table-header" data-column-name="jobDescription">Job Description</th>
              </tr>
            </thead>
            {/* Implementation of a virtualized or paginated table to improve performance with large datasets */}
            <VirtualizedTable
              listings={jobListings}
              columns={['Job Title', 'Company', 'Location', 'Job Description']}
            />
          </table>
        </div>
      </div>
    </>
  );
};

export default JobListings;
