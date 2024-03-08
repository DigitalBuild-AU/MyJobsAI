import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CVHelper from '../pages/CVHelper';

describe('CVHelper Component', () => {
  /**
   * Tests that the CVHelper component renders correctly.
   */
  test('renders correctly', () => {
    render(<CVHelper />);
    expect(screen.getByText('Upload your CV')).toBeInTheDocument();
  });

  // Tests that the CVHelper component handles CV upload successfully.
  test('handles CV upload successfully', () => {
   * Tests that the CVHelper component handles CV upload successfully.
   */
    const file = new File(['dummy content'], 'resume.pdf', { type: 'application/pdf' });
    render(<CVHelper />);
    fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [file] } });
    expect(screen.getByText('resume.pdf uploaded successfully')).toBeInTheDocument();
  });

  test('analyzes CV and provides suggestions', async () => {
"""
File: CVHelper.test.js
Description: Test suite for the CVHelper component, focusing on CV upload functionality, file type validation, and CV analysis suggestions.
"""
  test('analyzes CV and provides suggestions', async () => {
    render(<CVHelper />);
    fireEvent.click(screen.getByText('Analyze CV'));
    await screen.findByText('Suggestions for improvement');
    expect(screen.getByText('Consider using more action verbs')).toBeInTheDocument();
  });

  /**
import axios from 'axios';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import CVHelper from '../components/CVHelper';
jest.mock('axios');
    expect(screen.getByText('Please upload a CV first.')).toBeInTheDocument();
  });
});
test('generates CV suggestions based on user input', async () => {
  const { getByPlaceholderText, getByText } = render(<CVHelper />);
  fireEvent.change(getByPlaceholderText('Paste the job description here...'), { target: { value: 'Software Engineer' } });
  fireEvent.change(getByPlaceholderText('Paste your CV here...'), { target: { value: 'Experienced software engineer...' } });
  fireEvent.click(getByText('Get CV Suggestions'));

  await waitFor(() => {
    expect(getByText('Your CV has been tailored for a Software Engineer position.')).toBeInTheDocument();
  });
});

test('displays error when CV suggestions generation fails', async () => {
  axios.post.mockRejectedValueOnce(new Error('Network Error'));

  const { getByPlaceholderText, getByText } = render(<CVHelper />);
  fireEvent.change(getByPlaceholderText('Paste the job description here...'), { target: { value: 'Software Engineer' } });
  fireEvent.change(getByPlaceholderText('Paste your CV here...'), { target: { value: 'Experienced software engineer...' } });
  fireEvent.click(getByText('Get CV Suggestions'));

  await waitFor(() => {
    expect(getByText('Failed to fetch CV suggestions.')).toBeInTheDocument();
  });
});
test('generates CV suggestions based on user input', async () => {
  axios.post.mockResolvedValueOnce({ data: { suggestions: 'Your CV has been tailored for a Software Engineer position.' } });

  render(<CVHelper />);
  fireEvent.change(screen.getByPlaceholderText('Paste the job description here...'), { target: { value: 'Software Engineer' } });
  fireEvent.change(screen.getByPlaceholderText('Paste your CV here...'), { target: { value: 'Experienced software engineer...' } });
  fireEvent.click(screen.getByText('Get CV Suggestions'));

  await waitFor(() => {
    expect(screen.getByText('Your CV has been tailored for a Software Engineer position.')).toBeInTheDocument();
  });

  expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/gpt/cv_suggestions', {
    jobDescription: 'Software Engineer',
    userCV: 'Experienced software engineer...'
  });
});

test('displays error when CV suggestions generation fails', async () => {
  axios.post.mockRejectedValueOnce(new Error('Network Error'));

  render(<CVHelper />);
  fireEvent.change(screen.getByPlaceholderText('Paste the job description here...'), { target: { value: 'Software Engineer' } });
  fireEvent.change(screen.getByPlaceholderText('Paste your CV here...'), { target: { value: 'Experienced software engineer...' } });
  fireEvent.click(screen.getByText('Get CV Suggestions'));

  await waitFor(() => {
    expect(screen.getByText('Failed to fetch CV suggestions.')).toBeInTheDocument();
  });
});
