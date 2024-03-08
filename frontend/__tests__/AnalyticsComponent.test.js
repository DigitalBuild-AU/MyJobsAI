import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import AnalyticsComponent from '../components/AnalyticsComponent';

jest.mock('axios');

describe('AnalyticsComponent - Success Scenarios', () => {
/**
 * @file AnalyticsComponent.test.js
 * @description Test suite for the AnalyticsComponent, covering both success and error handling scenarios for analytics data fetching and rendering.
 */
  beforeEach(() => {
    axios.get.mockReset();
  });

  test('renders with default state before API call', () => {
    render(<AnalyticsComponent />);
    expect(screen.getByText('Total Applications: 0')).toBeInTheDocument();
    expect(screen.getByText('Interviews Scheduled: 0')).toBeInTheDocument();
    expect(screen.getByText('Offers Received: 0')).toBeInTheDocument();
    expect(screen.getByText('Average Response Time (days): No data')).toBeInTheDocument();
  });

  test('updates and renders analytics data upon successful API call', async () => {
/**
 * Describes tests for successful scenarios including initial rendering and updates upon successful API calls.
 */
/**
 * Tests the initial rendering state of the AnalyticsComponent before any API call is made.
 */
/**
 * Tests the AnalyticsComponent's ability to update and render analytics data upon a successful API call.
 */
    const mockData = {
      totalApplications: 120,
      interviewsScheduled: 5,
      offersReceived: 2,
      avgResponseTime: 3.5
    };
    axios.get.mockResolvedValue({ data: mockData });

    render(<AnalyticsComponent />);

    await waitFor(() => {
      expect(screen.getByText('Total Applications: 120')).toBeInTheDocument();
      expect(screen.getByText('Interviews Scheduled: 5')).toBeInTheDocument();
      expect(screen.getByText('Offers Received: 2')).toBeInTheDocument();
      expect(screen.getByText('Average Response Time (days): 3.50')).toBeInTheDocument();
    });
  });
});

describe('AnalyticsComponent - Error Handling', () => {
  test('displays an appropriate error message upon API error', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch analytics.'));
    render(<AnalyticsComponent />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch analytics.')).toBeInTheDocument();
    });
  });
});
/**
 * Describes tests for handling errors during analytics data fetching.
 */
/**
 * Tests the display of an appropriate error message in the AnalyticsComponent upon an API error.
 */
