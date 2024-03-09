/*
This file contains tests for utility functions used in the Job Listings Page. It includes tests for generating mock job listings, mock filters, and asserting that listings match given filters. These utilities are crucial for ensuring the Job Listings Page functions as expected under various conditions.
*/
import { getMockJobListings, getMockFilters, assertListingsMatchFilters } from './jobListingsPageTestUtils';
import { describe, it, expect } from '@jest/globals';

/**
 * Generates a mock array of job listings for testing purposes.
 * - Returns: Array of mock job listings, each containing an id, title, company, and status.
 */
describe('getMockJobListings tests', () => {
  it('should return the expected array of job listings', () => {
    const expectedListings = [
      { id: 1, title: 'Software Engineer', company: 'Tech Corp', status: 'open' },
      { id: 2, title: 'Product Manager', company: 'Innovate LLC', status: 'closed' },
      { id: 3, title: 'UX Designer', company: 'Design Studio', status: 'open' }
    ];
    expect(getMockJobListings()).toEqual(expectedListings);
  });
});

/**
 * Generates a mock filter object for testing the filtering functionality.
 * - Returns: A mock filter object containing keys and values to filter job listings by.
 */
describe('getMockFilters tests', () => {
  it('should return the expected filter object', () => {
    const expectedFilters = { status: 'open', company: 'Tech Corp' };
    expect(getMockFilters()).toEqual(expectedFilters);
  });
});

describe('assertListingsMatchFilters tests', () => {
  it('should not throw an error for listings that match the filters', () => {
    const listings = [
      { id: 1, title: 'Software Engineer', company: 'Tech Corp', status: 'open' }
    ];
    const filters = { status: 'open', company: 'Tech Corp' };
    expect(() => assertListingsMatchFilters(listings, filters)).not.toThrow();
  });

  it('should throw an error for listings that do not match the filters', () => {
    const listings = [
      { id: 2, title: 'Product Manager', company: 'Innovate LLC', status: 'closed' }
    ];
    const filters = { status: 'open', company: 'Tech Corp' };
    expect(() => assertListingsMatchFilters(listings, filters)).toThrow();
  });

  it('should handle empty filters without throwing an error', () => {
    const listings = [
      { id: 3, title: 'UX Designer', company: 'Design Studio', status: 'open' }
    ];
    const filters = {};
    expect(() => assertListingsMatchFilters(listings, filters)).not.toThrow();
  });

  it('should handle empty listings without throwing an error', () => {
    const listings = [];
    const filters = { status: 'open', company: 'Tech Corp' };
    expect(() => assertListingsMatchFilters(listings, filters)).not.toThrow();
  });
});
