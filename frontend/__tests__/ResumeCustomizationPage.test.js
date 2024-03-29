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
/**
 * Test suite for the Resume Customization Page.
 * 
 * Contains tests for the Resume Customization feature, ensuring the page renders correctly, job selection updates state, and CV customization results are displayed properly, including error handling.
 */
  const { getByText } = render(<ResumeCustomizationPage />);
  await waitFor(() => expect(getByText('Customize CV')).toBeInTheDocument());
});

test('job selection updates selectedJob state', async () => {
  const { getByRole } = render(<ResumeCustomizationPage />);
  await waitFor(() => fireEvent.change(getByRole('combobox'), { target: { value: '1' } }));
  expect(axios.post).not.toHaveBeenCalled(); // Ensure CV customization hasn't been triggered yet
});

test('clicking customize CV button updates cvAnalysisResults and customizedCV', async () => {
// Tests that the Resume Customization Page renders without crashing.
// Tests that job selection updates the selectedJob state.
// Tests clicking the customize CV button updates cvAnalysisResults and customizedCV.
  const { getByText } = render(<ResumeCustomizationPage />);
test('uploading a CV file updates uploadedCV state', async () => {
  const file = new File(['dummy content'], 'resume.pdf', { type: 'application/pdf' });
  const { getByLabelText } = render(<ResumeCustomizationPage />);
  const input = getByLabelText(/upload cv/i);
  fireEvent.change(input, { target: { files: [file] } });
  await waitFor(() => expect(input.files[0].name).toBe('resume.pdf'));
});

test('downloading as PDF triggers download with correct file type', async () => {
  const { getByText } = render(<ResumeCustomizationPage />);
  fireEvent.click(getByText('Download as PDF'));
  await waitFor(() => expect(axios.get).toHaveBeenCalledWith('/api/download_cv/pdf', expect.anything()));
});

test('downloading as DOC triggers download with correct file type', async () => {
  const { getByText } = render(<ResumeCustomizationPage />);
  fireEvent.click(getByText('Download as DOC'));
  await waitFor(() => expect(axios.get).toHaveBeenCalledWith('/api/download_cv/doc', expect.anything()));
});
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
// Tests handling error fetching job listings gracefully.
// Tests handling error during CV customization gracefully.
test('handles error during CV file download gracefully', async () => {
  axios.get.mockRejectedValueOnce(new Error('Error downloading CV'));
  const { getByText } = render(<ResumeCustomizationPage />);
  fireEvent.click(getByText('Download as PDF'));
  await waitFor(() => expect(getByText('Error downloading CV')).toBeInTheDocument());
});
