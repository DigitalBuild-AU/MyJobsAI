/**
 * Utility functions for fetching job listings from an API and validating input values.
 * Contains functions to interact with the job listings API endpoint and to ensure input values meet certain criteria.
 */
import axios from 'axios';

/**
 * Fetches job listings from the API based on provided filters and pagination.
 * @param filters - An object containing filter criteria such as status and company.
 * @param page - The current page number for pagination.
 * @returns Promise - A promise that resolves with the API response.
 */
export const fetchListingsFromAPI = (filters, page) => {
  const { status, company } = filters;
  const url = `http://localhost:3000/api/joblistings/filter?page=${page}&status=${status}&company=${company}`;
  return axios.get(url);
};

/**
 * Validates the given input value to ensure it is not empty, null, or undefined.
 * @param value - The input value to validate.
 * @returns boolean - True if the value is valid, false otherwise.
 */
export const validateInput = (value) => {
  return value !== '' && value !== null && value !== undefined;
};
