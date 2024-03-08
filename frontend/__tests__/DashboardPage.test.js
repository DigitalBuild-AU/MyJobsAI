import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardPage from '../pages/DashboardPage';
import Modal from '../components/Modal';
jest.mock('axios');

describe('DashboardPage Modal Logic', () => {
  test('Modal opens with correct content when handleOpenModal is called', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByText('Add Entry'));
    expect(screen.getByText('Job Application Summary')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('Modal closes when handleCloseModal is called', async () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByText('Add Entry')); // Open the modal first
    expect(screen.getByRole('dialog')).toBeInTheDocument(); // Check if modal is open
    fireEvent.click(screen.getByText('&times;')); // Assuming &times; is used for the close button
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(); // Modal should no longer be in the document
  });
});
