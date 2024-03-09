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
/**
 * Test case: Updates state on input change.
 * This test verifies that the JobListingsComponent's state updates correctly when the input fields for 'Job Title', 'Company', 'Location', and 'Job Description' are changed.
 * Inputs: Simulated change events on input fields.
 * Expected Output: The component's state reflects the new values provided by the change events.
 */
it('updates component state correctly on handleChange', () => {
  const { getByLabelText, getByPlaceholderText } = render(<JobListingsComponent />);
  // Simulate text input change
  fireEvent.change(getByPlaceholderText('Job Title'), { target: { name: 'jobTitle', value: 'Frontend Developer' } });
  expect(getByPlaceholderText('Job Title').value).toBe('Frontend Developer');
  // Simulate checkbox input change
  const includesSuperCheckbox = getByLabelText('Includes Super');
  fireEvent.change(includesSuperCheckbox, { target: { name: 'includesSuper', type: 'checkbox', checked: true } });
  expect(includesSuperCheckbox.checked).toBe(true);
  fireEvent.change(includesSuperCheckbox, { target: { name: 'includesSuper', type: 'checkbox', checked: false } });
  expect(includesSuperCheckbox.checked).toBe(false);
});
  it('updates component state correctly on handleChange', () => {
    const { getByLabelText, getByPlaceholderText } = render(<JobListingsComponent />);
    // Simulate text input change
    fireEvent.change(getByPlaceholderText('Job Title'), { target: { name: 'jobTitle', value: 'Frontend Developer' } });
    expect(getByPlaceholderText('Job Title').value).toBe('Frontend Developer');
    // Simulate checkbox input change
    const includesSuperCheckbox = getByLabelText('Includes Super');
    fireEvent.change(includesSuperCheckbox, { target: { name: 'includesSuper', type: 'checkbox', checked: true } });
    expect(includesSuperCheckbox.checked).toBe(true);
it('filters job listings based on input', () => {
    const mockListings = [
      { id: 1, title: 'Software Engineer', company: 'Tech Innovations', location: 'Remote' },
      { id: 2, title: 'Project Manager', company: 'Creative Solutions', location: 'New York' },
      { id: 3, title: 'Web Developer', company: 'Web Works', location: 'San Francisco' }
    ];
    const { getByPlaceholderText, getAllByText } = render(<JobListingsComponent listings={mockListings} />);
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: 'Tech' } });
    expect(getAllByText('Software Engineer')).toHaveLength(1);
    expect(screen.queryByText('Project Manager')).toBeNull();
    expect(screen.queryByText('Web Developer')).toBeNull();
  });
    fireEvent.change(includesSuperCheckbox, { target: { name: 'includesSuper', type: 'checkbox', checked: false } });
    expect(includesSuperCheckbox.checked).toBe(false);
  });
