import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import JobListingsPage from '../../pages/JobListingsPage';

export const renderWithMockData = (listings) => {
  return render(<JobListingsPage listings={listings} />);
};

export const simulateWindowSizeChange = (newWidth) => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: newWidth });
  window.dispatchEvent(new Event('resize'));
};

export const initializeTestMocks = () => {
  const setFiltersMock = jest.fn();
  const setErrorStateMock = jest.fn();
  const initialState = { status: false, company: false };

mockUseState(initialState, setFiltersMock, setErrorStateMock);
};
export const mockUseState = (initialState, setFiltersMock, setErrorStateMock) => {
  jest.spyOn(React, 'useState')
    .mockImplementationOnce(() => [initialState, setFiltersMock])
    .mockImplementationOnce(() => [initialState, setErrorStateMock]);
};
