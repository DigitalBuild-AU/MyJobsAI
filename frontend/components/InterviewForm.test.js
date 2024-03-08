import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InterviewForm from './InterviewForm';
import axios from 'axios';
import { submitInterviewData } from '../utils/apiHelpers';
jest.mock('../utils/apiHelpers');
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
/**
/**
 * This file contains tests for the InterviewForm component, including rendering, user interaction, form submission, and interactive guide steps.
 */
 * Tests that inputs are correctly updated and form submission calls axios with correct data.
 *
 * This test simulates user interaction with the InterviewForm component's inputs and the submission button. It verifies that axios is called with the correct data upon form submission.
 */
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
    expect(setInterviews).not.toHaveBeenCalled();
  });
/**
 * Tests that the inputs are correctly updated and form submission calls axios with the correct data.
 */
  test('interactive guide steps are correctly targeted and described', () => {
/**
 * Tests that interactive guide steps are correctly targeted and described.
 *
 * This test verifies that all guide steps are correctly rendered and targeted within the InterviewForm component when the guide is active.
 */
    render(<InterviewForm setInterviews={setInterviews} interviews={mockInterviews} showGuide={true} />);

    mockGuideSteps.forEach(step => {
      expect(screen.getByText(step.content)).toBeInTheDocument();
    });
  });
});
/**
 * Tests handleSubmit function for correct handling of submission and response.
 *
 * This test simulates a successful form submission by mocking a resolved promise from submitInterviewData. It verifies that the setInterviews function is called with the correct data.
 */
  test('handleSubmit function correctly handles submission and response', async () => {
    submitInterviewData.mockResolvedValue({ data: { id: 1, jobTitle: 'Developer', date: '2023-01-01', notes: 'Test notes' } });

    render(<InterviewForm setInterviews={setInterviews} interviews={mockInterviews} />);

    fireEvent.change(screen.getByLabelText('Job Title'), { target: { value: 'Developer' } });
    fireEvent.change(screen.getByLabelText('Date and Time'), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText('Notes'), { target: { value: 'Test notes' } });

    fireEvent.click(screen.getByText('Schedule Interview'));

    await screen.findByText('Interview scheduled successfully.');

    expect(submitInterviewData).toHaveBeenCalledWith('Developer', '2023-01-01', 'Test notes');
    expect(setInterviews).toHaveBeenCalledWith([...mockInterviews, { id: 1, jobTitle: 'Developer', date: '2023-01-01', notes: 'Test notes' }]);
  });

  test('handleSubmit function correctly handles submission failure', async () => {
    submitInterviewData.mockRejectedValue(new Error('Failed to schedule interview.'));

    render(<InterviewForm setInterviews={setInterviews} interviews={mockInterviews} />);

    fireEvent.click(screen.getByText('Schedule Interview'));

    await screen.findByText('Failed to schedule interview.');

    expect(submitInterviewData).toHaveBeenCalled();
    expect(setInterviews).not.toHaveBeenCalled();
  });
/**
 * Tests handleSubmit function for correct handling of submission failure.
 *
 * This test simulates a failed form submission by mocking a rejected promise from submitInterviewData. It verifies that the setInterviews function is not called.
 */
