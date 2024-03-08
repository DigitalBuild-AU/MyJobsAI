"""
This file contains tests for the InterviewsPage component, covering functionalities such as fetching and displaying interviews, scheduling new interviews, and handling errors.
"""

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import InterviewsPage from '../pages/InterviewsPage';
import { act } from 'react-dom/test-utils';
import { submitInterview, handleInterviewResponse, handleInterviewError } from '../utils/interviewAPI';
jest.mock('../utils/interviewAPI');

describe('InterviewsPage', () => {
"""
Tests for the InterviewsPage component, covering the functionality of fetching and displaying interviews, scheduling new interviews, and error handling.
"""
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches interviews on component mount and updates state', async () => {
    const interviewsData = [{ id: '1', jobTitle: 'Developer', date: '2023-04-01', notes: 'First round' }];
    mock.onGet('/api/interviews').reply(200, interviewsData);

    await act(async () => {
      const { findByText } = render(<InterviewsPage />);
      expect(await findByText('Developer')).toBeInTheDocument();
    });
  });

  it('submits form and schedules interview successfully', async () => {
  """
  Verifies that the InterviewsPage component correctly fetches and displays interviews upon mounting.
  """
    const formData = { jobTitle: 'Developer', date: '2023-04-01', notes: 'First round' };
    mock.onPost('/api/interviews', formData).reply(200);

    const { getByLabelText, getByText } = render(<InterviewsPage />);
    fireEvent.change(getByLabelText(/Job Title/i), { target: { value: formData.jobTitle } });
    fireEvent.change(getByLabelText(/Date/i), { target: { value: formData.date } });
    fireEvent.change(getByLabelText(/Notes/i), { target: { value: formData.notes } });
    fireEvent.click(getByText(/Schedule Interview/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Interview scheduled successfully.');
    });
  });
  """
  Tests the functionality of the InterviewsPage form for scheduling a new interview. It verifies that submitting the form with valid data schedules an interview and displays a success message.
  """

  it('handles error when scheduling interview fails', async () => {
    const formData = { jobTitle: 'Developer', date: '2023-04-01', notes: 'First round' };
    mock.onPost('/api/interviews', formData).networkError();

    const { getByLabelText, getByText } = render(<InterviewsPage />);
    fireEvent.change(getByLabelText(/Job Title/i), { target: { value: formData.jobTitle } });
    fireEvent.change(getByLabelText(/Date/i), { target: { value: formData.date } });
    fireEvent.change(getByLabelText(/Notes/i), { target: { value: formData.notes } });
    fireEvent.click(getByText(/Schedule Interview/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Failed to schedule interview.');
    });
  });
});
  """
  Verifies the error handling in the InterviewsPage component when an attempt to schedule an interview fails. It checks that an appropriate error message is displayed.
  """
  
  it('integrates with submitInterview successfully', async () => {
    const mockData = { jobTitle: 'Developer', date: '2023-04-01', notes: 'First round' };
    const mockResponse = { data: { message: 'Interview scheduled successfully' } };
    submitInterview.mockResolvedValue(mockResponse);
    handleInterviewResponse.mockImplementation(data => data);

    const { getByLabelText, getByText } = render(<InterviewsPage />);
    fireEvent.change(getByLabelText(/Job Title/i), { target: { value: mockData.jobTitle } });
    fireEvent.change(getByLabelText(/Date and Time/i), { target: { value: mockData.date } });
    fireEvent.change(getByLabelText(/Notes/i), { target: { value: mockData.notes } });
    await act(async () => {
      fireEvent.click(getByText(/Schedule Interview/i));
    });

    await waitFor(() => {
      expect(handleInterviewResponse).toHaveBeenCalledWith(mockResponse);
    });
  });

  it('integrates with submitInterview with an error', async () => {
    const mockData = { jobTitle: 'Developer', date: '2023-04-01', notes: 'First round' };
    const mockError = new Error('Network error');
    submitInterview.mockRejectedValue(mockError);
    handleInterviewError.mockImplementation(() => {});

    const { getByLabelText, getByText } = render(<InterviewsPage />);
    fireEvent.change(getByLabelText(/Job Title/i), { target: { value: mockData.jobTitle } });
    fireEvent.change(getByLabelText(/Date and Time/i), { target: { value: mockData.date } });
    fireEvent.change(getByLabelText(/Notes/i), { target: { value: mockData.notes } });
    await act(async () => {
      fireEvent.click(getByText(/Schedule Interview/i));
    });

    await waitFor(() => {
      expect(handleInterviewError).toHaveBeenCalledWith(mockError);
    });
  });
