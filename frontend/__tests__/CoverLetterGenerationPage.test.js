import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
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

"""
Tests if the Cover Letter Generation Page component renders correctly without throwing any errors. It specifically checks for the presence of the 'Create Cover Letter' button and a combobox for job selection.
"""
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

/**
 * Tests that selecting a job from the dropdown updates the contact person displayed.
 */
test('selecting a job updates contact person', async () => {
test('download buttons appear after generating cover letter', async () => {
"""
File: CoverLetterGenerationPage.test.js
Description: This file contains tests for the Cover Letter Generation Page. It includes tests for rendering, user interactions, and integration with backend services for generating and handling cover letters.
"""
  const { getByText, queryByText } = render(<CoverLetterGenerationPage />);
  expect(queryByText('Download as PDF')).not.toBeInTheDocument();
  expect(queryByText('Download as DOC')).not.toBeInTheDocument();
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  expect(getByText('Download as PDF')).toBeInTheDocument();
  expect(getByText('Download as DOC')).toBeInTheDocument();
test('fetches job listings on component mount', async () => {
  const mock = new MockAdapter(axios);
  const jobListingsData = [{ id: '1', title: 'Software Engineer', contactPerson: 'John Doe' }];
  mock.onGet('/api/joblistings').reply(200, jobListingsData);

  await act(async () => {
    const { findByText } = render(<CoverLetterGenerationPage />);
    expect(await findByText('Software Engineer')).toBeInTheDocument();
  });
});
});
  const { getByRole, getByDisplayValue } = render(<CoverLetterGenerationPage />);
"""
Tests for the CoverLetterGenerationPage component.

This file contains tests that ensure the functionality of the Cover Letter Generation Page within the MyJobsAI application. It includes tests for component rendering, user interaction, and integration with other services like axios for data fetching.
"""
  await waitFor(() => fireEvent.change(getByRole('combobox'), { target: { value: '1' } }));
  expect(getByDisplayValue('John Doe')).toBeInTheDocument();
});

/**
 * Tests that clicking the 'Create Cover Letter' button displays the generated cover letter.
 */
test('clicking create cover letter displays generated letter', async () => {
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  expect(getByText(mockCoverLetter)).toBeInTheDocument();
});

// Tests error handling when fetching job listings fails.
test('download as PDF button triggers download', async () => {
test('form submission generates cover letter', async () => {
  const mock = new MockAdapter(axios);
  const postData = { description: 'Software Engineer', name: 'Jane Doe', skills: 'React, Node', experience: '5 years' };
  const responseData = { coverLetter: 'Your application for Software Engineer has been created.' };
  mock.onPost('/api/coverletter/generate', postData).reply(200, responseData);

  await act(async () => {
    const { getByPlaceholderText, getByText } = render(<CoverLetterGenerationPage />);
    fireEvent.change(getByPlaceholderText('Job Description'), { target: { value: postData.description } });
    fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: postData.name } });
    fireEvent.change(getByPlaceholderText('Your Skills'), { target: { value: postData.skills } });
    fireEvent.change(getByPlaceholderText('Your Experience'), { target: { value: postData.experience } });
    fireEvent.click(getByText('Generate Cover Letter'));
    expect(await findByText(responseData.coverLetter)).toBeInTheDocument();
  });
});
  console.log = jest.fn(); // Mock console.log for this test
  const { getByText } = render(<CoverLetterGenerationPage />);
  await waitFor(() => fireEvent.click(getByText('Create Cover Letter')));
  fireEvent.click(getByText('Download as PDF'));
  expect(console.log).toHaveBeenCalledWith('Downloading as PDF...');
});

