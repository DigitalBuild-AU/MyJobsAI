/**
 * This file contains tests for the JobListingsComponent.
 * It verifies the functionality of job listing filtering, state updates on input changes, and other related features.
 * These tests ensure that the JobListingsComponent behaves as expected under various conditions and user interactions.
 */
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
    const bootstrapScriptExists = scripts.some(script => script.src.includes('bootstrap.bundle.min.js'));
    expect(bootstrapScriptExists).toBeTruthy();
  });

    /**
   * Test case: Verifies that the component state updates correctly when input fields are changed.
   * This test should simulate changes to input fields and assert that the component's state reflects these changes accurately.
   */
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
   * Test case: Updates component state correctly on handleChange.
   * This test simulates user interactions with both text and checkbox inputs and verifies that the component's state updates accordingly.
   * It checks for the correct handling of text input for job titles and the toggle state of a checkbox input.
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
   * Test case: Updates component state correctly on handleChange.
   * This test simulates user interactions with both text and checkbox inputs and verifies that the component's state updates accordingly.
   * It checks for the correct handling of text input for job titles and the toggle state of a checkbox input.
   */
  /**
   * Test case: Filters job listings based on input using mock data.
   * This test provides a set of mock job listings and simulates user input to filter these listings by company name.
   * It verifies that the component correctly filters and displays only the listings that match the input criteria.
   */
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
  /**
   * Test Case: updates state on salary amount input change
   * This test verifies that the component's state is correctly updated when the salary amount input field's value changes.
   * It simulates changing the input to '50000' and then to an empty string, asserting that the component's state reflects these changes accurately.
   */
it('updates state on salary amount input change', () => {
  const { getByPlaceholderText } = render(<JobListingsComponent />);
  fireEvent.change(getByPlaceholderText('Job Title'), { target: { value: 'Developer' } });
  fireEvent.change(getByPlaceholderText('Company'), { target: { value: 'Innovative Tech' } });
  fireEvent.change(getByPlaceholderText('Location'), { target: { value: 'San Francisco' } });
  // Since the component's state isn't directly accessible, we check if the input's value reflects the expected state change
  expect(getByPlaceholderText('Job Title').value).toBe('Developer');
  expect(getByPlaceholderText('Company').value).toBe('Innovative Tech');
  expect(getByPlaceholderText('Location').value).toBe('San Francisco');
});
it('updates state on salary amount input change', () => {
  const { getByPlaceholderText } = render(<JobListingsComponent />);
  fireEvent.change(getByPlaceholderText('Salary Amount'), { target: { value: '50000' } });
  expect(getByPlaceholderText('Salary Amount').value).toBe('50000');
  fireEvent.change(getByPlaceholderText('Salary Amount'), { target: { value: '' } });
  expect(getByPlaceholderText('Salary Amount').value).toBe('');
});

  /**
   * Test Case: updates state on salary period selection
   * This test checks if the component's state updates correctly upon selecting different salary periods (Annual, Monthly, Hourly).
   * It simulates user interactions for selecting each of these options and verifies that the state reflects the selected salary period accurately.
   */
it('updates state on salary period selection', () => {
  const { getByTestId } = render(<JobListingsComponent />);
  fireEvent.change(getByTestId('salary-period-select'), { target: { value: 'Annual' } });
  expect(getByTestId('salary-period-select').value).toBe('Annual');
  fireEvent.change(getByTestId('salary-period-select'), { target: { value: 'Monthly' } });
  expect(getByTestId('salary-period-select').value).toBe('Monthly');
  fireEvent.change(getByTestId('salary-period-select'), { target: { value: 'Hourly' } });
  expect(getByTestId('salary-period-select').value).toBe('Hourly');
});

it('updates state on job status change', () => {
  const { getByLabelText } = render(<JobListingsComponent />);
  fireEvent.click(getByLabelText('Open'));
  expect(getByLabelText('Open').checked).toBe(true);
  fireEvent.click(getByLabelText('Closed'));
  expect(getByLabelText('Closed').checked).toBe(true);
  fireEvent.click(getByLabelText('Pending'));
  expect(getByLabelText('Pending').checked).toBe(true);
});
  /**
   * Test Case: updates state on job status change
   * This test ensures that the component's state is updated appropriately when the job status changes.
   * It simulates clicking on different job status options (Open, Closed, Pending) and checks if the component's state updates to reflect the current status accurately.
   */
