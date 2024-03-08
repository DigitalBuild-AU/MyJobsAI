import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InterviewForm from './InterviewForm';
import axios from 'axios';
import { getInterviewFormGuideSteps } from '../utils/guideSteps';

jest.mock('axios');

describe('InterviewForm Component Tests', () => {
  const mockInterviews = [];
  const setInterviews = jest.fn();
  const mockGuideSteps = getInterviewFormGuideSteps();

  beforeEach(() => {
    axios.post.mockClear();
    setInterviews.mockClear();
  });

  test('inputs are correctly updated and form submission calls axios with correct data', async () => {
    axios.post.mockResolvedValue({ data: { id: 1, jobTitle: 'Developer', date: '2023-01-01', notes: 'Test notes' } });

    render(<InterviewForm setInterviews={setInterviews} interviews={mockInterviews} />);

    fireEvent.change(screen.getByLabelText('Job Title'), { target: { value: 'Developer' } });
    fireEvent.change(screen.getByLabelText('Date and Time'), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText('Notes'), { target: { value: 'Test notes' } });

    fireEvent.click(screen.getByText('Schedule Interview'));

    await screen.findByText('Interview scheduled successfully.');

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/interviews', {
      jobTitle: 'Developer',
      date: '2023-01-01',
      notes: 'Test notes'
    });
    expect(setInterviews).toHaveBeenCalledWith([...mockInterviews, { id: 1, jobTitle: 'Developer', date: '2023-01-01', notes: 'Test notes' }]);
  });

  test('form submission failure displays error message', async () => {
    axios.post.mockRejectedValue(new Error('Failed to schedule interview.'));

    render(<InterviewForm setInterviews={setInterviews} interviews={mockInterviews} />);

    fireEvent.click(screen.getByText('Schedule Interview'));

    await screen.findByText('Failed to schedule interview.');

    expect(axios.post).toHaveBeenCalled();
    expect(setInterviews).not.toHaveBeenCalled();
  });

  test('interactive guide steps are correctly targeted and described', () => {
    render(<InterviewForm setInterviews={setInterviews} interviews={mockInterviews} showGuide={true} />);

    mockGuideSteps.forEach(step => {
      expect(screen.getByText(step.content)).toBeInTheDocument();
    });
  });
});
