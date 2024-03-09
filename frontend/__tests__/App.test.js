/**
 * This file contains tests for the App component, including routing and application functionality such as email sending.
 */
import { generateCoverLetter } from '../app';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
jest.mock('axios');

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
import { act } from 'react-dom/test-utils';
import EmailComponent from '../components/EmailComponent';
import useEmailSender from '../src/useEmailSender';
jest.mock('../src/useEmailSender');
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

    /**
     * Test suite for verifying the sendEmail function in the App component.
     * It checks the function's ability to successfully send an email and handle errors appropriately.
     */
    test('successfully sends an email', async () => {
      const response = { data: { message: 'Email was sent successfully.' } };
      axios.post.mockResolvedValue(response);

      fireEvent.click(screen.getByTestId('sendEmailButton'));
      await screen.findByText('Email was sent successfully.');

      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/email/send', {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body'
      });
      expect(screen.getByText('Email was sent successfully.')).toBeInTheDocument();
    });

    test('handles error when sending an email fails', async () => {

  /**
   * Tests the successful sending of an email using the sendEmail function.
   */
      axios.post.mockRejectedValue(new Error('Failed to send email.'));

      fireEvent.click(screen.getByTestId('sendEmailButton'));
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
describe('generateCoverLetter Functionality', () => {
  test('should return a correct cover letter when all parameters are valid', () => {
    const userName = 'John Doe';
    const jobTitle = 'Software Engineer';
    const companyName = 'Tech Innovations Inc.';
    const expectedCoverLetter = `Dear Hiring Manager at ${companyName},\n\nI am writing to express my interest in the ${jobTitle} position listed on your company website. My unique skills and experiences make me a perfect fit for this role.\n\nSincerely,\n${userName}`;
    expect(generateCoverLetter(userName, jobTitle, companyName)).toEqual(expectedCoverLetter);
  });

  test('should handle missing userName gracefully', () => {
    const jobTitle = 'Software Engineer';
    const companyName = 'Tech Innovations Inc.';
    // Assuming the function returns a generic message or handles the missing userName gracefully
    const expectedResponse = 'Please provide a valid userName.';
    expect(generateCoverLetter(null, jobTitle, companyName)).toEqual(expectedResponse);
  });
    // Tests the integration of the useEmailSender hook with the EmailComponent. This includes mocking the hook for both successful and failed email sending scenarios and verifying the expected outcomes are rendered correctly in the component.
    test('useEmailSender hook integration with EmailComponent', async () => {
    test('useEmailSender hook success scenario', async () => {
      useEmailSender.mockImplementation(() => jest.fn(async () => 'Email sent successfully'));
      const { getByText, rerender } = render(
        <BrowserRouter>
          <EmailComponent sendEmail={useEmailSender()} />
        </BrowserRouter>
      );
      await act(async () => {
        fireEvent.click(getByText('Send Email'));
      });
      expect(getByText('Email sent successfully')).toBeInTheDocument();
    });

      // Mock the useEmailSender hook for failure scenario
describe('useEmailSender Hook', () => {
  test('correctly makes a POST request with the correct parameters', async () => {
    const mockPost = axios.post.mockResolvedValue({ data: { message: 'Email sent successfully' } });
    const sendEmail = useEmailSender();
    await sendEmail('test@example.com', 'Test Subject', 'Test Body');
    expect(mockPost).toHaveBeenCalledWith('http://localhost:3000/api/email/send', {
      to: 'test@example.com',
      subject: 'Test Subject',
      body: 'Test Body'
    });
  });

  test('properly handles errors', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    const sendEmail = useEmailSender();
    await expect(sendEmail('test@example.com', 'Test Subject', 'Test Body')).rejects.toThrow('Failed to send email.');
  });

  test('returns the correct success message upon a successful email sending operation', async () => {
    axios.post.mockResolvedValue({ data: { message: 'Email sent successfully' } });
    const sendEmail = useEmailSender();
    const response = await sendEmail('test@example.com', 'Test Subject', 'Test Body');
    expect(response).toEqual('Email sent successfully');
  });
});
      </BrowserRouter>
    );
    expect(getByTestId('emailComponent')).toHaveProp('sendEmail');
  });

  test('EmailComponent correctly interacts with mocked sendEmail function', async () => {
    const mockSendEmail = jest.fn();
    jest.mock('../src/useEmailSender', () => ({
      __esModule: true,
      default: jest.fn(() => mockSendEmail),
    }));
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(getByText('Send Email'));
    expect(mockSendEmail).toHaveBeenCalled();
  });
});

    // Assuming the function returns a generic message or handles the missing jobTitle gracefully
    const expectedResponse = 'Please provide a valid jobTitle.';
    expect(generateCoverLetter(userName, null, companyName)).toEqual(expectedResponse);
  });

  test('should handle missing companyName gracefully', () => {
    const userName = 'John Doe';
    const jobTitle = 'Software Engineer';
    // Assuming the function returns a generic message or handles the missing companyName gracefully
    const expectedResponse = 'Please provide a valid companyName.';
    expect(generateCoverLetter(userName, jobTitle, null)).toEqual(expectedResponse);
  });

  test('should handle non-string parameters gracefully', () => {
    const userName = 123; // Non-string parameter
    const jobTitle = ['Software Engineer']; // Non-string parameter
    const companyName = { name: 'Tech Innovations Inc.' }; // Non-string parameter
    // Assuming the function checks for string type and returns a generic error message for non-string inputs
    const expectedResponse = 'Invalid input types. Please provide strings for all parameters.';
    expect(generateCoverLetter(userName, jobTitle, companyName)).toEqual(expectedResponse);
  });
});
