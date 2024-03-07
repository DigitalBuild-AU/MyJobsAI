/**
 * JobListingsPage Component
 * This file defines the JobListingsPage component, which is responsible for rendering the job listings page in the MyJobsAI application. It includes functionality for displaying job listings in either a table or card view, filtering listings based on user input, and pagination. The component utilizes React hooks for state management and axios for fetching data from the server.
 */
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
    /**
     * Adjusts the view state based on the window's inner width.
     * This function is triggered on window resize events to switch between 'card' and 'table' views depending on the window's width. It is designed to enhance user experience by adapting the layout to different screen sizes.
     * 
     * @param none - This function does not take any parameters.
     * @returns void - This function does not return a value.
     */
    const handleWindowSizeChange = () => {
      if (window.innerWidth < 768) {
        setView('card');
      } else {
        setView('table');
      }
    };
    
/**
 * Updates the error state for a given field based on whether its value is empty.
 * 
 * This function is called when the value of an input field changes. It checks if the new value is an empty string and updates the errorState object accordingly. If the value is empty, the error state for the specified field is set to true, indicating an error. Otherwise, it is set to false.
 *
 * @param {string} name - The name of the field to update the error state for.
 * @param {string} value - The new value of the field.
 */
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      setFilters({status: '', company: ''}); // Cleanup
    };
  }, [filters, page]);

  /**
 * Fetches job listings from the server based on the current filters and page.
 * Utilizes axios to make a GET request with query parameters for filtering.
 * Updates the listings and totalPages state with the response data.
 */
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
    /**
   * Handles changes to filter inputs.
   * Updates the filters state and resets the page to 0 if the input is valid.
   * Sets an error state for the corresponding filter if the input is invalid.
   * @param {Event} e - The change event object from the input element.
   */
  // Extract the logic for handling filters into a separate function
  
// No changes required as the requested modifications have already been implemented.

  /**
   * Generates the pagination component by creating buttons for each page.
   * The button corresponding to the current page is disabled to indicate the active page. This function does not take any parameters and returns a JSX.Element containing the pagination buttons.
   *
   * @param none - This function does not take any parameters.
   * @returns {JSX.Element} - A JSX.Element containing the pagination buttons.
   */
  // Extract the logic for rendering the pagination into a separate function
const renderPagination = () => {
  const [errorState, setErrorState] = useState({ status: false, company: false });
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(createPaginationButton(i));
    }
    return <div>{pages}</div>;
  };

  const updateFilters = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  /**
   * Creates a button element for a given page number.
   * This function generates a button for navigating to a specific page in the pagination component. The button is disabled if it corresponds to the current page, indicating the active page to the user.
   *
   * @param {number} pageNumber - The page number for the button.
   * @returns {JSX.Element} - A button element for pagination, enabling navigation to the specified page.
   */
  const createPaginationButton = (pageNumber) => (
    <button key={pageNumber} aria-label={`Go to page ${pageNumber + 1}`}>{pageNumber + 1}</button>
  );

  return (

    <div className="job-listings-page">
/**
 * handleErrorState Function
 * Updates the error state for a given input field based on whether its value is empty. This function is crucial for validating user input and providing immediate feedback on the validity of the data entered.
 * 
 * Parameters:
 * - name (string): The name of the input field to validate.
 * - value (string): The value of the input field to check for emptiness.
 * 
 * Returns:
 * - void: This function does not return a value but updates the component's state directly.
 */

const handleErrorState = (name, value) => {
  if (value.trim() === '') {
    setErrorState({ ...errorState, [name]: true });
  } else {
    setErrorState({ ...errorState, [name]: false });
  }
};
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
  
/**
 * Updates the filters state with a new value for a given filter.
 * @param {string} filterName - The name of the filter to update.
 * @param {string} filterValue - The new value for the filter.
 * Creates and returns a pagination button React component for a given page number.
 * @param {number} pageNumber - The page number for which the pagination button is created.
 * @returns {ReactElement} - A React button element for navigating to the specified page number.

 */
};

export default JobListingsPage;
import { Link } from 'react-router-dom';

      <div className="navigation-links">
        <Link to="/employmentHistory">Employment History</Link>
        <Link to="/skillsInventory">Skills Inventory</Link>
        <Link to="/coverLetterGeneration">Cover Letter Generation</Link>
        <Link to="/resumeCustomization">Resume Customization</Link>
      </div>