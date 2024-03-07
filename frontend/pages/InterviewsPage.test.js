import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import InterviewsPage from './InterviewsPage';

jest.mock('axios');

describe('InterviewsPage', () => {
  test('successfully fetches interviews from the API and renders them', async () => {
    const interviews = [
      { id: 1, jobTitle: 'Software Engineer', date: '2023-04-01', notes: 'Interview with HR' },
      { id: 2, jobTitle: 'Product Manager', date: '2023-04-02', notes: 'Interview with CEO' },
    ];
    axios.get.mockResolvedValue({ data: interviews });

    render(<InterviewsPage />);
    await waitFor(() => {
      interviews.forEach(interview => {
        expect(screen.getByText(interview.jobTitle)).toBeInTheDocument();
      });
    });
  });

  test('handles errors during the fetching of interviews and displays an error message', async () => {
    axios.get.mockRejectedValue(new Error('Error fetching interviews'));
    render(<InterviewsPage />);
    await waitFor(() => {
      expect(screen.getByText('Error fetching interviews:')).toBeInTheDocument();
    });
  });

  test('fills out the form to schedule a new interview and submits it successfully', async () => {
    const newInterview = { id: 3, jobTitle: 'UI/UX Designer', date: '2023-04-03', notes: 'Portfolio review' };
    axios.post.mockResolvedValue({ data: newInterview });

    render(<InterviewsPage />);
    userEvent.type(screen.getByLabelText('Job Title'), newInterview.jobTitle);
    userEvent.type(screen.getByLabelText('Date and Time'), newInterview.date);
    userEvent.type(screen.getByLabelText('Notes'), newInterview.notes);
    fireEvent.click(screen.getByText('Schedule Interview'));

    await waitFor(() => {
      expect(screen.getByText(newInterview.jobTitle)).toBeInTheDocument();
    });
  });

  test('handles errors during the submission of the new interview and displays an error message', async () => {
    axios.post.mockRejectedValue(new Error('Error scheduling interview'));
    render(<InterviewsPage />);
    fireEvent.click(screen.getByText('Schedule Interview'));
    await waitFor(() => {
      expect(screen.getByText('Failed to schedule interview.')).toBeInTheDocument();
    });
  });

  test('validates form inputs to ensure that the user cannot submit the form with empty fields', async () => {
    render(<InterviewsPage />);
    fireEvent.click(screen.getByText('Schedule Interview'));
    await waitFor(() => {
      expect(screen.queryByText('Interview scheduled successfully.')).not.toBeInTheDocument();
    });
  });
});
