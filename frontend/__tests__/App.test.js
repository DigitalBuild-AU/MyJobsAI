/**
 * Tests for the App component. This includes routing tests to ensure navigation works as expected
 * and tests for application functionality such as the sendEmail function.
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../app';
import axios from 'axios';

jest.mock('axios');

/**
 * Test suite for App component routing. Ensures that navigation to each route renders the correct component.
 */
describe('App Routing', () => {
  const routes = [
    { path: '/', component: 'Home' },
    { path: '/applications', component: 'Applications' },
    { path: '/cover-letter', component: 'CoverLetterComponent' },
    { path: '/cv-helper', component: 'CVHelperComponent' },
    { path: '/interviews', component: 'Interviews' },
    { path: '/job-listings', component: 'JobListings' },
    { path: '/settings', component: 'Settings' },
    { path: '/email', component: 'EmailComponent' },
    { path: '/analytics', component: 'AnalyticsComponent' },
  ];

  routes.forEach(route => {
    it(`navigates to ${route.path} and renders ${route.component}`, () => {
      const { getByText } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      fireEvent.click(getByText(new RegExp(route.component, 'i')));
      expect(getByText(route.component)).toBeInTheDocument();
    });
  });
});

describe('sendEmail Function', () => {
  beforeEach(() => {
    axios.post.mockClear();
  });

  it('displays success message on successful email sending', async () => {
    axios.post.mockResolvedValue({ data: { message: 'Email was sent successfully.' } });
    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.change(getByLabelText(/to/i), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText(/subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(getByLabelText(/body/i), { target: { value: 'Test Body' } });
    fireEvent.click(getByText(/send email/i));

    await expect(getByText(/Email was sent successfully./i)).toBeInTheDocument();
/**
 * Test suite for the sendEmail function in the App component. Verifies that the correct success or error message is displayed based on the outcome of the email sending process.
 */
  });

  it('displays error message when email sending fails', async () => {
    axios.post.mockRejectedValue(new Error('Failed to send email.'));
    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.change(getByLabelText(/to/i), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText(/subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(getByLabelText(/body/i), { target: { value: 'Test Body' } });
    fireEvent.click(getByText(/send email/i));

    await expect(getByText(/Failed to send email./i)).toBeInTheDocument();
  });
});
