"""
Tests the successful generation of a cover letter through the generateCoverLetter function.
"""
import axios from 'axios';
import { generateCoverLetter, handleCoverLetterResponse, handleCoverLetterError } from '../utils/coverLetterAPI';

jest.mock('axios');

describe('generateCoverLetter', () => {
  const mockJobDescription = 'Software Engineer';
  const mockUserName = 'John Doe';
  const mockUserSkills = 'JavaScript, React';
  const mockUserExperience = '5 years';
  const mockResponse = { data: { coverLetter: 'Your generated cover letter' } };

  it('successfully generates a cover letter', async () => {
    axios.post.mockResolvedValue(mockResponse);
    const response = await generateCoverLetter(mockJobDescription, mockUserName, mockUserSkills, mockUserExperience);
    expect(response).toEqual(mockResponse);
  });

  it('fails to generate a cover letter with an error', async () => {
  Tests the failure in generating a cover letter due to an error, verifying error handling.
  """
  it('fails to generate a cover letter with an error', async () => {
    const mockError = new Error('Network error');
    axios.post.mockRejectedValue(mockError);
    await expect(generateCoverLetter(mockJobDescription, mockUserName, mockUserSkills, mockUserExperience)).rejects.toThrow(mockError);
  });
});
Tests the extraction of a cover letter from the response, verifying the response handling.
"""
});

describe('handleCoverLetterResponse', () => {
  it('extracts cover letter from response', () => {
    const mockResponse = { data: { coverLetter: 'Your generated cover letter' } };
    const result = handleCoverLetterResponse(mockResponse);
    expect(result).toBe('Your generated cover letter');
  });
});

describe('handleCoverLetterError', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
"""
Test suite for the coverLetterAPI utility functions. It verifies the behavior of generating cover letters, handling successful responses, and error scenarios.
"""
    jest.clearAllMocks();
  });

  it('logs the error message', () => {
    const mockError = new Error('Failed to generate Cover Letter');
    handleCoverLetterError(mockError);
    expect(console.error).toHaveBeenCalledWith('Failed to generate Cover Letter:', mockError);
  });
});
"""
Tests logging of the error message when cover letter generation fails, verifying error logging.
"""
