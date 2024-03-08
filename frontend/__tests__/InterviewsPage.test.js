import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import InterviewsPage from '../pages/InterviewsPage';
import { act } from 'react-dom/test-utils';

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
it('handleSubmit with valid inputs schedules interview and updates state', async () => {
  const formData = { jobTitle: 'UI Designer', date: '2023-05-01T12:00', notes: 'Second round' };
  mock.onPost('/api/interviews', formData).reply(200, { id: '2', ...formData });

  const { getByLabelText, getByText, findByText } = render(<InterviewsPage />);
  fireEvent.change(getByLabelText(/Job Title/i), { target: { value: formData.jobTitle } });
  fireEvent.change(getByLabelText(/Date and Time/i), { target: { value: formData.date } });
  fireEvent.change(getByLabelText(/Notes/i), { target: { value: formData.notes } });
  fireEvent.click(getByText(/Schedule Interview/i));

  await waitFor(() => {
    expect(findByText('UI Designer')).toBeInTheDocument();
  });
});
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
});
