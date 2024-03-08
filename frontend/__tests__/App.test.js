/**
 * Tests for the App component. This includes routing tests to ensure navigation works as expected
 * and tests for application functionality such as the sendEmail function.
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../app';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../app';
jest.mock('axios');

/**
 * Test suite for App component routing. Ensures that navigation to each route renders the correct component.
 */
/**
 * Test suite for verifying the routing functionality of the App component.
 * Ensures that navigation to each defined route renders the expected component.
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

  /**
   * Tests navigation to a specific route and verifies that the correct component is rendered.
   */
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

  describe('sendEmail Functionality', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <input id="emailTo" value="test@example.com" />
        <input id="emailSubject" value="Test Subject" />
        <textarea id="emailBody">Test Body</textarea>
        <div id="emailResponse"></div>
      `;
    });

    test('successfully sends an email', async () => {
  /**
   * Test suite for verifying the sendEmail function in the App component.
   * Checks the function's ability to successfully send an email and handle errors.
   */
      const response = { data: { message: 'Email was sent successfully.' } };
      axios.post.mockResolvedValue(response);

      App.sendEmail();
      await screen.findByText('Email was sent successfully.');

    await expect(getByText(/Email was sent successfully./i)).toBeInTheDocument();
/**
 * Test suite for the sendEmail function in the App component. Verifies that the correct success or error message is displayed based on the outcome of the email sending process.
 */
  });


    test('handles error when sending an email fails', async () => {
  /**
   * Tests the successful sending of an email using the sendEmail function.
   */
      axios.post.mockRejectedValue(new Error('Failed to send email.'));

      App.sendEmail();
      await screen.findByText('Failed to send email.');

      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/email/send', {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body'
      });
      expect(screen.getByText('Failed to send email.')).toBeInTheDocument();
    });
  });
});
  /**
   * Tests error handling in the sendEmail function when email sending fails.
   */
