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

describe('JobListingsPage component', () => {
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
