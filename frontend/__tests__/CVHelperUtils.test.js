import React from 'react';
import { processCVResponse } from '../components/CVHelperUtils';

describe('CVHelperUtils Functionality Tests', () => {
  test('processCVResponse with valid CV suggestions', () => {
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    const mockResponse = {
      data: {
        suggestions: 'Improve your CV by adding more technical skills.'
      }
    };

    processCVResponse(mockResponse, setCvSuggestions, setError);

    expect(setCvSuggestions).toHaveBeenCalledWith('Improve your CV by adding more technical skills.');
    expect(setError).toHaveBeenCalledWith('');
  });

  test('processCVResponse with null response', () => {
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    const mockResponse = null;

    processCVResponse(mockResponse, setCvSuggestions, setError);

    expect(setError).toHaveBeenCalledWith('Failed to fetch CV suggestions. Please try again.');
    expect(setCvSuggestions).toHaveBeenCalledWith('');
  });

  test('processCVResponse with response lacking data', () => {
    const setCvSuggestions = jest.fn();
    const setError = jest.fn();
    const mockResponse = {};

    processCVResponse(mockResponse, setCvSuggestions, setError);

    expect(setError).toHaveBeenCalledWith('Failed to fetch CV suggestions. Please try again.');
    expect(setCvSuggestions).toHaveBeenCalledWith('');
  });
});
