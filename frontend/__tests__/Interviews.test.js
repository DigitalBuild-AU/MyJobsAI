import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Interviews from '../pages/Interviews';

describe('Interviews Component', () => {
  test('renders and verifies initial state', () => {
    render(<Interviews />);
    expect(screen.getByText('No interviews scheduled')).toBeInTheDocument();
  });

  test('adds a new interview and updates state', () => {
    render(<Interviews />);
    fireEvent.change(screen.getByPlaceholderText('Interview Date'), { target: { value: '2023-04-15' } });
    fireEvent.change(screen.getByPlaceholderText('Company Name'), { target: { value: 'Tech Innovations Inc.' } });
    fireEvent.click(screen.getByText('Add Interview'));
    expect(screen.getByText('Interview with Tech Innovations Inc. on 2023-04-15')).toBeInTheDocument();
  });

  test('updates an existing interview and reflects changes', () => {
    render(<Interviews />);
    fireEvent.click(screen.getByText('Edit', { selector: 'button' }));
    fireEvent.change(screen.getByPlaceholderText('Interview Date'), { target: { value: '2023-05-20' } });
    fireEvent.click(screen.getByText('Save Changes'));
    expect(screen.getByText('Interview with Tech Innovations Inc. on 2023-05-20')).toBeInTheDocument();
  });

  test('removes an interview entry and updates state', () => {
    render(<Interviews />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(screen.queryByText('Interview with Tech Innovations Inc. on 2023-04-15')).not.toBeInTheDocument();
  });

  test('attempts to add an interview with missing details', () => {
    render(<Interviews />);
    fireEvent.click(screen.getByText('Add Interview'));
    expect(screen.getByText('Please fill out all required fields')).toBeInTheDocument();
  });

  test('attempts to update a non-existent interview', () => {
    render(<Interviews />);
    // Assuming the UI provides a way to select an interview to edit, which doesn't exist
    fireEvent.click(screen.getByText('Edit', { selector: 'button[data-id="nonexistent"]' }));
    fireEvent.click(screen.getByText('Save Changes'));
    expect(screen.getByText('Interview not found')).toBeInTheDocument();
  });
});