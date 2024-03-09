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

/**
 * Tests that the InterviewForm component correctly updates inputs and submits form data,
 * and verifies that axios is called with the correct data upon form submission.
 */
/**
 * Tests that the inputs in the InterviewForm are correctly updated and the form submission
 * triggers an axios call with the correct data.
 */
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
/**
 * Tests user interaction with the InterviewForm component's inputs and the submission button.
 * Verifies that axios is correctly called with the expected data upon form submission.
 */
    await screen.findByText('Interview scheduled successfully.');

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/interviews', {
      jobTitle: 'Developer',
      date: '2023-01-01',
      notes: 'Test notes'
    });
    expect(setInterviews).toHaveBeenCalledWith([...mockInterviews, { id: 1, jobTitle: 'Developer', date: '2023-01-01', notes: 'Test notes' }]);
  });

/**
 * Tests the handling of form submission failure by the InterviewForm component, ensuring an error message is displayed.
 */
/**
 * Tests the handling of form submission failure by the InterviewForm component,
 * ensuring an error message is displayed to the user.
 */
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
 * Tests the functionality and rendering of interactive guide steps within the InterviewForm component.
 * Verifies that all guide steps are correctly targeted and described when the guide is active.
 */
/**
 * Tests the correct targeting and description of interactive guide steps within
 * the InterviewForm component when the guide feature is active.
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
 * Tests the handleSubmit function for correct handling of form submissions and responses in the InterviewForm component.
 * Verifies that submitInterviewData is called with correct parameters and setInterviews updates state appropriately.
 */
/**
 * Tests the handleSubmit function for its correct handling of form submission
 * and response processing within the InterviewForm.
 * Ensures that submitInterviewData is appropriately called and state is updated.
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

/**
 * Tests the handleSubmit function of the InterviewForm component for correct handling of submission failures.
 */
/**
 * Tests the handleSubmit function for its correct handling of submission failures,
 * specifically ensuring that errors are correctly handled and users are informed.
 */
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
