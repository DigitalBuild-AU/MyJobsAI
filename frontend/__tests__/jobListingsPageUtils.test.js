/**
 * Tests for Job Listings Page Utility Functions.
 *
 * This file contains tests for the utility functions specific to the Job Listings Page. It includes
 * tests for fetching, filtering, and processing job listings data to be displayed on the Job Listings Page.
 * These tests ensure that the utility functions behave as expected under various conditions.
 */

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
    /**
     * Tests that fetchListings calls setListings and setTotalPages with correct data on successful API fetch.
     */
    it('calls setListings and setTotalPages with correct data on successful fetch', async () => {
  /**
   * Tests for the fetchListings function.
   * These tests verify the behavior of fetchListings when it successfully fetches data from the API and when it encounters a fetch failure.
   * - The first test ensures that on a successful fetch, the correct data is passed to setListings and setTotalPages functions.
   * - The second test checks that an error is logged when the fetch operation fails.
   */
      const mockData = { listings: [{ id: 1, title: 'Test Job' }], totalPages: 3 };
      fetchListingsFromAPI.mockResolvedValue({ data: mockData });
      const setListingsMock = jest.fn();
      const setTotalPagesMock = jest.fn();

      await fetchListings({}, 1, setListingsMock, setTotalPagesMock);

      expect(setListingsMock).toHaveBeenCalledWith(mockData.listings);
      expect(setTotalPagesMock).toHaveBeenCalledWith(mockData.totalPages);
    });

    /**
     * Tests that fetchListings logs an error to the console on fetch failure.
     */
    it('logs error on fetch failure', async () => {
  /**
   * Verifies that fetchListings calls setListings and setTotalPages with the correct data on a successful API fetch.
   * Mocks the API response and checks the arguments passed to the mock functions.
   */
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
    /**
     * Tests that cleanupOnUnmount removes the resize event listener and resets filters to their default values.
     */
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
  /**
   * Ensures that fetchListings logs an appropriate error message to the console when the API fetch operation fails.
   * Mocks a fetch failure and verifies that console.error is called with the expected arguments.
   */
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
