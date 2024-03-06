import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const handleFilterChange = (e) => {
    setPage(0);
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

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

      {view === 'table' ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing._id}>
                <td>{listing.jobTitle}</td>
                <td>{listing.company}</td>
                <td>{listing.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          {listings.map((listing) => (
            <div key={listing._id} className="card">
              <h3>{listing.jobTitle}</h3>
              <p>{listing.company}</p>
              <p>{listing.location}</p>
            </div>
          ))}
        </div>
      )}

      {renderPagination()}
    </div>
  );
};

export default JobListingsPage;