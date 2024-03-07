import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import ResumeCustomizationPage from '../pages/ResumeCustomizationPage';

jest.mock('axios');

const mockJobListings = [
  { id: '1', title: 'Software Engineer' },
  { id: '2', title: 'Product Manager' }
];

const mockCVCustomizationResponse = {
  analysisResults: 'Analysis results here.',
  customizedCV: 'Customized CV content here.'
};

beforeEach(() => {
  axios.get.mockResolvedValue({ data: mockJobListings });
  axios.post.mockResolvedValue({ data: mockCVCustomizationResponse });
});

test('renders without crashing', async () => {
  const { getByText } = render(<ResumeCustomizationPage />);
  await waitFor(() => expect(getByText('Customize CV')).toBeInTheDocument());
});

test('job selection updates selectedJob state', async () => {
  const { getByRole } = render(<ResumeCustomizationPage />);
  await waitFor(() => fireEvent.change(getByRole('combobox'), { target: { value: '1' } }));
  expect(axios.post).not.toHaveBeenCalled(); // Ensure CV customization hasn't been triggered yet
});

test('clicking customize CV button updates cvAnalysisResults and customizedCV', async () => {
  const { getByText } = render(<ResumeCustomizationPage />);
  fireEvent.click(getByText('Customize CV'));
  await waitFor(() => expect(getByText('Analysis results here.')).toBeInTheDocument());
  expect(getByText('Customized CV content here.')).toBeInTheDocument();
});

test('handles error fetching job listings gracefully', async () => {
  axios.get.mockRejectedValue(new Error('Error fetching job listings'));
  const { getByText } = render(<ResumeCustomizationPage />);
  await waitFor(() => expect(getByText('Error fetching job listings')).toBeInTheDocument());
});

test('handles error during CV customization gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Error customizing CV'));
  const { getByText } = render(<ResumeCustomizationPage />);
  fireEvent.click(getByText('Customize CV'));
  await waitFor(() => expect(getByText('Error customizing CV')).toBeInTheDocument());
});
