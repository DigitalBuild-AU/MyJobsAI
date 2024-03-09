import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CVHelper from '../components/CVHelper';

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
test('handles various file formats and sizes for CV upload', () => {
  const smallPDF = new File(['small'], 'small.pdf', { type: 'application/pdf' });
  const largePDF = new File(new Array(1024 * 1024 * 5).fill('a').join(''), 'large.pdf', { type: 'application/pdf' }); // 5MB PDF
  const wordDoc = new File(['dummy content'], 'resume.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  const unsupportedFile = new File(['dummy content'], 'resume.txt', { type: 'text/plain' });

  render(<CVHelper />);

  // Small PDF upload
  fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [smallPDF] } });
  expect(screen.getByText('small.pdf uploaded successfully')).toBeInTheDocument();

  // Large PDF upload
  fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [largePDF] } });
  expect(screen.getByText('File size should not exceed 5MB')).toBeInTheDocument();

  // Word document upload
  fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [wordDoc] } });
  expect(screen.getByText('resume.docx uploaded successfully')).toBeInTheDocument();

  // Unsupported file upload
  fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [unsupportedFile] } });
  expect(screen.getByText('Unsupported file format')).toBeInTheDocument();
});
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
// Additional scenario: Providing different CV content and job descriptions
test('analyzes CV with different content and job descriptions', async () => {
  render(<CVHelper />);
  fireEvent.change(screen.getByPlaceholderText('Paste the job description here...'), { target: { value: 'Data Scientist' } });
  fireEvent.change(screen.getByPlaceholderText('Paste your CV here...'), { target: { value: 'Data analysis and machine learning...' } });
  fireEvent.click(screen.getByText('Analyze CV'));

  await screen.findByText('Suggestions for improvement');
  expect(screen.getByText('Include more technical terms related to data science')).toBeInTheDocument();
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
test('displays error for unsupported file format during CV upload', async () => {
  const unsupportedFile = new File(['dummy content'], 'resume.txt', { type: 'text/plain' });
  render(<CVHelper />);
  fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [unsupportedFile] } });

  await waitFor(() => {
    expect(screen.getByText('Unsupported file format. Please upload a PDF or DOCX file.')).toBeInTheDocument();
  });
});

test('displays error for network issues during CV analysis', async () => {
  axios.post.mockRejectedValueOnce(new Error('Network Error'));
  render(<CVHelper />);
  fireEvent.change(screen.getByPlaceholderText('Paste the job description here...'), { target: { value: 'Software Engineer' } });
  fireEvent.change(screen.getByPlaceholderText('Paste your CV here...'), { target: { value: 'Experienced software engineer...' } });
  fireEvent.click(screen.getByText('Analyze CV'));

  await waitFor(() => {
    expect(screen.getByText('Failed to analyze CV due to network issues.')).toBeInTheDocument();
  });
});
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
test('verifies CV suggestions are fetched successfully', async () => {
  render(<CVHelper />);
  fireEvent.change(screen.getByPlaceholderText('Paste the job description here...'), { target: { value: 'Software Engineer' } });
  fireEvent.change(screen.getByPlaceholderText('Paste your CV here...'), { target: { value: 'Experienced software engineer...' } });
  fireEvent.click(screen.getByText('Get CV Suggestions'));

  await waitFor(() => {
    expect(screen.getByText('Your CV has been tailored for a Software Engineer position.')).toBeInTheDocument();
  });
});
test('handles error when fetching CV suggestions fails', async () => {
  axios.post.mockRejectedValueOnce(new Error('Network Error'));

  render(<CVHelper />);
  fireEvent.click(screen.getByText('Get CV Suggestions'));

  await waitFor(() => {
    expect(screen.getByText('Failed to fetch CV suggestions.')).toBeInTheDocument();
  });
});
