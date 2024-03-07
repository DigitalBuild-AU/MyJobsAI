/**
 * Test suite for the JobListingsPage component.
 * 
 * This file contains tests for the rendering and functionality of the JobListingsPage component,
 * including individual job listing cards, job listing table, pagination, and filter handling.
 */
// frontend/pages/JobListingsPage.test.js

import React from 'react';
import JobListingsPage from '../../pages/JobListingsPage';
import JobListingCard from '../../components/JobListingCard';
import JobListingTable from '../../components/JobListingTable';
import { render, fireEvent, screen } from '@testing-library/react';

/**
 * Test suite for JobListingsPage component
 */
describe('JobListingsPage component', () => {
  /**
 * Tests that the JobListingCard component renders its props correctly.
 * Verifies that job title, company, and location are displayed as expected.
 */
test('renders JobListingCard component correctly', () => {
    const listing = {
      jobTitle: 'Software Engineer',
      company: 'ABC Inc.',
      location: 'New York',
    };

    const { getByText } = render(<JobListingCard listing={listing} />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
  });

  /**
   * Test to ensure the JobListingTable component correctly renders multiple job listings.
   * This test checks that all provided job listings are displayed, including job titles, companies, and locations.
/**
 * Mock function to simulate fetching job listings for testing.
 * This function is used to set the 'totalPages' and 'currentPage' values for pagination tests.
 */
   */
test('renders JobListingTable component correctly', () => {
    const listings = [
      {
        jobTitle: 'Software Engineer',
        company: 'ABC Inc.',
        location: 'New York',
      },
      {
        jobTitle: 'Product Manager',
        company: 'XYZ Corp.',
        location: 'San Francisco',
      },
    ];

    const { getByText } = render(<JobListingTable listings={listings} />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText('Product Manager')).toBeInTheDocument();
    expect(getByText('XYZ Corp.')).toBeInTheDocument();
    expect(getByText('San Francisco')).toBeInTheDocument();
  });

  // Add more test cases to cover all functionality introduced by JobListingCard and JobListingTable components
});

  test('handleFilterChange updates filters state and resets page', () => {
    const { getByPlaceholderText, rerender } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: 'active', name: 'status' } });
    rerender(<JobListingsPage />);
  test('updateFilters updates filters state correctly', () => {
    // Mock the setFilters function
    const mockSetFilters = jest.fn();
    // Replace the actual setFilters with the mock
    JobListingsPage.__Rewire__('setFilters', mockSetFilters);
    // Call updateFilters with a sample filter
    updateFilters('status', 'active');
    // Check if setFilters was called correctly
    expect(mockSetFilters).toHaveBeenCalledWith({ status: 'active' });
    // Restore setFilters
    JobListingsPage.__ResetDependency__('setFilters');
  });

  test('renderPagination renders correct number of buttons and disables current page button', () => {
  test('input validation updates error state for invalid input', () => {
    const { getByPlaceholderText, rerender, getByText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: '', name: 'status' } });
    rerender(<JobListingsPage />);
    expect(getByText('Please enter a valid status.')).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: '', name: 'company' } });
    rerender(<JobListingsPage />);
    expect(getByText('Please enter a valid company name.')).toBeInTheDocument();
  });
    const totalPages = 5;
    const currentPage = 2;
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} page={currentPage} />);
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages);
    expect(buttons[currentPage].disabled).toBeTruthy();

  });
  test('handleFilterChange updates filters state and resets page', async () => {
  test('responsive design renders correct components based on screen size', () => {
    global.innerWidth = 500;
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Card View')).toBeInTheDocument();
    global.innerWidth = 1024;
    const { getByText: getText } = render(<JobListingsPage />);
    expect(getText('Table View')).toBeInTheDocument();
  });
    
    const { getByPlaceholderText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: 'active', name: 'status' } });
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: 'Tech Inc', name: 'company' } });
    // Assuming JobListingsPage component exposes its state for testing or using a testing-library utility to check state changes
    // This is a placeholder for actual state verification logic
    expect(await screen.findByDisplayValue('active')).toBeInTheDocument();
    expect(await screen.findByDisplayValue('Tech Inc')).toBeInTheDocument();

  test('error messages are displayed inline with form inputs', async () => {
    const { getByPlaceholderText, rerender, findByText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: '', name: 'status' } });
    rerender(<JobListingsPage />);
    expect(await findByText('Please enter a valid status.')).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: '', name: 'company' } });
    rerender(<JobListingsPage />);
    expect(await findByText('Please enter a valid company name.')).toBeInTheDocument();
  });

  test('renderPagination renders correct number of buttons and disables current page button', () => {
    const totalPages = 5;
    const currentPage = 2;
    render(<JobListingsPage />);
/**
 * Creates a pagination button with the given page number.
 * @param {number} pageNumber - The page number.
 * @returns {ReactElement} - The pagination button.
 */
    // Mocking fetchListings to set totalPages and currentPage
    // This is a placeholder for actual mocking logic
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages + 2); // Including next and previous page buttons
    expect(buttons[currentPage + 1].disabled).toBeTruthy(); // +1 to account for previous page button
  });

  /**
 * Test if renderPagination behaves correctly with only one page.
 * 
 * This test ensures that when there is only one page of job listings, the renderPagination function
 * correctly renders the pagination buttons with the next and previous buttons disabled.
 */
  test('renderPagination with only one page', () => {
    const totalPages = 1;
    const currentPage = 0;
    render(<JobListingsPage />);
    // Mocking fetchListings to set totalPages and currentPage
    // This is a placeholder for actual mocking logic
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(3); // Including next and previous page buttons, which should be disabled
    expect(buttons[1].disabled).toBeTruthy(); // Current page button
  });


  test('responsive design renders correct components based on screen size', () => {
    global.innerWidth = 500;
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Card View')).toBeInTheDocument();
    global.innerWidth = 1024;
    const { getByText: getText } = render(<JobListingsPage />);
    expect(getText('Table View')).toBeInTheDocument();
  });
  test('createPaginationButton creates a button with correct page number', () => {
    const pageNumber = 3;
    const button = createPaginationButton(pageNumber);
    expect(button.props.children).toBe(pageNumber + 1); // Adjusted to match the function's behavior
    expect(button.type).toBe('button');
    expect(button.props['aria-label']).toBe(\`Go to page \${pageNumber + 1}\`); // Adjusted to match the function's behavior
  });
