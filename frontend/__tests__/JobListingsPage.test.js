"""
File: JobListingsPage.test.js
Description: This file contains tests for the Job Listings Page. It includes tests for modal interactions for adding new job listings and ensuring the form inside the modal submits correctly.
"""
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobListingsPage from '../pages/JobListingsPage';
import Modal from '../components/Modal';
jest.mock('axios');

describe('JobListingsPage Component', () => {
  test('Modal opens when the "Add Job Listing" button is clicked', () => {
    render(<JobListingsPage />);
    fireEvent.click(screen.getByText('Add Job Listing'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('Modal closes when the "Cancel" button inside the modal is clicked', () => {
    render(<JobListingsPage />);
    fireEvent.click(screen.getByText('Add Job Listing'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('Form inside the modal correctly submits new job listings', () => {
"""
Confirms that the modal for adding new job listings on the Job Listings Page opens when the 'Add Job Listing' button is clicked, and ensures that the modal closes as expected when the 'Cancel' button is clicked.
"""
    const mockSubmit = jest.fn();
    render(<JobListingsPage submitFunction={mockSubmit} />);
    fireEvent.click(screen.getByText('Add Job Listing'));
    fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Software Engineer' } });
    fireEvent.change(screen.getByPlaceholderText('Company'), { target: { value: 'Tech Inc.' } });
    fireEvent.change(screen.getByPlaceholderText('Location'), { target: { value: 'Remote' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toHaveBeenCalledWith({
      jobTitle: 'Software Engineer',
      company: 'Tech Inc.',
      location: 'Remote'
    });
  });
});
"""
Tests that the modal on the Job Listings Page opens as expected when the 'Add Job Listing' button is clicked.
"""
"""
Verifies that the form within the modal on the Job Listings Page correctly submits new job listings with the provided information when the 'Submit' button is clicked.
"""
// Testing new components rendering
describe('New Components Rendering', () => {
  test('JobListingTable renders correctly with listings', () => {
    const listings = [{ id: 1, title: 'Software Engineer', company: 'Tech Inc.', location: 'Remote' }];
    render(<JobListingTable listings={listings} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Inc.')).toBeInTheDocument();
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });

  test('JobListingCard renders correctly with listing data', () => {
    const listing = { id: 1, title: 'Software Engineer', company: 'Tech Inc.', location: 'Remote' };
    render(<JobListingCard listing={listing} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Inc.')).toBeInTheDocument();
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });
});

// Testing utility functions
describe('Utility Functions', () => {
  describe('handleViewChangeBasedOnWindowSize', () => {
    test('sets view to "card" for window width less than 768px', () => {
      global.innerWidth = 767;
      const { result } = renderHook(() => useViewChange());
      act(() => {
        global.dispatchEvent(new Event('resize'));
      });
      expect(result.current.view).toBe('card');
    });

    test('sets view to "table" for window width greater than or equal to 768px', () => {
      global.innerWidth = 768;
      const { result } = renderHook(() => useViewChange());
      act(() => {
        global.dispatchEvent(new Event('resize'));
      });
      expect(result.current.view).toBe('table');
    });
  });

  describe('updateFilters', () => {
    test('updates filter state correctly', () => {
      const { result } = renderHook(() => useFilters());
      act(() => {
        result.current.updateFilters('status', 'Open');
      });
      expect(result.current.filters.status).toBe('Open');
    });
  });
});
