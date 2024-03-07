/**
 * Utility functions for fetching job listings from an API and validating input values.
 * Contains functions to interact with the job listings API endpoint and to ensure input values meet certain criteria.
 */
import axios from 'axios';

export const fetchListingsFromAPI = (filters, page) => {
  const { status, company } = filters;
  const url = `http://localhost:3000/api/joblistings/filter?page=${page}&status=${status}&company=${company}`;
  return axios.get(url);
};

export const validateInput = (value) => {
  return value !== '' && value !== null && value !== undefined;
};
