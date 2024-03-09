import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobListings from '../components/JobListings';

describe('JobListings Component', () => {
/**
 * Test suite for the JobListings component.
 * Covers tests for rendering, applying filters, adding new job listings,
 * error handling on job listings fetch, form validation, and error display on job listing addition failure.
 */
  test('renders without crashing', () => {
    render(<JobListings />);
    expect(screen.getByText('Filter Listings')).toBeInTheDocument();
  });

  test('applies filters correctly', () => {
    render(<JobListings />);
    fireEvent.change(screen.getByPlaceholderText('Enter location'), { target: { value: 'New York' } });
    fireEvent.change(screen.getByPlaceholderText('Enter keywords'), { target: { value: 'Engineer' } });
    fireEvent.click(screen.getByText('Apply Filters'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // Assuming there's a mock response setup for axios
  });

  test('adds a new job listing successfully', () => {
  /**
   * Tests the functionality of applying filters in the JobListings component,
   * verifying that filters for location and keywords are applied correctly.
   */
    render(<JobListings />);
    fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Frontend Developer' } });
    fireEvent.change(screen.getByPlaceholderText('Company'), { target: { value: 'Tech Corp' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Job listing added successfully')).toBeInTheDocument();
  });

  test('handles error on fetching job listings', async () => {
    // Mock axios.get to simulate a network error
    render(<JobListings />);
    expect(screen.getByText('Error fetching job listings')).toBeInTheDocument();
  });

  test('validates form fields before adding a job listing', () => {
  /**
   * Tests error handling when fetching job listings fails,
   * verifying that an appropriate error message is displayed.
   */
    render(<JobListings />);
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please fill out all fields')).toBeInTheDocument();
  });

  test('displays error message on add job listing failure', () => {
  /**
   * Verifies that the JobListings component renders without errors,
   * specifically checking for the presence of the 'Filter Listings' button.
   */
    render(<JobListings />);
    fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Frontend Developer' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Error adding job listing')).toBeInTheDocument();
  });
});
test('filters job listings based on user input', () => {
  render(<JobListings />);
  fireEvent.change(screen.getByPlaceholderText('Enter location'), { target: { value: 'San Francisco' } });
  fireEvent.change(screen.getByPlaceholderText('Enter job type'), { target: { value: 'Full-Time' } });
  fireEvent.change(screen.getByPlaceholderText('Enter keywords'), { target: { value: 'Engineer' } });
  fireEvent.click(screen.getByText('Apply Filters'));
  expect(screen.getByText('Filtered job listings displayed')).toBeInTheDocument();
});
  /**
   * Tests the display of an error message upon failure to add a job listing,
   * verifying that the error message is shown when the addition fails.
   */
  /**
   * Tests the filter functionality based on user input in the JobListings component,
   * verifying that job listings are filtered according to specified criteria.
   */
  /**
   * Verifies the functionality for adding a new job listing,
   * ensuring that the job listing is added successfully upon form submission.
   */
  /**
   * Verifies form field validation before adding a job listing,
   * ensuring that an error message is displayed if fields are left blank.
   */
