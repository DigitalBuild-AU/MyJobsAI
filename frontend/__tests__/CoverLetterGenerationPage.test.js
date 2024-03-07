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
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  await waitFor(() => expect(getByText('Create Cover Letter')).toBeInTheDocument());
  expect(getByRole('combobox')).toBeInTheDocument();
});

test('selecting a job updates contact person', async () => {
  const { getByRole, getByDisplayValue } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.change(getByRole('combobox'), { target: { value: '1' } }));
  expect(getByDisplayValue('John Doe')).toBeInTheDocument();
});

test('clicking create cover letter displays generated letter', async () => {
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  expect(getByText(mockCoverLetter)).toBeInTheDocument();
});

test('handles error fetching job listings gracefully', async () => {
  axios.get.mockRejectedValue(new Error('Error fetching job listings'));
  const { getByText } = render(<CoverLetterGenerationPage />);
  await waitFor(() => expect(getByText('Error fetching job listings:')).toBeInTheDocument());
});

test('handles error generating cover letter gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Error generating cover letter'));
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  fireEvent.click(getByRole('button', { name: 'Create Cover Letter' }));
  await waitFor(() => expect(getByText('Error generating cover letter:')).toBeInTheDocument());
});
