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
   * useEffect hook for loading and cleaning up the Bootstrap script.
   * It runs once after the component mounts and removes the script when the component unmounts.
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
    // Placeholder for filter logic
  };

  const handleAddJobListing = (e) => {
    e.preventDefault();
    // Placeholder for adding job listing logic
  };

  return (
    <>
      <Navbar />
      <div id="filterSidebar" style={{ float: 'left', width: '200px', marginRight: '20px' }}>
        <h3>Filter Listings</h3>
        <form id="filterForm" onSubmit={handleFilterSubmit}>
          <div className="form-group">
            <label htmlFor="filterLocation">Location</label>
            <input type="text" className="form-control mb-3" id="filterLocation" placeholder="Enter location" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="filterJobType">Job Type</label>
            <select className="form-control mb-3" id="filterJobType" value={filterJobType} onChange={(e) => setFilterJobType(e.target.value)}>
              <option value="">Any</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Contract">Contract</option>
  /**
   * useEffect hook for fetching analytics data.
   * It runs once after the component mounts to fetch and display analytics.
   */
  useEffect(() => {
    axios.get('http://localhost:3000/api/analytics')
      .then(function(response) {
        const data = response.data;
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
            <tbody id='listingsContainer'>
              {/* Job listings will be dynamically injected here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default JobListings;
