import axios from 'axios';
import { submitInterview, handleInterviewResponse, handleInterviewError } from '../utils/interviewAPI';

jest.mock('axios');

describe('submitInterview', () => {
  const mockJobTitle = 'Frontend Developer';
  const mockDate = '2023-04-01';
  const mockNotes = 'Interview notes here';
  const mockResponse = { data: { message: 'Interview scheduled successfully' } };
  const mockError = new Error('Network error');

  it('successfully schedules an interview', async () => {
    axios.post.mockResolvedValue(mockResponse);
    const updateInterviewsState = jest.fn();
    await submitInterview(mockJobTitle, mockDate, mockNotes, updateInterviewsState);
    expect(updateInterviewsState).toHaveBeenCalledWith(mockResponse.data);
  });

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
