import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoverLetter from '../pages/CoverLetter';

describe('CoverLetter Component', () => {
  test('renders and verifies initial display', () => {
    render(<CoverLetter />);
    expect(screen.getByText('Your Cover Letters')).toBeInTheDocument();
  });

  test('creates a new cover letter and updates UI', () => {
    render(<CoverLetter />);
    fireEvent.change(screen.getByPlaceholderText('Cover Letter Title'), { target: { value: 'My Cover Letter' } });
    fireEvent.change(screen.getByPlaceholderText('Cover Letter Content'), { target: { value: 'This is the content of my cover letter.' } });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('My Cover Letter')).toBeInTheDocument();
  });

  test('edits an existing cover letter and reflects changes', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Edit', { selector: 'button' }));
    fireEvent.change(screen.getByPlaceholderText('Cover Letter Content'), { target: { value: 'Updated content of my cover letter.' } });
    fireEvent.click(screen.getByText('Save Changes'));
    expect(screen.getByText('Updated content of my cover letter.')).toBeInTheDocument();
  });

  test('deletes a cover letter and updates UI', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(screen.queryByText('My Cover Letter')).not.toBeInTheDocument();
  });

  test('attempts to save a cover letter without content', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Please provide both a title and content for your cover letter.')).toBeInTheDocument();
  });

  test('attempts to delete a non-existent cover letter', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button[data-id="nonexistent"]' }));
    expect(screen.getByText('Cover letter not found')).toBeInTheDocument();
  });
});
