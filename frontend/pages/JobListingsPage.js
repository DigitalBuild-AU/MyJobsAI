import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobListingCard from '../components/JobListingCard';
import JobListingTable from '../components/JobListingTable';

/**
 * Renders the JobListingsPage component.
 * This component displays a list of job listings and provides filtering and pagination functionality.
 *
 * @returns {JSX.Element} The JobListingsPage component
 */
const JobListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [view, setView] = useState('table');
  const [filters, setFilters] = useState({status: '', company: ''});
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [errorState, setErrorState] = useState({ status: false, company: false });

  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth < 768) {
        setView('card');
      } else {
        setView('table');
      }
    };
    
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      setFilters({status: '', company: ''}); // Cleanup
    };
  }, [filters, page]);

  const fetchListings = async () => {
    console.log(`Fetching listings with filters: ${JSON.stringify(filters)}, page: ${page}`);
    try {
      const response = await axios.get(`http://localhost:3000/api/joblistings/filter?page=${page}&status=${filters.status}&company=${filters.company}`);
      setListings(response.data.listings);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error('Error fetching job listings', err);
    }
  };
  
  /**
   * Handles the change event for filters by updating the page and filters state.
   *
   * @param {Event} e - The change event object, containing the filter name and value.
   */
  // Extract the logic for handling filters into a separate function
  
const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrorState({ ...errorState, [name]: true });
    } else {
      setPage(0);
      setFilters({ ...filters, [name]: value });
      setErrorState({ ...errorState, [name]: false });
    }
  };

  /**
   * Renders the pagination component by generating buttons for each page.
   * The current page button is disabled to indicate the active page.
   */
  // Extract the logic for rendering the pagination into a separate function
const renderPagination = () => {
  const [errorState, setErrorState] = useState({ status: false, company: false });
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(createPageButton(i));
    }
    return <div>{pages}</div>;
  };

  const updateFilters = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  const createPageButton = (pageNumber) => (
    <button key={pageNumber} disabled={pageNumber === page} onClick={() => setPage(pageNumber)}>
      {pageNumber + 1}
    </button>
  );

  return (
    <div className="job-listings-page">
      <select name="view" onChange={(e) => handleViewChange(e.target.value)}>
        <option value="table">Table View</option>
        <option value="card">Card View</option>
      </select>

      <div>
        <input name="status" placeholder="Filter by status" onChange={handleFilterChange} />
        {errorState.status && <span className="validation-error">Please enter a valid status.</span>}
      </div>
      <div>
        <input name="company" placeholder="Filter by company" onChange={handleFilterChange} />
        {errorState.company && <span className="validation-error">Please enter a valid company name.</span>}
      </div>

      {view === 'table' ? <JobListingTable listings={listings} /> : listings.map(listing => <JobListingCard key={listing._id} listing={listing} />)}

      {renderPagination()}
    </div>
  );
};

export default JobListingsPage;
import { Link } from 'react-router-dom';

      <div className="navigation-links">
        <Link to="/employmentHistory">Employment History</Link>
        <Link to="/skillsInventory">Skills Inventory</Link>
        <Link to="/coverLetterGeneration">Cover Letter Generation</Link>
        <Link to="/resumeCustomization">Resume Customization</Link>
      </div>