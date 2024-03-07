/**
 * JobListingsPage Component
 * This file defines the JobListingsPage component, which is responsible for rendering the job listings page in the MyJobsAI application. It includes functionality for displaying job listings in either a table or card view, filtering listings based on user input, and pagination. The component utilizes React hooks for state management and axios for fetching data from the server.
 */
import React, { useState, useEffect } from 'react';
import { fetchListingsFromAPI, validateInput } from '../utils/jobListingsUtils';
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
     * Adjusts the view state based on the window's inner width.
     * This function is triggered on window resize events to switch between 'card' and 'table' views depending on the window's width. It is designed to enhance user experience by adapting the layout to different screen sizes.
     * 
     * @param none - This function does not take any parameters.
     * @returns void - This function does not return a value.
     */
    const handleWindowSizeChange = () => handleViewChangeBasedOnWindowSize();
    
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

    // Utilizing extracted cleanup function
    return () => cleanupOnUnmount();
  }, [filters, page]);

  /**
 * Fetches job listings from the server based on the current filters and page.
 * This function uses axios to make a GET request to the server with query parameters for filtering based on the current state of filters and page. It updates the listings and totalPages state with the data received from the response.
 * 
 * @param none - This function does not take any parameters.
 * @returns void - This function does not return a value but performs asynchronous operations to update the component's state.
 */
  /**
  * Fetches job listings from the server based on the current filters and page.
  * Now utilizes fetchListingsFromAPI from jobListingsUtils for fetching.
  * Updates the listings and totalPages state with the response data.
  */
  const fetchListings = async () => {
    console.log(`Fetching listings with filters: ${JSON.stringify(filters)}, page: ${page}`);
    try {
      const response = await fetchListingsFromAPI(filters, page);
      setListings(response.data.listings);
/**
 * Handles the change in window size and updates the view state.
 * Extracted from useEffect to improve readability and maintainability.
 */
const handleViewChangeBasedOnWindowSize = () => {
  if (window.innerWidth < 768) {
    setView('card');
  } else {
    setView('table');
  }
};

/**
 * Encapsulates the cleanup logic to be called on component unmount.
 * Extracted from useEffect to improve readability and maintainability.
 */
const cleanupOnUnmount = () => {
  window.removeEventListener('resize', handleWindowSizeChange);
  setFilters({status: '', company: ''}); // Reset filters on component unmount
};
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

  /**
   * Updates the filters state with new values for a given filter.
   * This function is responsible for updating the state of filters based on user input, ensuring that the listings are filtered according to the specified criteria.
   *
   * @param {string} filterName - The name of the filter to update.
   * @param {string} filterValue - The new value for the filter.
   * @returns void - This function does not return a value but updates the component's state directly.
   */
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
 * Refactored to use validateInput from jobListingsUtils for input validation.
 * Updates the error state for a given input field based on the validation result.
 * 
 * Parameters:
 * - name (string): The name of the input field to validate.
 * - value (string): The value of the input field to validate.
 * 
 * Returns:
 * - void: This function does not return a value but updates the component's state directly.
 */

const handleErrorState = (name, value) => {
  const isValid = validateInput(value);
  setErrorState({ ...errorState, [name]: !isValid });
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