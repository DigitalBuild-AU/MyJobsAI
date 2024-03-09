/**
 * @fileoverview Test suite for the jobListingService.js functions. This includes tests for adding, finding, updating, and deleting job listings, as well as calculating analytics related to job applications.
 */
const jest = require('jest');
const JobListing = require('../models/JobListing');
const UserActivity = require('../models/UserActivity');
const { addJobListing, findAllJobListings, findJobListingById, updateJobListingById, deleteJobListingById, calculateAnalytics } = require('../services/jobListingService');

jest.mock('../models/JobListing');
jest.mock('../models/UserActivity');

/**
 * Tests for addJobListing function. Ensures that job listings can be added correctly and handles errors as expected.
 */
describe('addJobListing', () => {
  beforeEach(() => {
    JobListing.mockClear();
  });

  test('returns error message on save failure', async () => {
    JobListing.prototype.save.mockRejectedValue(new Error('Error saving job listing'));
    const result = await addJobListing({});
    expect(result).toEqual({ error: 'Error adding job listing: Error saving job listing' });
  });
});

describe('findAllJobListings', () => {
  beforeEach(() => {
    JobListing.find.mockClear();
  });

  test('returns error message on find failure', async () => {
    JobListing.find.mockRejectedValue(new Error('Error fetching job listings'));
    const result = await findAllJobListings();
    expect(result).toEqual({ error: 'Error fetching all job listings: Error fetching job listings' });
  });
});

describe('findJobListingById', () => {
  beforeEach(() => {
    JobListing.findById.mockClear();
  });

  test('returns error message on findById failure', async () => {
    JobListing.findById.mockRejectedValue(new Error('Error fetching job listing by ID'));
    const result = await findJobListingById('123');
    expect(result).toEqual({ error: 'Error fetching job listing by ID: Error fetching job listing by ID' });
  });
});

describe('updateJobListingById', () => {
  beforeEach(() => {
    JobListing.findByIdAndUpdate.mockClear();
  });

  test('returns error message on findByIdAndUpdate failure', async () => {
    JobListing.findByIdAndUpdate.mockRejectedValue(new Error('Error updating job listing'));
    const result = await updateJobListingById('123', {});
    expect(result).toEqual({ error: 'Error updating job listing: Error updating job listing' });
  });
});

describe('deleteJobListingById', () => {
  beforeEach(() => {
    JobListing.findByIdAndDelete.mockClear();
  });

  test('returns error message on findByIdAndDelete failure', async () => {
    JobListing.findByIdAndDelete.mockRejectedValue(new Error('Error deleting job listing'));
    const result = await deleteJobListingById('123');
    expect(result).toEqual({ error: 'Error deleting job listing: Error deleting job listing' });
  });
});

describe('calculateAnalytics', () => {
  beforeEach(() => {
    UserActivity.countDocuments.mockClear();
    UserActivity.aggregate.mockClear();
  });

  test('returns error message on analytics calculation failure', async () => {
    UserActivity.countDocuments.mockRejectedValue(new Error('Error calculating analytics'));
    const result = await calculateAnalytics();
    expect(result).toEqual({ error: 'Error calculating analytics: Error calculating analytics' });
  });
});
