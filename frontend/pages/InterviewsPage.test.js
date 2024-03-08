import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import InterviewsPage from './InterviewsPage';
import InterviewForm from './components/InterviewForm';

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
describe('InterviewForm handleSubmit function', () => {
  test('submits form data correctly', async () => {
    const formData = { jobTitle: 'Frontend Developer', date: '2023-05-01', notes: 'Technical interview' };
    axios.post.mockResolvedValue({ data: formData });

    render(<InterviewForm />);
    userEvent.type(screen.getByLabelText('Job Title'), formData.jobTitle);
    userEvent.type(screen.getByLabelText('Date and Time'), formData.date);
    userEvent.type(screen.getByLabelText('Notes'), formData.notes);
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/interviews', formData);
    });
  });

  test('displays error message on submission failure', async () => {
    axios.post.mockRejectedValue(new Error('Error scheduling interview'));
    render(<InterviewForm />);
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(screen.getByText('Failed to schedule interview.')).toBeInTheDocument();
    });
  });

  test('validates required fields before submission', async () => {
    render(<InterviewForm />);
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(screen.getByText('Please fill out this field.')).toBeInTheDocument();
    });
  });
});
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
