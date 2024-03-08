"""
File: EmploymentHistoryPage.test.js
Description: This file tests the Employment History Page, focusing on rendering, fetching, displaying, and submitting employment history, along with error handling and modal interactions.
"""

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import EmploymentHistoryPage from '../pages/EmploymentHistoryPage';
import Modal from '../components/Modal';

jest.mock('axios');

const mockEmploymentHistory = [
  { position: 'Software Engineer', company: 'Tech Corp', startDate: '2020-01-01', endDate: '2021-01-01', responsibilities: 'Developing software', notableAchievements: 'Improved performance by 30%' }
];

beforeEach(() => {
  axios.get.mockResolvedValue({ data: mockEmploymentHistory });
  axios.post.mockResolvedValue({});
});

"""
Tests if the Employment History Page renders without crashing. It checks for the presence of placeholders and buttons related to employment history.
"""
test('renders without crashing', async () => {
/**
 * Test suite for the Employment History Page.
 * 
 * This file tests the Employment History feature, including rendering of the page, fetching and displaying employment history, adding new roles, and submitting employment history, along with error handling.
 */
  const { getByPlaceholderText, getByText } = render(<EmploymentHistoryPage />);
  await waitFor(() => expect(getByPlaceholderText('Position')).toBeInTheDocument());
  expect(getByText('Save Employment History')).toBeInTheDocument();
});

test('fetching employment history successfully', async () => {
  const { getByText } = render(<EmploymentHistoryPage />);
  await waitFor(() => expect(getByText('Developing software')).toBeInTheDocument());
});

test('adding a new role updates the state and displays the new role', async () => {
// Tests that the Employment History Page renders without crashing.
// Tests fetching employment history successfully.
  const { getByPlaceholderText, getByText, getByRole } = render(<EmploymentHistoryPage />);
  fireEvent.change(getByPlaceholderText('Position'), { target: { value: 'Developer' } });
test('modal opens when a new role is added', async () => {
  const { getByText, queryByText } = render(<EmploymentHistoryPage />);
  fireEvent.click(getByText('Add New Role'));
  await waitFor(() => expect(queryByText('Add New Role')).toBeInTheDocument());
});

test('modal closes and state updates correctly when employment history is successfully submitted', async () => {
  const { getByText, queryByText, getByRole } = render(<EmploymentHistoryPage />);
  fireEvent.click(getByText('Add New Role')); // Open modal
  fireEvent.change(getByRole('textbox', { name: 'Position' }), { target: { value: 'Developer' } });
  fireEvent.click(getByText('Save Employment History')); // Submit form
  await waitFor(() => expect(queryByText('Add New Role')).not.toBeInTheDocument()); // Modal should be closed
  expect(axios.post).toHaveBeenCalled();
});
test('editing an existing role updates the state correctly', async () => {
  const { getByText, getAllByPlaceholderText, getByRole } = render(<EmploymentHistoryPage />);
  // Assume the first role's position is 'Software Engineer' and we want to change it to 'Senior Software Engineer'
  fireEvent.change(getAllByPlaceholderText('Position')[0], { target: { value: 'Senior Software Engineer' } });
  fireEvent.click(getByRole('button', { name: 'Update Role' }));
  await waitFor(() => expect(getByText('Senior Software Engineer')).toBeInTheDocument());
});
  fireEvent.change(getByPlaceholderText('Company'), { target: { value: 'New Corp' } });
  fireEvent.click(getByRole('button', { name: 'Add New Role' }));
  await waitFor(() => expect(getByText('Developer')).toBeInTheDocument());
});

test('submitting employment history successfully', async () => {
// Tests adding a new role updates the state and displays the new role.
  render(<EmploymentHistoryPage />);
  fireEvent.click(getByText('Save Employment History'));
  await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/employmentHistory', { employmentHistory: mockEmploymentHistory }));
});

test('handles error fetching employment history gracefully', async () => {
  axios.get.mockRejectedValue(new Error('Failed to fetch employment history'));
  const { getByText } = render(<EmploymentHistoryPage />);
  await waitFor(() => expect(getByText('Failed to fetch employment history')).toBeInTheDocument());
});

test('handles error submitting employment history gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Failed to save employment history'));
  const { getByText } = render(<EmploymentHistoryPage />);
  fireEvent.click(getByText('Save Employment History'));
  await waitFor(() => expect(getByText('Failed to save employment history')).toBeInTheDocument());
});
// Tests submitting employment history successfully.
// Tests handling error fetching employment history gracefully.
// Tests handling error submitting employment history gracefully.
test('editing an existing role and submitting updates employment history successfully', async () => {
  const updatedEmploymentHistory = [
    ...mockEmploymentHistory,
    { position: 'Senior Software Engineer', company: 'Tech Corp', startDate: '2020-01-01', endDate: '2021-01-01', responsibilities: 'Leading software development', notableAchievements: 'Launched major product' }
  ];
  render(<EmploymentHistoryPage />);
  fireEvent.click(getByText('Save Employment History'));
  await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/employmentHistory', { employmentHistory: updatedEmploymentHistory }));
});
test('handles error when updating an existing role gracefully', async () => {
  axios.post.mockRejectedValueOnce(new Error('Failed to update employment history'));
  const { getByText, getByRole } = render(<EmploymentHistoryPage />);
  fireEvent.click(getByRole('button', { name: 'Update Role' }));
  await waitFor(() => expect(getByText('Failed to update employment history')).toBeInTheDocument());
});
