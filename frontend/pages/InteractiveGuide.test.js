import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveGuide from './components/InteractiveGuide';
import { getJobListingsPageGuideSteps, getInterviewFormGuideSteps } from './utils/guideSteps';

jest.mock('./utils/guideSteps', () => ({
  getJobListingsPageGuideSteps: jest.fn(),
  getInterviewFormGuideSteps: jest.fn(),
}));

describe('InteractiveGuide Component Tests', () => {
  const jobListingsSteps = [
    { target: '.job-listing', content: 'This is a job listing.' },
    { target: '.apply-button', content: 'Click here to apply.' }
  ];

  const interviewFormSteps = [
    { target: '.interview-form', content: 'Fill out this form to schedule an interview.' },
    { target: '.submit-button', content: 'Click here to submit the form.' }
  ];

  beforeEach(() => {
    getJobListingsPageGuideSteps.mockReturnValue(jobListingsSteps);
    getInterviewFormGuideSteps.mockReturnValue(interviewFormSteps);
  });

  test('initializes and displays the first step correctly', () => {
    render(<InteractiveGuide steps={jobListingsSteps} />);
    expect(screen.getByText('This is a job listing.')).toBeInTheDocument();
  });

  test('hides and shows the guide based on user interaction', () => {
    const { rerender } = render(<InteractiveGuide steps={jobListingsSteps} />);
    fireEvent.click(screen.getByText('Skip'));
    expect(screen.queryByText('This is a job listing.')).not.toBeInTheDocument();

    rerender(<InteractiveGuide steps={jobListingsSteps} run={true} />);
    expect(screen.getByText('This is a job listing.')).toBeInTheDocument();
  });

  test('navigates through the steps correctly', () => {
    render(<InteractiveGuide steps={interviewFormSteps} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Click here to submit the form.')).toBeInTheDocument();
  });

  test('completes the guide upon reaching the last step', () => {
    render(<InteractiveGuide steps={interviewFormSteps} />);
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Finish'));
    expect(screen.queryByText('Click here to submit the form.')).not.toBeInTheDocument();
  });
});
