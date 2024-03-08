import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobListingsComponent from '../components/JobListingsComponent';

describe('JobListingsComponent', () => {
/**
 * Test suite for the JobListingsComponent.
 * This file contains tests that verify the rendering, dynamic script loading, functionality of adding and filtering job listings in the JobListingsComponent.
 */
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText } = render(<JobListingsComponent />);
    expect(getByText('Job Listings | MyJobsAI')).toBeInTheDocument();
  });

  /**
  /**
   * Test case: Renders the JobListingsComponent correctly.
   * Verifies that the 'Job Listings | MyJobsAI' text is present in the document.
   */
  * Tests if the JobListingsComponent correctly loads the Bootstrap script dynamically.
  */
  it('loads Bootstrap script dynamically', () => {
    render(<JobListingsComponent />);
    const scripts = Array.from(document.getElementsByTagName('script'));
    const bootstrapScript = scripts.find(script => script.src.includes('bootstrap.bundle.min.js'));
    expect(bootstrapScript).not.toBeNull();
  });

  it('updates state on input change', () => {
  });

  it('updates state on input change', () => {
    const { getByPlaceholderText } = render(<JobListingsComponent />);
    fireEvent.change(getByPlaceholderText('Job Title'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByPlaceholderText('Company'), { target: { value: 'MyJobsAI' } });
    fireEvent.change(getByPlaceholderText('Location'), { target: { value: 'Remote' } });
    fireEvent.change(getByPlaceholderText('Job Description'), { target: { value: 'Develop amazing applications' } });
    expect(getByPlaceholderText('Job Title').value).toBe('Software Engineer');
    expect(getByPlaceholderText('Company').value).toBe('MyJobsAI');
    expect(getByPlaceholderText('Location').value).toBe('Remote');
    expect(getByPlaceholderText('Job Description').value).toBe('Develop amazing applications');
  /**
   * Test case: Updates state on input change.
   * Verifies that the component state updates correctly when input fields are changed.
   */
  });

  it('adds a new job listing on form submit', () => {
    const { getByText, getByPlaceholderText, getAllByRole } = render(<JobListingsComponent />);
    fireEvent.change(getByPlaceholderText('Job Title'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByPlaceholderText('Company'), { target: { value: 'MyJobsAI' } });
    fireEvent.click(getByText('Submit'));
    const rows = getAllByRole('row');
    expect(rows).toHaveLength(2); // Includes header row
    expect(rows[1]).toHaveTextContent('Software Engineer');
    expect(rows[1]).toHaveTextContent('MyJobsAI');
/**
 * Tests for JobListingsComponent.
 */
    fireEvent.change(getByPlaceholderText('Company'), { target: { value: 'MyJobsAI' } });
    fireEvent.click(getByText('Submit'));
    const rows = getAllByRole('row');
    expect(rows).toHaveLength(2); // Includes header row
    expect(rows[1]).toHaveTextContent('Software Engineer');
    expect(rows[1]).toHaveTextContent('MyJobsAI');
  });

  it('filters job listings based on input', () => {
  * Tests if the JobListingsComponent filters job listings correctly based on input.
  */
  it('filters job listings based on input', () => {
    const { getByPlaceholderText, getByText, getAllByRole } = render(<JobListingsComponent />);
    fireEvent.change(getByPlaceholderText('Filter Location'), { target: { value: 'Remote' } });
    fireEvent.click(getByText('Filter'));
    const rows = getAllByRole('row');
    expect(rows).toHaveLength(2); // Includes header row and one filtered result
    expect(rows[1]).toHaveTextContent('Remote');
  });
});
it('loads Bootstrap script on component mount', async () => {
  jest.mock('../../utils/bootstrapUtils', () => ({
  /**
   * Test case: Adds a new job listing on form submit.
   * Verifies that a new job listing is added to the list when the form is submitted.
   */
    loadBootstrapScript: jest.fn(),
  }));
  const { loadBootstrapScript } = require('../../utils/bootstrapUtils');
  render(<JobListingsComponent />);
  expect(loadBootstrapScript).toHaveBeenCalledTimes(1);
});
  /**
   * Test case: Loads Bootstrap script on component mount.
   * Verifies that the Bootstrap script is loaded when the component mounts.
   */
