"""
Contains tests for the JobListingsPage component, including modal interactions for adding new job listings and ensuring the form inside the modal submits correctly.
"""
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobListingsPage from '../pages/JobListingsPage';
import Modal from '../components/Modal';
jest.mock('axios');
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('JobListingsPage Component', () => {
"""
Tests that the modal for adding new job listings opens correctly when the 'Add Job Listing' button is clicked.
"""
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
    // Simulating more detailed form submission with additional fields
    fireEvent.change(screen.getByPlaceholderText('Salary'), { target: { value: '120000' } });
    fireEvent.change(screen.getByPlaceholderText('Job URL'), { target: { value: 'https://techinc.jobs/software-engineer' } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Develop innovative software solutions.' } });
    fireEvent.change(screen.getByPlaceholderText('Contact Person'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Job Type'), { target: { value: 'Full-Time' } });
    fireEvent.click(screen.getByText('Submit'));
    
    // Assuming validation for required fields
    expect(screen.queryByText('Please fill out this field.')).not.toBeInTheDocument();
    
    // Handling submission response
    await waitFor(() => {
      expect(screen.getByText('Job listing added successfully')).toBeInTheDocument();
    });
"""
Tests that the modal closes when the "Cancel" button inside the modal is clicked.
"""
"""
Tests the form inside the modal for submitting new job listings, ensuring that the provided information is submitted correctly.
"""
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
  const mockUpdate = jest.fn();
  render(<JobListingsPage updateFunction={mockUpdate} />);
  fireEvent.click(screen.getByText('Edit Job Listing'));
  fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Senior Software Engineer' } });
  fireEvent.click(screen.getByText('Update'));

  await waitFor(() => {
    expect(mockUpdate).toHaveBeenCalledWith({
      jobTitle: 'Senior Software Engineer',
      // Include other fields as necessary
    });
    expect(screen.getByText('Job listing updated successfully')).toBeInTheDocument();
  });
});
  const mockDelete = jest.fn();
  render(<JobListingsPage deleteFunction={mockDelete} />);
  fireEvent.click(screen.getByText('Delete Job Listing'));

  await waitFor(() => {
    expect(mockDelete).toHaveBeenCalled();
    expect(screen.queryByText('Software Engineer')).not.toBeInTheDocument();
    expect(screen.getByText('Job listing deleted successfully')).toBeInTheDocument();
  });
});
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
"""
Tests that the JobListingTable component renders correctly with given listings data.
"""
    const listing = { id: 1, title: 'Software Engineer', company: 'Tech Inc.', location: 'Remote' };
    render(<JobListingCard listing={listing} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Inc.')).toBeInTheDocument();
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });
});
"""
Tests that the JobListingCard component renders correctly with specific listing data.
"""

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
"""
Tests the handleViewChangeBasedOnWindowSize function, ensuring it sets the view mode to "card" for window widths less than 768px.
"""
"""
Tests the handleViewChangeBasedOnWindowSize function, ensuring it sets the view mode to "table" for window widths greater than or equal to 768px.
"""
    test('updates filter state correctly', () => {
      const { result } = renderHook(() => useFilters());
      act(() => {
        result.current.updateFilters('status', 'Open');
      });
      expect(result.current.filters.status).toBe('Open');
    });

import { waitFor } from '@testing-library/react';

test('Filtering job listings updates displayed listings', async () => {
"""
Tests the updateFilters function, verifying it updates the filter state correctly.
"""
  axios.get.mockResolvedValue({
    data: { listings: [{ id: 1, jobTitle: 'Filtered Job', company: 'Filtered Company', location: 'Remote' }], totalPages: 1 }
  });

  render(<JobListingsPage />);
  userEvent.type(screen.getByPlaceholderText('Filter by status'), 'Active');
  userEvent.type(screen.getByPlaceholderText('Filter by company'), 'Filtered Company');

  await waitFor(() => {
    expect(screen.getByText('Filtered Job')).toBeInTheDocument();
  });
});
test('Filter functionality with different inputs updates displayed listings correctly', async () => {
  """
  Test case: Verifies that the filter functionality updates the displayed job listings correctly based on different inputs.
  Inputs: Mock responses for job listings and filter criteria such as status ('Open') and company ('Innovatech').
  Expected Outcome: The displayed job listings are correctly updated to show only those that match the applied filters.
  """
  axios.get.mockResolvedValueOnce({
    data: { listings: [{ id: 1, jobTitle: 'Job Page 1', company: 'Company 1', location: 'Remote' }], totalPages: 2 }
  }).mockResolvedValueOnce({
    data: { listings: [{ id: 2, jobTitle: 'Job Page 2', company: 'Company 2', location: 'Remote' }], totalPages: 2 }
  });

  render(<JobListingsPage />);
  await act(async () => {
    userEvent.click(screen.getByLabelText('Go to page 2'));
  });

  expect(screen.getByText('Job Page 2')).toBeInTheDocument();
});
  """
  Test case: Verifies that an error message is displayed when fetching filtered job listings fails.
test('Displays error message when job listing submission fails', async () => {
  axios.post.mockRejectedValueOnce(new Error('Failed to submit job listing'));
  render(<JobListingsPage />);
  fireEvent.click(screen.getByText('Add Job Listing'));
  fireEvent.click(screen.getByText('Submit'));

  await waitFor(() => {
    expect(screen.getByText('Failed to submit job listing')).toBeInTheDocument();
  });
});
test('Displays error message when editing a job listing fails', async () => {
  axios.put.mockRejectedValueOnce(new Error('Failed to update job listing'));
  render(<JobListingsPage />);
  fireEvent.click(screen.getByText('Edit Job Listing'));
  fireEvent.click(screen.getByText('Update'));

  await waitFor(() => {
    expect(screen.getByText('Failed to update job listing')).toBeInTheDocument();
  });
});
test('Displays error message when deleting a job listing fails', async () => {
  axios.delete.mockRejectedValueOnce(new Error('Failed to delete job listing'));
  render(<JobListingsPage />);
  fireEvent.click(screen.getByText('Delete Job Listing'));

  await waitFor(() => {
    expect(screen.getByText('Failed to delete job listing')).toBeInTheDocument();
  });
});
  Simulation: Mocks a get request to return an error.
  Expected Outcome: An error message indicating the failure to fetch job listings is displayed.
  """
test('Error message displayed when fetching filtered job listings fails', async () => {
  axios.get.mockRejectedValue(new Error('Failed to fetch filtered listings'));

  render(<JobListingsPage />);
  await waitFor(() => {
    expect(screen.getByText('Error fetching job listings')).toBeInTheDocument();
  });
});
  await waitFor(() => {
    expect(screen.getByText('Error fetching job listings')).toBeInTheDocument();

  });
});
"""
Tests the pagination functionality, ensuring that clicking on pagination controls updates the displayed job listings accordingly.
"""
"""
Tests the error handling when fetching job listings fails, ensuring that an appropriate error message is displayed.
"""
