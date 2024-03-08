import { describe, it, expect, jest } from '@jest/globals';
import { handleWindowSizeChange, fetchListings, cleanupOnUnmount } from '../utils/jobListingsPageUtils';
import { fetchListingsFromAPI } from '../utils/jobListingsUtils';

jest.mock('../utils/jobListingsUtils', () => ({
  fetchListingsFromAPI: jest.fn(),
}));

describe('jobListingsPageUtils', () => {
/**
 * Tests for utility functions used in the Job Listings Page.
 * This file includes tests for handling window size changes, fetching job listings from the API,
 * and cleanup operations on component unmount.
 */
  describe('handleWindowSizeChange', () => {
    /**
    * Tests that handleWindowSizeChange sets the view mode to 'card' when the window width is less than 768px.
    */
    it('sets view to card on window width less than 768px', () => {
      const setViewMock = jest.fn();
      global.innerWidth = 500;
      handleWindowSizeChange(setViewMock);
      expect(setViewMock).toHaveBeenCalledWith('card');
    });

    it('sets view to table on window width greater than or equal to 768px', () => {
      const setViewMock = jest.fn();
      global.innerWidth = 1024;
      handleWindowSizeChange(setViewMock);
      expect(setViewMock).toHaveBeenCalledWith('table');
    });
  });

  describe('fetchListings', () => {
/**
 * Tests the handleWindowSizeChange function.
 * This function adjusts the view mode based on the window's width.
 * 
 * @param {Function} setView - A function to set the view mode ('card' or 'table').
 */
    it('calls setListings and setTotalPages with correct data on successful fetch', async () => {
      const mockData = { listings: [{ id: 1, title: 'Test Job' }], totalPages: 3 };
      fetchListingsFromAPI.mockResolvedValue({ data: mockData });
      const setListingsMock = jest.fn();
      const setTotalPagesMock = jest.fn();

      await fetchListings({}, 1, setListingsMock, setTotalPagesMock);

      expect(setListingsMock).toHaveBeenCalledWith(mockData.listings);
      expect(setTotalPagesMock).toHaveBeenCalledWith(mockData.totalPages);
    });

    it('logs error on fetch failure', async () => {
      const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    it('logs error on fetch failure', async () => {
      const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
      fetchListingsFromAPI.mockRejectedValue(new Error('Fetch failed'));

      await fetchListings({}, 1, jest.fn(), jest.fn());

      expect(consoleErrorMock).toHaveBeenCalledWith('Error fetching job listings', expect.any(Error));
      consoleErrorMock.mockRestore();
    });
  });

  describe('cleanupOnUnmount', () => {
    it('removes resize event listener and resets filters', () => {
      const removeEventListenerMock = jest.spyOn(window, 'removeEventListener');
      const setFiltersMock = jest.fn();

      cleanupOnUnmount(setFiltersMock);

      expect(removeEventListenerMock).toHaveBeenCalled();
      expect(setFiltersMock).toHaveBeenCalledWith({ status: '', company: '' });
      removeEventListenerMock.mockRestore();
/**
 * Tests the fetchListings function.
 * This function fetches job listings from the API and updates the state with the fetched data.
 * 
 * @param {Object} filters - The filters to apply when fetching the listings.
 * @param {number} page - The current page number.
 * @param {Function} setListings - A function to set the listings state.
 * @param {Function} setTotalPages - A function to set the total pages state.
 */
    });
  });
});
/**
 * Tests the cleanupOnUnmount function.
 * This function performs cleanup operations, such as removing event listeners and resetting filters, when the component unmounts.
 * 
 * @param {Function} setFilters - A function to reset the filters state.
 */
