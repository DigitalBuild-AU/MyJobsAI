import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import JobListingsPage from '../../pages/JobListingsPage';

/**
   * Renders the JobListingsPage component with provided mock listings data.
   * @param {Array} listings - Mock data for job listings to be rendered.
   * @returns Rendered component with mock data for testing.
   */
export const renderWithMockData = (listings) => {
  return render(<JobListingsPage listings={listings} />);
};

/**
   * Simulates a window size change event to test responsiveness.
   * @param {number} newWidth - The new width value for the window.
   */
export const simulateWindowSizeChange = (newWidth) => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: newWidth });
  window.dispatchEvent(new Event('resize'));
};

/**
   * Initializes mock functions and states for testing the JobListingsPage component.
   * Sets up mocks for useState to control filters and error states.
   * @returns {Object} An object containing mock functions and the initial state.
   */
export const initializeTestMocks = () => {
  const setFiltersMock = jest.fn();
  const setErrorStateMock = jest.fn();
  const initialState = { status: false, company: false };

  jest.spyOn(React, 'useState')
    .mockImplementationOnce(() => [initialState, setFiltersMock])
    .mockImplementationOnce(() => [initialState, setErrorStateMock]);

  return { setFiltersMock, setErrorStateMock, initialState };
};
/**
 * This file provides utility functions for testing the JobListingsPage component, including rendering with mock data and simulating window size changes.
 */
  jest.spyOn(React, 'useState')
    .mockImplementationOnce(() => [initialState, setFiltersMock])
    .mockImplementationOnce(() => [initialState, setErrorStateMock]);

  return { setFiltersMock, setErrorStateMock, initialState };
};
    .mockImplementationOnce(() => [initialState, setFiltersMock])
    .mockImplementationOnce(() => [initialState, setErrorStateMock]);

  return { setFiltersMock, setErrorStateMock, initialState };
};
    .mockImplementationOnce(() => [initialState, setFiltersMock])
    .mockImplementationOnce(() => [initialState, setErrorStateMock]);

  return { setFiltersMock, setErrorStateMock, initialState };
};
