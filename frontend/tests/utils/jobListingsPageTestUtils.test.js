import { getMockJobListings, getMockFilters, assertListingsMatchFilters } from './jobListingsPageTestUtils';
import { describe, it, expect } from '@jest/globals';

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
