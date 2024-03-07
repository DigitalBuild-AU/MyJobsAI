import axios from 'axios';
import { fetchListingsFromAPI, validateInput } from '../utils/jobListingsUtils';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

jest.mock('axios');

describe('fetchListingsFromAPI tests', () => {
  const mockFilters = { status: 'open', company: 'Tech Inc' };
  const mockPage = 1;
  const mockUrl = `http://localhost:3000/api/joblistings/filter?page=${mockPage}&status=${mockFilters.status}&company=${mockFilters.company}`;

  beforeEach(() => {
    axios.get.mockClear();
  });

  it('should call axios with correct URL on successful API call with filters', async () => {
    axios.get.mockResolvedValue({ data: 'success' });
    await fetchListingsFromAPI(mockFilters, mockPage);
    expect(axios.get).toHaveBeenCalledWith(mockUrl);
  });

  it('should handle empty or undefined filters gracefully', async () => {
    axios.get.mockResolvedValue({ data: 'success' });
    await fetchListingsFromAPI({}, mockPage);
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/api/joblistings/filter?page=${mockPage}&status=undefined&company=undefined`);
  });

  it('should handle non-200 responses from the API', async () => {
    axios.get.mockRejectedValue(new Error('Request failed with status code 404'));
    await expect(fetchListingsFromAPI(mockFilters, mockPage)).rejects.toThrow('Request failed with status code 404');
  });
});

describe('validateInput tests', () => {
  it('should return true for valid string input', () => {
    expect(validateInput('valid input')).toBe(true);
  });

  it('should return false for empty string, null, and undefined inputs', () => {
    expect(validateInput('')).toBe(false);
    expect(validateInput(null)).toBe(false);
    expect(validateInput(undefined)).toBe(false);
  });

  it('should handle non-string inputs correctly', () => {
    expect(validateInput(123)).toBe(false);
    expect(validateInput({})).toBe(false);
    expect(validateInput([])).toBe(false);
  });
});
