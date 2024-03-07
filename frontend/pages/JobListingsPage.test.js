// frontend/pages/JobListingsPage.test.js

import React from 'react';
import JobListingsPage from '../../pages/JobListingsPage';
import JobListingCard from '../../components/JobListingCard';
import JobListingTable from '../../components/JobListingTable';
import { render } from '@testing-library/react';
import JobListingCard from '../../components/JobListingCard';
import JobListingTable from '../../components/JobListingTable';
import JobListingCard from '../components/JobListingCard';
import JobListingTable from '../components/JobListingTable';

/**
 * Test suite for JobListingsPage component
 */
describe('JobListingsPage component', () => {
  /**
   * Test to ensure the JobListingCard component renders its props correctly.
   * This test verifies that the job title, company, and location are all displayed as expected.
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
   * Test to ensure the JobListingTable component correctly renders multiple job listings.
   * This test checks that all provided job listings are displayed, including job titles, companies, and locations.
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
  // TODO: Add additional test cases for new functionalities of JobListingCard and JobListingTable components as they are developed.
