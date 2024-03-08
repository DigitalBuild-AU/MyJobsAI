import { fetchListingsFromAPI } from './jobListingsUtils';

export const handleWindowSizeChange = (setView) => {
  if (window.innerWidth < 768) {
    setView('card');
  } else {
    setView('table');
  }
};

export const fetchListings = async (filters, page, setListings, setTotalPages) => {
  console.log(`Fetching listings with filters: ${JSON.stringify(filters)}, page: ${page}`);
  try {
    const response = await fetchListingsFromAPI(filters, page);
    setListings(response.data.listings);
    setTotalPages(response.data.totalPages);
  } catch (err) {
    console.error('Error fetching job listings', err);
  }
};

export const cleanupOnUnmount = (setFilters) => {
  window.removeEventListener('resize', () => handleWindowSizeChange(setFilters));
  setFilters({status: '', company: ''});
};
/**
 * This file contains utility functions used by the JobListingsPage component for handling window size changes, fetching job listings, and cleanup operations.
 */
/**
 * Adjusts the view state based on the window's width.
 *
 * @param {function} setView - The setter function for the view state.
 */
/**
 * Fetches job listings from the API.
 *
 * @param {Object} filters - The filters to apply to the job listings.
 * @param {number} page - The page number to fetch.
 * @param {function} setListings - The setter function for the listings state.
 * @param {function} setTotalPages - The setter function for the totalPages state.
 */
/**
 * Removes event listeners and resets filters upon component unmount.
 *
 * @param {function} setFilters - The setter function for the filters state.
 */
