/**
 * @file EmailComponent.test.js
 * @description Test suite for EmailComponent. Covers testing form interactions, API call triggers, and response handling.
 */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import EmailComponent from '../components/EmailComponent';

jest.mock('axios');

describe('EmailComponent', () => {
  const setup = () => {
    const utils = render(<EmailComponent />);
    const toInput = utils.getByLabelText('To:');
    const subjectInput = utils.getByLabelText('Subject:');
    const bodyTextarea = utils.getByLabelText('Body:');
    const sendButton = utils.getByText('Send Email');
    return {
      toInput,
      subjectInput,
      bodyTextarea,
      sendButton,
      ...utils,
    };
  };

  test('form submission triggers API call with correct data', async () => {
  /**
   * Tests the form submission process, ensuring it triggers an API call with the correct data.
   */
  test('form submission triggers API call with correct data', async () => {
    const { toInput, subjectInput, bodyTextarea, sendButton } = setup();
    const mockData = { to: 'test@example.com', subject: 'Test Subject', body: 'Test Body' };

/**
 * Tests rendering of the EmailComponent with different props.
 */
test('renders correctly with different props', () => {
  const { rerender } = render(<EmailComponent to="test@example.com" subject="Greetings" body="Hello, World!" />);
  expect(screen.getByLabelText('To:').value).toBe('test@example.com');
  expect(screen.getByLabelText('Subject:').value).toBe('Greetings');
  expect(screen.getByLabelText('Body:').value).toBe('Hello, World!');

  // Testing with different props
  rerender(<EmailComponent to="another@example.com" subject="Updated Subject" body="Updated body content" />);
  expect(screen.getByLabelText('To:').value).toBe('another@example.com');
  expect(screen.getByLabelText('Subject:').value).toBe('Updated Subject');
  expect(screen.getByLabelText('Body:').value).toBe('Updated body content');
});

test('user interactions with input fields and send button', async () => {
  const { toInput, subjectInput, bodyTextarea, sendButton } = setup();
  fireEvent.change(toInput, { target: { value: 'user@example.com' } });
  fireEvent.change(subjectInput, { target: { value: 'User Subject' } });
  fireEvent.change(bodyTextarea, { target: { value: 'User message body' } });
  fireEvent.click(sendButton);

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/email/send', {
      to: 'user@example.com',
      subject: 'User Subject',
      body: 'User message body'
    });
  });
});
    fireEvent.change(toInput, { target: { value: mockData.to } });
    fireEvent.change(subjectInput, { target: { value: mockData.subject } });
    fireEvent.change(bodyTextarea, { target: { value: mockData.body } });
    fireEvent.click(sendButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/email/send', mockData));
  });

  test('component updates state with response message upon successful API call', async () => {
  * Tests the component's ability to update its state with a response message upon a successful API call.
  */
  test('component updates state with response message upon successful API call', async () => {
  /**
  * Tests the component's error handling capabilities when an API call fails.
  */
    axios.post.mockResolvedValue({ data: { message: 'Email sent successfully' } });
    const { sendButton } = setup();
    fireEvent.click(sendButton);

    await waitFor(() => expect(screen.getByText('Email sent successfully')).toBeInTheDocument());
  });

  test('error handling works correctly if API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Error sending email'));
    const { sendButton } = setup();
    fireEvent.click(sendButton);

    await waitFor(() => expect(screen.getByText('Error sending email: Error sending email')).toBeInTheDocument());
  });
});
