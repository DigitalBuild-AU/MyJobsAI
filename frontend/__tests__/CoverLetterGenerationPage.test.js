import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CoverLetterGenerationPage from '../pages/CoverLetterGenerationPage';

jest.mock('axios');

const mockJobListings = [
  { id: '1', title: 'Software Engineer', contact: 'John Doe' },
  { id: '2', title: 'Product Manager', contact: 'Jane Smith' }
];

const mockCoverLetter = 'Your application for Software Engineer has been created.';

beforeEach(() => {
  axios.get.mockResolvedValue({ data: mockJobListings });
  axios.post.mockResolvedValue({ data: { coverLetter: mockCoverLetter } });
});

test('renders without crashing', async () => {
/**
 * Test suite for the Cover Letter Generation Page.
 * 
 * This file contains tests for the Cover Letter Generation feature, ensuring that the page renders correctly, job selection updates the contact person, and cover letters are generated and displayed properly, including error handling.
 */
test('renders without crashing', async () => {
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  await waitFor(() => expect(getByText('Create Cover Letter')).toBeInTheDocument());
  expect(getByRole('combobox')).toBeInTheDocument();
});

// Tests that selecting a job updates the contact person.
test('selecting a job updates contact person', async () => {
test('download buttons appear after generating cover letter', async () => {
  const { getByText, queryByText } = render(<CoverLetterGenerationPage />);
  expect(queryByText('Download as PDF')).not.toBeInTheDocument();
  expect(queryByText('Download as DOC')).not.toBeInTheDocument();
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  expect(getByText('Download as PDF')).toBeInTheDocument();
  expect(getByText('Download as DOC')).toBeInTheDocument();
});
  const { getByRole, getByDisplayValue } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.change(getByRole('combobox'), { target: { value: '1' } }));
  expect(getByDisplayValue('John Doe')).toBeInTheDocument();
});

test('clicking create cover letter displays generated letter', async () => {
test('clicking create cover letter displays generated letter', async () => {
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  expect(getByText(mockCoverLetter)).toBeInTheDocument();
});

// Tests error handling when fetching job listings fails.
test('download as PDF button triggers download', async () => {
  console.log = jest.fn(); // Mock console.log for this test
  const { getByText } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  fireEvent.click(getByText('Download as PDF'));
  expect(console.log).toHaveBeenCalledWith('Downloading as PDF...');
});

test('download as DOC button triggers download', async () => {
  console.log = jest.fn(); // Mock console.log for this test
  const { getByText } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  fireEvent.click(getByText('Download as DOC'));
  expect(console.log).toHaveBeenCalledWith('Downloading as DOC...');
});
test('handles error fetching job listings gracefully', async () => {
  axios.get.mockRejectedValue(new Error('Error fetching job listings'));
  const { getByText } = render(<CoverLetterGenerationPage />);
  await waitFor(() => expect(getByText('Error fetching job listings:')).toBeInTheDocument());
});

// Tests error handling when generating a cover letter fails.
test('handles error generating cover letter gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Error generating cover letter'));
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  fireEvent.click(getByRole('button', { name: 'Create Cover Letter' }));
  await waitFor(() => expect(getByText('Error generating cover letter:')).toBeInTheDocument());
});
