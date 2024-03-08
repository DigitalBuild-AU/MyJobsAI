import React from 'react';
import { getJobListingsPageGuideSteps, getInterviewFormGuideSteps } from './guideSteps';
import { describe, test, expect } from '@jest/globals';

describe('GuideSteps Utility Functions', () => {
  test('getJobListingsPageGuideSteps returns correctly structured guide steps', () => {
    const steps = getJobListingsPageGuideSteps();
    expect(steps).toHaveLength(4);
    expect(steps).toEqual([
      { target: 'select[name="view"]', content: 'Select your preferred view for the job listings. You can switch between a table view and a card view.' },
      { target: 'input[name="status"]', content: 'Filter the job listings by status. Type in the status you are interested in.' },
      { target: 'input[name="company"]', content: 'Filter the job listings by company name. Enter the name of the company you are looking for.' },
      { target: '.pagination', content: 'Navigate through the job listings using the pagination buttons. You can go to the next page, previous page, or a specific page.' }
    ]);
  });

  test('getInterviewFormGuideSteps returns correctly structured guide steps', () => {
    const steps = getInterviewFormGuideSteps();
    expect(steps).toHaveLength(4);
    expect(steps).toEqual([
      { target: '#jobTitleInput', content: 'Enter the job title for the interview you are scheduling. This field is required.' },
      { target: '#interviewDateInput', content: 'Select the date and time for the interview. This field is required.' },
      { target: '#notesInput', content: 'Add any notes related to the interview here. This could include topics to discuss, questions to ask, or any other relevant information.' },
      { target: 'button[type="submit"]', content: 'Once you have filled out all the fields, click here to schedule the interview. You will be notified once the interview is successfully scheduled.' }
    ]);
  });
});
