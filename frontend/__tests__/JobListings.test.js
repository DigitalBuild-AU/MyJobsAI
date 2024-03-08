import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobListings from '../components/JobListings';

describe('JobListings Component', () => {
  test('renders without crashing', () => {
    render(<JobListings />);
    expect(screen.getByText('Filter Listings')).toBeInTheDocument();
  });

  test('applies filters correctly', () => {
    render(<JobListings />);
    fireEvent.change(screen.getByPlaceholderText('Enter location'), { target: { value: 'New York' } });
    fireEvent.change(screen.getByPlaceholderText('Enter keywords'), { target: { value: 'Engineer' } });
    fireEvent.click(screen.getByText('Apply Filters'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // Assuming there's a mock response setup for axios
  });

  test('adds a new job listing successfully', () => {
    render(<JobListings />);
    fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Frontend Developer' } });
    fireEvent.change(screen.getByPlaceholderText('Company'), { target: { value: 'Tech Corp' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Job listing added successfully')).toBeInTheDocument();
  });

  test('handles error on fetching job listings', async () => {
    // Mock axios.get to simulate a network error
    render(<JobListings />);
    expect(screen.getByText('Error fetching job listings')).toBeInTheDocument();
  });

  test('validates form fields before adding a job listing', () => {
    render(<JobListings />);
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please fill out all fields')).toBeInTheDocument();
  });

  test('displays error message on add job listing failure', () => {
    render(<JobListings />);
    fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Frontend Developer' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Error adding job listing')).toBeInTheDocument();
  });
});
