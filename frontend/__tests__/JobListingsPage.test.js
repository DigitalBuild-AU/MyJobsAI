import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobListingsPage from '../pages/JobListingsPage';
import Modal from '../components/Modal';
jest.mock('axios');

describe('JobListingsPage Component', () => {
  test('Modal opens when the "Add Job Listing" button is clicked', () => {
    render(<JobListingsPage />);
    fireEvent.click(screen.getByText('Add Job Listing'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('Modal closes when the "Cancel" button inside the modal is clicked', () => {
    render(<JobListingsPage />);
    fireEvent.click(screen.getByText('Add Job Listing'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('Form inside the modal correctly submits new job listings', () => {
    const mockSubmit = jest.fn();
    render(<JobListingsPage submitFunction={mockSubmit} />);
    fireEvent.click(screen.getByText('Add Job Listing'));
    fireEvent.change(screen.getByPlaceholderText('Job Title'), { target: { value: 'Software Engineer' } });
    fireEvent.change(screen.getByPlaceholderText('Company'), { target: { value: 'Tech Inc.' } });
    fireEvent.change(screen.getByPlaceholderText('Location'), { target: { value: 'Remote' } });
    fireEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toHaveBeenCalledWith({
      jobTitle: 'Software Engineer',
      company: 'Tech Inc.',
      location: 'Remote'
    });
  });
});
