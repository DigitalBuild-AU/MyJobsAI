/**
 * JobListingsPage is a React functional component that renders the job listings page,
 * allowing users to view and filter job listings.
 */
/**
 * JobListingsPage.js
 * This file implements the JobListingsPage component, which acts as the container for the job listings components.
 * It integrates various functionalities related to job listings, providing a comprehensive view for users to explore and interact with job opportunities.
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { useForm } from 'react-hook-form';
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({ location: '', jobType: '', keywords: '' });
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
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
/**
 * useEffect hook that performs two main functions:
 * 1. Adds a 'resize' event listener to adjust the view state between 'card' and 'table' layouts based on the window's width.
 * 2. Fetches job listings from the server based on the current filters and page number.
 * It also includes a cleanup function to remove the event listener and reset filters on component unmount.
 */
  * Fetches job listings from the server based on the current filters and page number.
  */

  const fetchListings = async () => {
    console.log(`Fetching listings with filters: ${JSON.stringify(filters)}, page: ${page}`);
    try {
      const response = await fetchListingsFromAPI(filters, page);
      setListings(response.data.listings);

  /**
  * Adjusts the view state between 'card' and 'table' layouts based on the window's width.
  */
  /**
   * Updates the view state based on the current window size.
   * Sets the view to 'card' if window width is less than 768px, otherwise sets to 'table'.
   * @returns {void}
   */

const handleViewChangeBasedOnWindowSize = () => {
  if (window.innerWidth < 768) {
    setView('card');
  } else {
    setView('table');
  }
};

  /**
  * Cleans up event listeners and resets filters state on component unmount.
  */
  /**
/**
 * Fetches job listings from the server based on the current filters and page number.
 * It updates the listings state with the fetched data and sets the total pages for pagination.
 * In case of an error, it logs the error message.
 * 
 * @async
 * @function fetchListings
 * @returns {Promise<void>} A promise that resolves when the listings have been fetched and state has been updated.
 */
  * Cleans up event listeners and resets filters state on component unmount.
  * Specifically, removes the 'resize' event listener from the window.
  * @returns {void}
  */

const cleanupOnUnmount = () => {
  window.removeEventListener('resize', handleWindowSizeChange);
  setFilters({status: '', company: ''}); // Reset filters on component unmount
};
      setTotalPages(response.data.totalPages);
    } catch (err) {
      logError('Error fetching job listings', err);
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
/**
 * Cleans up event listeners and resets filters state on component unmount.
 * Specifically, removes the 'resize' event listener from the window and resets the filters state to its initial values.
 * 
 * @function cleanupOnUnmount
 * @returns {void}
 */
   * Generates the pagination component by creating buttons for each page.
   * The button corresponding to the current page is disabled to indicate the active page. This function does not take any parameters and returns a JSX.Element containing the pagination buttons.
   *
   * @param none - This function does not take any parameters.
   * @returns {JSX.Element} - A JSX.Element containing the pagination buttons.
   */
  // Extract the logic for rendering the pagination into a separate function
const renderPagination = () => {
  const [errorState, setErrorState] = useState({ status: false, company: false });
    // Toggle modal visibility
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

    // Handle view change
    const handleViewChange = (newView) => {
      setView(newView);
    };
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(createPaginationButton(i));
    }
    return <div>{pages}</div>;
  };

  /**
   * Updates the filters state with new values for a given filter.
   * This function updates the state of filters based on user input, ensuring that the listings are filtered according to the specified criteria.
   *
   * @param {string} filterName - The name of the filter to update.
   * @param {string} filterValue - The new value for the filter.
   */

 /**
 * Updates the filters state with new values for a given filter.
 * This function updates the state of filters based on user input, ensuring that the listings are filtered according to the specified criteria.
 * @param {string} filterName - The name of the filter to update.
 * @param {string} filterValue - The new value for the filter.
 */
  /**
   * Updates the filters state with new values for a given filter.
   * @param {string} filterName - The name of the filter to update.
   * @param {string} filterValue - The new value for the filter.
   * @returns {void}
   */

  const updateFilters = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  /**
   * Creates a button element for a given page number in the pagination component.
   * This function generates a button for navigating to a specific page. The button is labeled with the page number.
   *
   * @param {number} pageNumber - The page number for the button.
   * @returns {JSX.Element} - A button element for pagination, enabling navigation to the specified page
   */
  
  const createPaginationButton = (pageNumber) => (
    <button key={pageNumber} aria-label={`Go to page ${pageNumber + 1}`}>{pageNumber + 1}</button>
  );

  return (

    <div className="job-listings-page">

/**
 * Updates the error state for a given field based on whether its value is empty.
 * This function is called when the value of an input field changes. It checks if the new value is an empty string and updates the errorState object accordingly. If the value is empty, the error state for the specified field is set to true, indicating an error. Otherwise, it is set to false.
 *
 * @param {string} name - The name of the field to update the error state for.
/**
 * Updates the filters state with new values for a given filter.
 * This function is responsible for updating the state of filters based on user input, ensuring that the listings are filtered according to the specified criteria.
 * 
 * @function updateFilters
 * @param {string} filterName - The name of the filter to update.
 * @param {string} filterValue - The new value for the filter.
 * @returns {void}
 */
 * @param {string} value - The new value of the field.
 */

const handleErrorState = (name, value) => {
  const isValid = validateInput(value);
  setErrorState({ ...errorState, [name]: !isValid });
};
    <div className="job-listings-page">
/**
 * Updates the error state for a given field based on whether its value is empty.
 * This function checks if the new value of an input field is an empty string and updates the errorState object accordingly.
 * If the value is empty, the error state for the specified field is set to true, indicating an error. Otherwise, it is set to false.
 * 
 * @function handleErrorState
 * @param {string} name - The name of the field to update the error state for.
 * @param {string} value - The new value of the field.
 * @returns {void}
 */
      <select name="view" onChange={(e) => handleViewChange(e.target.value)}>
        <option value="table">Table View</option>
        <option value="card">Card View</option>
      </select>

      <div>
        <input name="status" placeholder="Filter by status" onChange={(e) => updateFilters('status', e.target.value)} />
        {errorState.status && <span className="validation-error">Please enter a valid status.</span>}
      </div>
      <div>
        <input name="company" placeholder="Filter by company" onChange={(e) => updateFilters('company', e.target.value)} />
        {errorState.company && <span className="validation-error">Please enter a valid company name.</span>}
      </div>

      {view === 'table' ? <JobListingTable listings={listings} /> : listings.map(listing => <JobListingCard key={listing._id} listing={listing} />)}
      <div>
  /**
   * Submits the job listing form data to the server and handles the response.
   * This function is triggered upon form submission.
   * @param {Event} e - The event object to prevent the default form submission behavior.
   * @returns {void} - This function does not return a value but may trigger a UI update based on the response.
   */
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const jobListing = Object.fromEntries(formData.entries());
          axios.post('/api/addJobListing', jobListing)
            .then(response => {
              console.log('Job listing added successfully', response.data);
              // Optionally refresh the job listings to include the newly added listing
            })
            .catch(error => console.error('Error adding job listing:', error));
        }}>
          <input name="jobTitle" placeholder="Job Title" required />
          <input name="company" placeholder="Company" required />
          <input name="salary" placeholder="Salary" />
          <input name="location" placeholder="Location" required />
          <select name="jobType" required>
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Casual">Casual</option>
            <option value="Temp">Temp</option>
            <option value="Contract">Contract</option>
          </select>
          <input name="contactPerson" placeholder="Contact Person" />
            <option value="">Select Status</option>
            <option value="New">New</option>
            <option value="Applied">Applied</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Closed">Closed</option>
