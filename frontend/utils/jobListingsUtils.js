/**
 * Utility functions for fetching job listings from an API and validating input values.
 * Contains functions to interact with the job listings API endpoint and to ensure input values meet certain criteria.
 */
import httpClient from './httpClient';

/**
 * Fetches job listings from the API based on provided filters and pagination.
 * @param filters - An object containing filter criteria such as status and company.
 * @param page - The current page number for pagination.
 * @returns Promise - A promise that resolves with the API response.
 */
export const fetchListingsFromAPI = (filters, page) => {
  const { status, company } = filters;
  const url = `http://localhost:3000/api/joblistings/filter?page=${page}&status=${status}&company=${company}`;
  return httpClient.get(`/joblistings/filter?page=${page}&status=${status}&company=${company}`);
};

/**
 * Validates the given input value to ensure it is not empty, null, or undefined.
 * @param value - The input value to validate.
 * @returns boolean - True if the value is valid, false otherwise.
 */
export const validateInput = (value) => {
  return value !== '' && value !== null && value !== undefined;
};
// Simple in-memory cache to store job listings responses
const listingsCache = {};

/**
 * Fetches job listings from the API based on provided filters and pagination.
 * Implements caching to reduce redundant API calls.
 * @param filters - An object containing filter criteria such as status and company.
 * @param page - The current page number for pagination.
 * @returns Promise - A promise that resolves with the API response or cached data.
 */
export const fetchListingsFromAPI = (filters, page) => {
  const { status, company } = filters;
  const cacheKey = `page=${page}&status=${status}&company=${company}`;

  // Check if the data is already in cache
  if (listingsCache[cacheKey]) {
    return Promise.resolve(listingsCache[cacheKey]);
  }

  // If not in cache, fetch from API and store in cache
  return httpClient.get(`/joblistings/filter?page=${page}&status=${status}&company=${company}`)
    .then(response => {
      listingsCache[cacheKey] = response;
      return response;
    });
};
