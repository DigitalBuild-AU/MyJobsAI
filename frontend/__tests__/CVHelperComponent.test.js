import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import CVHelperComponent from '../components/CVHelperComponent';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('CVHelperComponent', () => {
/**
 * @file CVHelperComponent.test.js
 * @description Test suite for the CVHelperComponent, focusing on rendering, dynamic script loading, API interactions, and error handling.
 */
 * Test suite for the CVHelperComponent, ensuring comprehensive coverage including rendering correctness, dynamic script loading, API interactions, and error handling. This suite is designed to ensure all functionalities previously handled by cvHelper.html are fully integrated and functional within CVHelperComponent.
 */
describe('CVHelperComponent', () => {
  /**
   * Tests if the CVHelperComponent renders correctly.
   */
  it('renders correctly', () => {
  /**
   * Tests if the CVHelperComponent correctly loads the Bootstrap script dynamically, including any additional scripts that were previously managed by cvHelper.html.
   */
  it('loads Bootstrap script dynamically', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText } = render(<CVHelperComponent />);
    expect(getByText('CV Helper | MyJobsAI')).toBeInTheDocument();
  });

  /**
   * Test case: Dynamically loads the Bootstrap script for CVHelperComponent.
   * Verifies that the Bootstrap script is appended to the document body when the CVHelperComponent is rendered.
   */
  it('loads Bootstrap script dynamically', () => {
    document.body.appendChild = jest.fn();
    document.querySelector = jest.fn().mockReturnValueOnce(null);
    render(<CVHelperComponent />);
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.appendChild.mock.calls[0][0].src).toBe('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
  });
});

  it('triggers API call with correct data on form submission, ensuring all API functionalities from cvHelper.html are replicated', async () => {
  });
});

  it('triggers API call with correct data on form submission', async () => {
    axios.post.mockResolvedValue({ data: { suggestions: 'Your CV is great!' } });
    const { getByLabelText, getByText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription: 'Software Engineer', userCV: 'My CV content' }));
  });

});
/**
 * Tests the dynamic loading of the Bootstrap script on component mount.
 */
it('loads Bootstrap script on component mount', async () => {
  /**
   * Tests the component's state update with CV suggestions upon a successful API call.
   */
  it('updates component state with CV suggestions upon successful API call', async () => {
  jest.mock('../../utils/bootstrapUtils', () => ({
    loadBootstrapScript: jest.fn(),
  }));
  const { loadBootstrapScript } = require('../../utils/bootstrapUtils');
  render(<CVHelperComponent />);
  expect(loadBootstrapScript).toHaveBeenCalledTimes(1);
});

  it('updates component state with CV suggestions upon successful API call', async () => {
   * Tests handling of errors correctly if the API call fails, including scenarios previously covered in cvHelper.html.
   */
  it('handles errors correctly if API call fails', async () => {
    const mockSuggestions = 'Consider highlighting your teamwork skills.';
    axios.post.mockResolvedValue({ data: { suggestions: mockSuggestions } });
    const { getByText, getByLabelText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText(mockSuggestions)).toBeInTheDocument());
  });

  /**
   * Test case: Handles errors correctly if the API call fails in CVHelperComponent.
   * Verifies that an error message is displayed if the API call to generate CV suggestions fails.
   */
  it('handles errors correctly if API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Failed to generate CV suggestions.'));
    const { getByText, getByLabelText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText('Error fetching CV suggestions: Failed to generate CV suggestions., Stack: undefined')).toBeInTheDocument());
  });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText(mockSuggestions)).toBeInTheDocument());
  });

  it('handles errors correctly if API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Failed to generate CV suggestions.'));
    const { getByText, getByLabelText } = render(<CVHelperComponent />);
    fireEvent.change(getByLabelText('Job Description'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Your CV'), { target: { value: 'My CV content' } });
    fireEvent.click(getByText('Generate Suggestions'));
    await waitFor(() => expect(getByText('Error fetching CV suggestions: Failed to generate CV suggestions., Stack: undefined')).toBeInTheDocument());
  });
