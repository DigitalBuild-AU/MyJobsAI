import React from 'react';
import JobListingsPage from '../../pages/JobListingsPage';
import JobListingCard from '../../components/JobListingCard';
import JobListingTable from '../../components/JobListingTable';
import { render } from '@testing-library/react';

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
  });

  test('updateFilters function updates filters state correctly', () => {
    const initialState = { status: '', company: '' };
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    updateFilters('status', 'open');
    expect(setState).toHaveBeenCalledWith({ ...initialState, status: 'open' });

    updateFilters('company', 'ABC Inc.');
    expect(setState).toHaveBeenCalledWith({ ...initialState, company: 'ABC Inc.' });
  });

  test('createPageButton function returns a button with correct properties', () => {
/**
 * Updates the filters state with the given filter name and value.
 * @param {string} filterName - The name of the filter.
 * @param {string} filterValue - The value of the filter.
 */
    const pageNumber = 2;
    const setPage = jest.fn();
    const button = createPageButton(pageNumber, setPage);
    expect(button.props.children).toEqual(pageNumber + 1);
    expect(button.props.disabled).toEqual(false);
    expect(button.props.onClick).toBeDefined();
  });
});
/**
 * Creates a pagination button with the given page number.
 * @param {number} pageNumber - The page number.
 * @param {function} setPage - The function to set the current page.
 * @returns {ReactElement} - The pagination button.
 */
