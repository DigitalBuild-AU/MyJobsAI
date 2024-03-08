"""
This file tests the interviewAPI utility functions, focusing on submitting interview details, handling successful interview scheduling, and error management.
"""
import axios from 'axios';
import { submitInterview, handleInterviewResponse, handleInterviewError } from '../utils/interviewAPI';

jest.mock('axios');

describe('submitInterview', () => {
  const mockJobTitle = 'Frontend Developer';
  const mockDate = '2023-04-01';
  const mockNotes = 'Interview notes here';
  const mockResponse = { data: { message: 'Interview scheduled successfully' } };
  const mockError = new Error('Network error');

  """
  Verifies that the submitInterview function can successfully schedule an interview and update the application state accordingly.
  """
  it('successfully schedules an interview', async () => {
    axios.post.mockResolvedValue(mockResponse);
    const updateInterviewsState = jest.fn();
    await submitInterview(mockJobTitle, mockDate, mockNotes, updateInterviewsState);
    expect(updateInterviewsState).toHaveBeenCalledWith(mockResponse.data);
  });

  it('fails to schedule an interview with an error', async () => {
  Tests the error handling when the submitInterview function fails to schedule an interview due to a network or server error.
  """
  it('fails to schedule an interview with an error', async () => {
    axios.post.mockRejectedValue(mockError);
    const updateInterviewsState = jest.fn();
    await expect(submitInterview(mockJobTitle, mockDate, mockNotes, updateInterviewsState)).rejects.toThrow(mockError);
  });
});

describe('handleInterviewResponse', () => {
  it('correctly handles and returns interview data', () => {
    const mockResponse = { data: { message: 'Interview scheduled successfully' } };
    const result = handleInterviewResponse(mockResponse);
    expect(result).toEqual(mockResponse.data);
  });
});

describe('handleInterviewError', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('logs the error message', () => {
    const mockError = new Error('Error submitting interview');
    handleInterviewError(mockError);
    expect(console.error).toHaveBeenCalledWith('Error submitting interview:', mockError);
  });
});
  it('logs the error message', () => {
    const mockError = new Error('Error submitting interview');
    handleInterviewError(mockError);
    expect(console.error).toHaveBeenCalledWith('Error submitting interview:', mockError);
  });
});
"""
Verifies that the handleInterviewError function logs the appropriate error message when an error occurs during the interview scheduling process.
"""
