import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoverLetterComponent from '../components/CoverLetterComponent';

describe('CoverLetterComponent', () => {
/**
 * Test suite for the CoverLetterComponent.
 * This file contains tests that verify the rendering, dynamic script loading, and functionality of generating a cover letter in the CoverLetterComponent.
 */
  afterEach(cleanup);

  it('renders correctly with all elements transferred from HTML', () => {
    const { getByText, getByPlaceholderText } = render(<CoverLetterComponent />);
    expect(getByText('Cover Letter | MyJobsAI')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Paste the job description here...')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Skills...')).toBeInTheDocument();
    expect(getByPlaceholderText('Your Experience...')).toBeInTheDocument();
    expect(getByText('Generate Cover Letter')).toBeInTheDocument();
    // Verify template selection option
    expect(getByText('Select Template')).toBeInTheDocument();
    expect(getByRole('combobox')).toBeInTheDocument();
  });

  /**
   * Test case: Dynamically loads the Bootstrap script.
   * Verifies that the Bootstrap script is appended to the document body when the CoverLetterComponent is rendered.
   */
  it('loads Bootstrap script dynamically', () => {
/**
 * Tests if the CoverLetterComponent renders correctly with all expected inputs and the generate button.
 */
    const appendChildMock = jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    const querySelectorMock = jest.spyOn(document, 'querySelector').mockReturnValueOnce(null);
    render(<CoverLetterComponent />);
    expect(appendChildMock).toHaveBeenCalled();
    expect(appendChildMock.mock.calls[0][0].src).toBe('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
    appendChildMock.mockRestore();
    querySelectorMock.mockRestore();
  });

  it('generates a cover letter based on user inputs, including template selection', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<CoverLetterComponent />);
    fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Paste the job description here...'), { target: { value: 'Job Description' } });
    fireEvent.change(getByPlaceholderText('Your Skills...'), { target: { value: 'My Skills' } });
    fireEvent.change(getByPlaceholderText('Your Experience...'), { target: { value: 'My Experience' } });
    fireEvent.change(getByRole('combobox', { name: 'Select Template' }), { target: { value: 'modern' } });
    fireEvent.click(getByText('Generate Cover Letter'));
    expect(getByText('Dear Hiring Manager,')).toBeInTheDocument();
  /**
   * Test case: Renders the CoverLetterComponent correctly.
   * Verifies that all expected text fields and the 'Generate Cover Letter' button are present in the document.
   */
    expect(getByText('Based on the job description, my skills include My Skills and my experience includes My Experience. I am excited about the opportunity to work with your team.')).toBeInTheDocument();
    expect(getByText('Sincerely,')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
/**
 * Tests for CoverLetterComponent.
 */
    expect(getByText('Based on the job description, my skills include My Skills and my experience includes My Experience. I am excited about the opportunity to work with your team.')).toBeInTheDocument();
    expect(getByText('Sincerely,')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });
});
/**
 * Tests if the CoverLetterComponent generates a cover letter based on user inputs correctly.
it('loads Bootstrap script on component mount', async () => {
  jest.mock('../../utils/bootstrapUtils', () => ({
    loadBootstrapScript: jest.fn(),
  }));
  const { loadBootstrapScript } = require('../../utils/bootstrapUtils');
  render(<CoverLetterComponent />);
  expect(loadBootstrapScript).toHaveBeenCalledTimes(1);
});
 */
