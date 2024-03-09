import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../app';
jest.mock('axios');

describe('App.js Tests', () => {
  describe('generateCoverLetter Functionality', () => {
    test('generateCoverLetter function exists and is callable', () => {
      expect(typeof App.generateCoverLetter).toBe('function');
    });
  });

  describe('sendEmail Functionality', () => {
/**
 * Tests if the generateCoverLetter function exists and is callable.
 * 
 * This test verifies the presence and type of the generateCoverLetter function
 * within the App component. It does not have inputs, outputs, or side effects.
 */
test('generateCoverLetter function exists and is callable', () => {
  expect(typeof App.generateCoverLetter).toBe('function');
});
    beforeEach(() => {
      document.body.innerHTML = `
        <input id="emailTo" value="test@example.com" />
        <input id="emailSubject" value="Test Subject" />
        <textarea id="emailBody">Test Body</textarea>
        <div id="emailResponse"></div>
      `;
    });

    test('successfully sends an email', async () => {
      const response = { data: { message: 'Email was sent successfully.' } };
      axios.post.mockResolvedValue(response);

      App.sendEmail();
      await screen.findByText('Email was sent successfully.');

      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/email/send', {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body'
      });
      expect(screen.getByText('Email was sent successfully.')).toBeInTheDocument();
    });

    test('handles error when sending an email fails', async () => {
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
