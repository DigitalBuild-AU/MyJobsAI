"""
This file contains tests for the InterviewsPage component, covering functionalities such as fetching and displaying interviews, scheduling new interviews, and handling errors.
"""

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import InterviewsPage from '../../pages/InterviewsPage';
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
  Test case: Verifies that submitting the form with valid inputs schedules an interview and updates the component state accordingly.
  Inputs: Mock data for job title ('UI Designer'), date ('2023-05-01T12:00'), and notes ('Second round').
  Expected Outcome: The interview is scheduled, and the component state is updated to reflect this action.
  """
it('handleSubmit with valid inputs schedules interview and updates state', async () => {
  const formData = { jobTitle: 'UI Designer', date: '2023-05-01T12:00', notes: 'Second round' };
  mock.onPost('/api/interviews', formData).reply(200, { id: '2', ...formData });

  const { getByLabelText, getByText, findByText } = render(<InterviewsPage />);
  fireEvent.change(getByLabelText(/Job Title/i), { target: { value: formData.jobTitle } });
  """
  Test case: Verifies that an error message is displayed when there is a failure in scheduling an interview.
  Simulation: Mocks a post request to '/api/interviews' to return a 500 status code.
  Expected Outcome: An error message indicating the failure to schedule the interview is displayed.
  """
it('handleSubmit error scenario displays error message', async () => {
  Verifies the error handling in the InterviewsPage component when an attempt to schedule an interview fails. It checks that an appropriate error message is displayed.

  """

it('handleSubmit error scenario displays error message', async () => {
  const formData = { jobTitle: 'Backend Developer', date: '2023-05-02T15:00', notes: 'Technical round' };
  mock.onPost('/api/interviews', formData).reply(500);

  const { getByLabelText, getByText, findByText } = render(<InterviewsPage />);
  fireEvent.change(getByLabelText(/Job Title/i), { target: { value: formData.jobTitle } });
  fireEvent.change(getByLabelText(/Date and Time/i), { target: { value: formData.date } });
  fireEvent.change(getByLabelText(/Notes/i), { target: { value: formData.notes } });
  fireEvent.click(getByText(/Schedule Interview/i));

  await waitFor(() => {
    expect(findByText(/Failed to schedule interview./)).toBeInTheDocument();
  });
  
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
