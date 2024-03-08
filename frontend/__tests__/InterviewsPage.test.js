import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import InterviewsPage from '../pages/InterviewsPage';
import { act } from 'react-dom/test-utils';

describe('InterviewsPage', () => {
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
