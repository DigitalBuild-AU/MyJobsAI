import axios from 'axios';

export const fetchListingsFromAPI = (filters, page) => {
  const { status, company } = filters;
  const url = `http://localhost:3000/api/joblistings/filter?page=${page}&status=${status}&company=${company}`;
  return axios.get(url);
};

export const validateInput = (value) => {
  return value !== '' && value !== null && value !== undefined;
};
