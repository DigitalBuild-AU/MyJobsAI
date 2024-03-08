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
    const errorMessage = 'Network Error';
    axios.post.mockRejectedValue(new Error(errorMessage));

    await expect(submitInterviewData(mockJobTitle, mockDate, mockNotes)).rejects.toThrow(errorMessage);
  });
});
/**
 * This file contains tests for the submitInterviewData function, specifically testing successful and failed POST requests.
 */
