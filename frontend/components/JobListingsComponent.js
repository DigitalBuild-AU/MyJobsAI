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
import { loadBootstrapScript } from '../../utils/bootstrapUtils';

    loadBootstrapScript();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };

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
