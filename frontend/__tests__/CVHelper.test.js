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
   * Tests that the CVHelper component rejects non-PDF files.
   */
  test('rejects non-PDF files', () => {
    const file = new File(['dummy content'], 'resume.txt', { type: 'text/plain' });
    render(<CVHelper />);
    fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [file] } });
    expect(screen.getByText('Invalid file type. Please upload a PDF.')).toBeInTheDocument();
  });

  test('handles CV upload error for large files', () => {
  test('handles CV upload error for large files', () => {
    const largeFile = new File([''.padStart(5 * 1024 * 1024, '0')], 'large_resume.pdf', { type: 'application/pdf' });
    render(<CVHelper />);
    fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [largeFile] } });
    expect(screen.getByText('File is too large. Please upload a file smaller than 5MB.')).toBeInTheDocument();
  });

  /**
   * Tests that the CVHelper component prompts the user to upload a CV before analysis can be performed.
   */
  test('attempts to analyze without uploading a CV', () => {
    render(<CVHelper />);
    fireEvent.click(screen.getByText('Analyze CV'));
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