/**
 * Handles the view change event by updating the view state.
 * This function updates the view state ('card' or 'table') based on user selection from the dropdown menu.
 * 
 * @function handleViewChange
 * @param {string} newView - The new view state to set.
 * @returns {void}
 */
            <option value="Offer">Offer</option>
          </select>
          <textarea name="description" placeholder="Description"></textarea>
          <input name="jobUrl" placeholder="Job URL" />
          <button type="submit">Add Listing</button>
          </form>
          </div>
      {/* Pagination can be added here */}
    </div>
};

export default JobListingsPage;
import { Link } from 'react-router-dom';

      <div className="navigation-links">
        <Link to="/employmentHistory">Employment History</Link>
import { useState } from 'react';
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

const breadcrumbPath = [
  { label: 'Home', link: '/' },
  { label: 'Job Listings', link: '/jobListings' },
];

return (
  <>
    <ResponsiveNavbar />
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div className="job-listings-page">
      <Breadcrumbs pathElements={breadcrumbPath} />
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
  </>
);
        <Link to="/skillsInventory">Skills Inventory</Link>
        <Link to="/coverLetterGeneration">Cover Letter Generation</Link>
        <Link to="/resumeCustomization">Resume Customization</Link>
      </div>

      <button onClick={() => setShowGuide(true)} style={{ margin: '10px 0', padding: '5px 10px' }}>Show Guide</button>
      {showGuide && <InteractiveGuide steps={getJobListingsPageGuideSteps()} />}
      
import Modal from '../components/Modal';

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalContent, setModalContent] = useState(null);

const handleOpenModal = (content) => {
  setModalContent(content);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setModalContent(null);
};

const renderAddEditModal = () => (
  <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    {modalContent}
  </Modal>
);

<div className="add-edit-buttons">
  <button onClick={() => handleOpenModal('add')}>Add Listing</button>
  <button onClick={() => handleOpenModal('edit')}>Edit Listing</button>
</div>
{renderAddEditModal()}
