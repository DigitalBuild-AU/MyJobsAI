"""
File: DashboardPage.test.js
Description: This file contains tests for the Dashboard Page. It tests the modal logic for adding new job application entries and ensures the modal opens and closes as expected.
"""
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardPage from '../pages/DashboardPage';
import axios from 'axios';
jest.mock('axios');

describe('DashboardPage Modal Logic', () => {
  """
Tests that the modal on the Dashboard Page opens with the correct content when the 'Add Entry' button is clicked.
"""
"""
Verifies that the modal for adding new job application entries on the Dashboard Page opens correctly with the expected content when the 'Add Entry' button is clicked.
"""
test('Modal opens with correct content when handleOpenModal is called', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByText('Add Entry'));
    expect(screen.getByText('Job Application Summary')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('Modal closes when handleCloseModal is called', async () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByText('Add Entry')); // Open the modal first
    expect(screen.getByRole('dialog')).toBeInTheDocument(); // Check if modal is open
    fireEvent.click(screen.getByText('&times;')); // Assuming &times; is used for the close button
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(); // Modal should no longer be in the document
  });
describe('DashboardPage Rendering', () => {
  test('renders DashboardPage with all widgets and components', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Dashboard Overview')).toBeInTheDocument();
    expect(screen.getByText('Analytics and Insights')).toBeInTheDocument();
    expect(screen.getByText('Applications Sent:')).toBeInTheDocument(); // Assuming SummaryWidget displays this text
    expect(screen.getByText('Inspirational Quote')).toBeInTheDocument(); // Assuming QuoteWidget displays this text
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument(); // Assuming EmailForm has a textbox for email
  });

  test('fetches summary and quote data on component mount', async () => {
    const summaryData = { applicationsSent: 10, interviewsScheduled: 5, offersReceived: 2 };
    const quoteData = { data: { quotes: [{ text: 'Inspirational Quote' }] } };
    axios.get.mockImplementation(url => {
      if (url === '/api/summary') return Promise.resolve({ data: summaryData });
      if (url === '/api/quote') return Promise.resolve(quoteData);
      return Promise.reject(new Error('not found'));
    });

    render(<DashboardPage />);
    await waitFor(() => {
      expect(screen.getByText('Applications Sent: 10')).toBeInTheDocument();
      expect(screen.getByText('Inspirational Quote')).toBeInTheDocument();
    });
  });
});
});
