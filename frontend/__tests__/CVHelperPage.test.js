import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CVHelperPage from '../pages/CVHelperPage';

describe('CVHelperPage', () => {
  let mock;
  
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('submits form and displays CV suggestions on success', async () => {
    const jobDescription = 'Frontend Developer';
    const userCV = 'Experienced in React';
    const cvSuggestions = 'Consider highlighting your React projects.';
    mock.onPost('/api/cv/suggestions').reply(200, { suggestions: cvSuggestions });

    const { getByLabelText, getByText } = render(<CVHelperPage />);
    fireEvent.change(getByLabelText(/Job Description:/i), { target: { value: jobDescription } });
    fireEvent.change(getByLabelText(/Your CV:/i), { target: { value: userCV } });
    fireEvent.click(getByText(/Generate CV Suggestions/i));

    await waitFor(() => {
      expect(getByText(cvSuggestions)).toBeInTheDocument();
    });
  });

  it('displays error message on API request failure', async () => {
    const jobDescription = 'Frontend Developer';
    const userCV = 'Experienced in React';
    const errorMessage = 'Error fetching CV suggestions.';
    mock.onPost('/api/cv/suggestions').networkError();

    const { getByLabelText, getByText, queryByText } = render(<CVHelperPage />);
    fireEvent.change(getByLabelText(/Job Description:/i), { target: { value: jobDescription } });
    fireEvent.change(getByLabelText(/Your CV:/i), { target: { value: userCV } });
    fireEvent.click(getByText(/Generate CV Suggestions/i));

    await waitFor(() => {
      expect(queryByText(/Consider highlighting your React projects./i)).not.toBeInTheDocument();
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
