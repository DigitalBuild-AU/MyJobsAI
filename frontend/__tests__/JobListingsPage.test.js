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
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

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
import { waitFor } from '@testing-library/react';

test('Filtering job listings updates displayed listings', async () => {
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
test('Pagination updates displayed job listings', async () => {
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
test('Displays error message on API failure', async () => {
  axios.get.mockRejectedValue(new Error('API call failed'));

  render(<JobListingsPage />);
  await waitFor(() => {
    expect(screen.getByText('Error fetching job listings')).toBeInTheDocument();
  });
});
