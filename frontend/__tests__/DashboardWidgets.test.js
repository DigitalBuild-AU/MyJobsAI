import React from 'react';
import { render, cleanup } from '@testing-library/react';
import axios from 'axios';
import { SummaryWidget, QuoteWidget } from '../components/DashboardWidgets';

jest.mock('axios');

describe('DashboardWidgets', () => {
  afterEach(cleanup);

  describe('SummaryWidget', () => {
    it('renders summary data correctly', () => {
      const summaryData = { applicationsSent: 10, interviewsScheduled: 5, offersReceived: 2 };
      const { getByText } = render(<SummaryWidget summary={summaryData} />);
      expect(getByText('Applications Sent: 10')).toBeInTheDocument();
      expect(getByText('Interviews Scheduled: 5')).toBeInTheDocument();
      expect(getByText('Offers Received: 2')).toBeInTheDocument();
    });
  });

  describe('QuoteWidget', () => {
    it('fetches and displays a quote successfully', async () => {
      const quoteData = { data: { quotes: [{ text: 'Inspirational Quote' }] } };
      axios.get.mockResolvedValue(quoteData);
      const { findByText } = render(<QuoteWidget />);
      expect(await findByText('Inspirational Quote')).toBeInTheDocument();
    });

    it('handles fetch error gracefully', async () => {
      axios.get.mockRejectedValue(new Error('Error fetching quote'));
      const { queryByText } = render(<QuoteWidget />);
      expect(await queryByText('Inspirational Quote')).not.toBeInTheDocument();
    });
  });
});
