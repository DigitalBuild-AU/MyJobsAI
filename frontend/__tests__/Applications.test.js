import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Applications from '../pages/Applications';

describe('Applications Component', () => {
  test('renders and verifies initial state', () => {
    render(<Applications />);
    expect(screen.getByText('No applications added yet')).toBeInTheDocument();
  });

  test('submits a new application and updates state', () => {
    const { getByLabelText, getByText } = render(<Applications />);
    fireEvent.change(getByLabelText('Job Title'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Company Name'), { target: { value: 'Tech Innovations Inc.' } });
    fireEvent.click(getByText('Submit'));
    expect(screen.getByText('Software Engineer at Tech Innovations Inc.')).toBeInTheDocument();
  });

  test('updates an existing application and reflects changes', () => {
    const { getByLabelText, getByText } = render(<Applications />);
    // Assuming the component has a way to select an existing application for editing
    fireEvent.click(screen.getByText('Edit', { selector: 'button' }));
    fireEvent.change(getByLabelText('Job Title'), { target: { value: 'Senior Software Engineer' } });
    fireEvent.click(getByText('Update'));
    expect(screen.getByText('Senior Software Engineer at Tech Innovations Inc.')).toBeInTheDocument();
  });

  test('deletes an application and updates state', () => {
    render(<Applications />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(screen.queryByText('Software Engineer at Tech Innovations Inc.')).not.toBeInTheDocument();
  });

  test('attempts to submit an application with incomplete information', () => {
    const { getByText } = render(<Applications />);
    fireEvent.click(getByText('Submit'));
    expect(screen.getByText('Please fill out all required fields')).toBeInTheDocument();
  });

  test('attempts to delete a non-existent application', () => {
    render(<Applications />);
    // Simulating deletion attempt on a non-existent application
    fireEvent.click(screen.getByText('Delete', { selector: 'button[data-id="nonexistent"]' }));
    expect(screen.getByText('Application not found')).toBeInTheDocument();
  });
});
