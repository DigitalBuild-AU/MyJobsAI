/**
 * httpClient.js
 * Purpose: This file configures and exports an Axios instance for making HTTP requests.
 * It sets a base URL and default headers for JSON content type.
 */
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default httpClient;
