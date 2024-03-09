import axios from 'axios';
import { submitInterviewData } from './apiHelpers';

jest.mock('axios');

describe('submitInterviewData', () => {
  const mockJobTitle = 'Developer';
  const mockDate = '2023-01-01';
  const mockNotes = 'Test notes';

  it('sends a POST request with the correct parameters', async () => {
    const mockResponse = { id: 1, jobTitle: mockJobTitle, date: mockDate, notes: mockNotes };
    axios.post.mockResolvedValue({ data: mockResponse });

    const result = await submitInterviewData(mockJobTitle, mockDate, mockNotes);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/interviews', {
      jobTitle: mockJobTitle,
      date: mockDate,
      notes: mockNotes
    });
    expect(result).toEqual(mockResponse);
  });

  it('correctly handles a failed POST request', async () => {
/**
 * Tests for the `submitInterviewData` function in apiHelpers.
 * This suite checks the functionality of submitting interview data through a POST request,
 * including successful data submission and error handling for failed requests.
 */
  /**
   * Tests successful POST request submission with correct parameters.
   * Ensures the axios.post method is called with the expected URL and data,
   * and that the function returns the correct response.
   */
  /**
   * Tests error handling for a failed POST request.
   * Ensures that the function throws an error with the expected message when the request fails.
   */
    const errorMessage = 'Network Error';
    axios.post.mockRejectedValue(new Error(errorMessage));

    await expect(submitInterviewData(mockJobTitle, mockDate, mockNotes)).rejects.toThrow(errorMessage);
  });
});
/**
 * This file contains tests for the submitInterviewData function, specifically testing successful and failed POST requests.
 */
/**
 * Tests that the submitInterviewData function correctly handles a failed POST request by throwing an error with the expected message.
 */
"""
This file contains tests for the API helper functions defined in apiHelpers.js. It includes tests for submitting interview data to the backend and handling both successful and failed POST requests. The tests utilize Jest for the testing framework and mock axios for HTTP requests.
"""
