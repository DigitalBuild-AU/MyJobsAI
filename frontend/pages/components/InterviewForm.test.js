/**
 * Tests for the InterviewForm component.
 * This file includes tests for rendering the form, submitting form data, error handling, and field validation.
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import InterviewForm from './InterviewForm';

jest.mock('axios');

/**
 * Tests if the InterviewForm component renders all input fields and the submit button correctly.
 */
describe('InterviewForm Component', () => {
  test('renders form with all input fields and submit button', () => {
    render(<InterviewForm />);
    expect(screen.getByLabelText('Job Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Date and Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Notes')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  /**
   * Tests the correct submission of form data through the InterviewForm component.
   */
  test('submits form data correctly', async () => {
    const mockSubmit = axios.post.mockResolvedValue({ data: {} });
    const formData = { jobTitle: 'Frontend Developer', date: '2023-05-01', notes: 'Technical interview' };

    render(<InterviewForm />);
    userEvent.type(screen.getByLabelText('Job Title'), formData.jobTitle);
    userEvent.type(screen.getByLabelText('Date and Time'), formData.date);
    userEvent.type(screen.getByLabelText('Notes'), formData.notes);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await screen.findByText('Interview scheduled successfully.');
    expect(mockSubmit).toHaveBeenCalledWith('http://localhost:3000/api/interviews', formData);
  });

  test('displays error message on submission failure', async () => {
    axios.post.mockRejectedValue(new Error('Error scheduling interview'));

    render(<InterviewForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await screen.findByText('Failed to schedule interview.');
  });

  test('validates required fields before submission', async () => {
    render(<InterviewForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await screen.findByText('Please fill out this field.');
  });
});