test('download as DOC button triggers download', async () => {
test('downloadAsPDF triggers download with correct attributes', async () => {
  document.createElement = jest.fn().mockReturnValue({
    href: '',
    download: '',
    click: jest.fn(),
    setAttribute: jest.fn((attr, value) => {
      this[attr] = value;
    })
  });

  await act(async () => {
    const { getByText } = render(<CoverLetterGenerationPage />);
    fireEvent.click(getByText('Download as PDF'));
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(document.createElement().download).toEqual('coverLetter.pdf');
    expect(document.createElement().type).toEqual('application/pdf');
  });
});
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

/**
 * Tests error handling when generating a cover letter fails.
 * It checks for the presence of an error message after attempting to create a cover letter.
 */
// Tests error handling when generating a cover letter fails.
test('handles error generating cover letter gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Error generating cover letter'));
  const { getByText, getByRole } = render(<CoverLetterGenerationPage />);
  fireEvent.click(getByRole('button', { name: 'Create Cover Letter' }));
  await waitFor(() => expect(getByText('Error generating cover letter:')).toBeInTheDocument());
});
test('modal opens with handleSaveCoverLetter', async () => {
  const { getByText } = render(<CoverLetterGenerationPage />);
  fireEvent.click(getByText('Save Cover Letter'));
  expect(getByText('Do you want to save the generated cover letter?')).toBeInTheDocument();
});

test('modal closes with handleCloseSaveModal', async () => {
  const { getByText, queryByText } = render(<CoverLetterGenerationPage />);
  fireEvent.click(getByText('Save Cover Letter')); // Open modal first
  fireEvent.click(getByText('Cancel')); // Then close it
test('downloadAsDOC triggers download with correct attributes', async () => {
  document.createElement = jest.fn().mockReturnValue({
    href: '',
    download: '',
    click: jest.fn(),
    setAttribute: jest.fn((attr, value) => {
      this[attr] = value;
    })
  });

  await act(async () => {
    const { getByText } = render(<CoverLetterGenerationPage />);
    fireEvent.click(getByText('Download as DOC'));
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(document.createElement().download).toEqual('coverLetter.doc');
    expect(document.createElement().type).toEqual('application/msword');
  });
test('successfully creates a cover letter', async () => {
  const mockPostData = { description: 'Software Engineer', name: 'John Doe', skills: 'JavaScript, React', experience: '3 years' };
  axios.post.mockResolvedValue({ data: { coverLetter: mockCoverLetter } });

  await act(async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<CoverLetterGenerationPage />);
    fireEvent.change(getByPlaceholderText('Job Description'), { target: { value: mockPostData.description } });
    fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: mockPostData.name } });
    fireEvent.change(getByPlaceholderText('Your Skills'), { target: { value: mockPostData.skills } });
    fireEvent.change(getByPlaceholderText('Your Experience'), { target: { value: mockPostData.experience } });
    fireEvent.click(getByText('Generate Cover Letter'));
    expect(await findByText(mockCoverLetter)).toBeInTheDocument();
  });
});

test('handles error when creating a cover letter fails', async () => {
  axios.post.mockRejectedValue(new Error('Error generating cover letter'));
  const { getByText, getByRole, findByText } = render(<CoverLetterGenerationPage />);
  await act(async () => {
    fireEvent.click(getByRole('button', { name: 'Generate Cover Letter' }));
    expect(await findByText('Error generating Cover Letter.')).toBeInTheDocument();
  });
});
});
  await waitFor(() => expect(queryByText('Do you want to save the generated cover letter?')).not.toBeInTheDocument());
  /**
   * Test case: Successfully creates a cover letter.
   * This test verifies that the CoverLetterGenerationPage component can successfully create a cover letter
   * using provided user input (job description, name, skills, and experience) and display the generated cover letter.
   * It mocks the axios.post call to simulate a successful API response and checks if the generated cover letter
   * is rendered in the document.
   */
});

test('Save button inside modal triggers save functionality', async () => {
  console.log = jest.fn(); // Mock console.log for this test
  const { getByText } = render(<CoverLetterGenerationPage />);
  fireEvent.click(getByText('Save Cover Letter')); // Open modal
  fireEvent.click(getByText('Save')); // Click save button
  expect(console.log).toHaveBeenCalledWith('Cover letter saved.');
});
  /**
   * Test case: Handles error when creating a cover letter fails.
   * This test checks the error handling of the CoverLetterGenerationPage component when the cover letter creation fails.
   * It mocks the axios.post call to simulate a failed API response and verifies that an appropriate error message
   * is displayed to the user.
   */
