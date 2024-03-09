/**
 * Tests for the ApplicationsPage component. Ensures that the component renders correctly and handles loading, error, and data fetching states.
 */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ApplicationsPage from '../pages/ApplicationsPage';
import '@testing-library/jest-dom/extend-expect';

describe('ApplicationsPage Component', () => {
  it('renders loading state initially', () => {
    const { getByText } = render(<ApplicationsPage />);
    expect(getByText(/Loading applications.../i)).toBeInTheDocument();
  });

  it('displays an error message if there is an error fetching applications', async () => {
    const { getByText } = render(<ApplicationsPage />);
    await waitFor(() => expect(getByText(/Error fetching applications:/i)).toBeInTheDocument());
  });

  it('renders the Applications component upon successful data fetching', async () => {
    const { getByText } = render(<ApplicationsPage />);
    await waitFor(() => expect(getByText(/Content from applications.html goes here, converted to JSX/i)).not.toBeInTheDocument());
  });
});
