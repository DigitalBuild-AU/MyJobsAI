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

  useEffect(() => {
    fetchListings();
  }, [filters, page]);

  const fetchListings = async () => {
    console.log(`Fetching listings with filters: ${JSON.stringify(filters)}, page: ${page}`); // gpt_pilot_debugging_log
    try {
      const response = await axios.get(`http://localhost:3000/api/joblistings/filter?page=${page}&status=${filters.status}&company=${filters.company}`);
      setListings(response.data.listings);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error('Error fetching job listings', err, err.stack); // gpt_pilot_debugging_log
    }
  };

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  /**
   * Handles the change event for filters by updating the page and filters state.
   *
   * @param {Event} e - The change event object, containing the filter name and value.
   */
  // Extract the logic for handling filters into a separate function
const handleFilterChange = (e) => {
    setPage(0);
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  /**
   * Renders the pagination component by generating buttons for each page.
   * The current page button is disabled to indicate the active page.
   */
  // Extract the logic for rendering the pagination into a separate function
const renderPagination = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <button key={i} disabled={i === page} onClick={() => setPage(i)}>
          {i + 1}
        </button>
      );
    }
    return <div>{pages}</div>;
  };

  return (
    <div className="job-listings-page">
      <select name="view" onChange={(e) => handleViewChange(e.target.value)}>
        <option value="table">Table View</option>
        <option value="card">Card View</option>
      </select>

      <input name="status" placeholder="Filter by status" onChange={handleFilterChange} />
      <input name="company" placeholder="Filter by company" onChange={handleFilterChange} />

      {view === 'table' ? <JobListingTable listings={listings} /> : listings.map(listing => <JobListingCard key={listing._id} listing={listing} />)}

      {renderPagination()}
    </div>
  );
};

export default JobListingsPage;
};

export default JobListingsPage;