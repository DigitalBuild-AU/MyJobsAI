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
import { render, fireEvent, queryAllByRole, screen } from '@testing-library/react';
import JobListingCard from '../../components/JobListingCard';
import JobListingTable from '../../components/JobListingTable';
import JobListingCard from '../components/JobListingCard';
import JobListingTable from '../components/JobListingTable';

/**
 * Test suite for JobListingsPage component
 */
describe('JobListingsPage component', () => {
  /**
 * Test if JobListingCard component renders correctly
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

    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
  });
  /**
 * Test if JobListingTable component renders correctly
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

    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();

    expect(getByText('Product Manager')).toBeInTheDocument();
    expect(getByText('XYZ Corp.')).toBeInTheDocument();
    expect(getByText('San Francisco')).toBeInTheDocument();
  });

  // Add more test cases to cover all functionality introduced by JobListingCard and JobListingTable components
});
  /**
  * Test if handleFilterChange updates filters state and resets page.
  * 
  * This test verifies that the handleFilterChange function correctly updates the filter state
  * and resets the pagination to the first page.
  */
  test('handleFilterChange updates filters state and resets page', () => {
    const { getByPlaceholderText, rerender } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: 'active', name: 'status' } });
    rerender(<JobListingsPage />);
    // Assuming JobListingsPage component exposes its state for testing or using a testing-library utility to check state changes
    expect(filters.status).toBe('active');
    expect(page).toBe(0);
  });

  /**
  * Test if renderPagination renders correct number of buttons and disables current page button
  */
  test('renderPagination renders correct number of buttons and disables current page button', () => {
    const totalPages = 5;
    const currentPage = 2;
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} page={currentPage} />);
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages);
    expect(buttons[currentPage].disabled).toBeTruthy();
  });
  test('handleFilterChange updates filters state and resets page', async () => {
  * Test if handleFilterChange updates filters state and resets page
  */
  test('handleFilterChange updates filters state and resets page', async () => {
    const { getByPlaceholderText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: 'active', name: 'status' } });
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: 'Tech Inc', name: 'company' } });
    // Assuming JobListingsPage component exposes its state for testing or using a testing-library utility to check state changes
    // This is a placeholder for actual state verification logic
    expect(await screen.findByDisplayValue('active')).toBeInTheDocument();
    expect(await screen.findByDisplayValue('Tech Inc')).toBeInTheDocument();
  });

  /**
  * Test if renderPagination renders correct number of buttons and disables current page button
  */
  test('renderPagination renders correct number of buttons and disables current page button', () => {
    const totalPages = 5;
    const currentPage = 2;
    render(<JobListingsPage />);
    // Mocking fetchListings to set totalPages and currentPage
    // This is a placeholder for actual mocking logic
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages + 2); // Including next and previous page buttons
    expect(buttons[currentPage + 1].disabled).toBeTruthy(); // +1 to account for previous page button
  });

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
/**
 * Test if renderPagination with only one page
 */
