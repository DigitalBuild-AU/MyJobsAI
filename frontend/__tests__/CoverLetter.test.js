import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoverLetter from '../pages/CoverLetter';

describe('CoverLetter Component', () => {
  // Tests that the CoverLetter component renders correctly and verifies its initial display.
  test('renders and verifies initial display', () => {
    render(<CoverLetter />);
    expect(screen.getByText('Your Cover Letters')).toBeInTheDocument();
  });

  // Tests that creating a new cover letter correctly updates the UI.
  test('creates a new cover letter and updates UI', () => {
    render(<CoverLetter />);
    fireEvent.change(screen.getByPlaceholderText('Cover Letter Title'), { target: { value: 'My Cover Letter' } });
    fireEvent.change(screen.getByPlaceholderText('Cover Letter Content'), { target: { value: 'This is the content of my cover letter.' } });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('My Cover Letter')).toBeInTheDocument();
  });

  test('edits an existing cover letter and reflects changes', () => {
"""
File: CoverLetter.test.js
Description: Test suite for the CoverLetter component, covering creation, editing, deletion, and validation of cover letters.
"""
  test('edits an existing cover letter and reflects changes', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Edit', { selector: 'button' }));
    fireEvent.change(screen.getByPlaceholderText('Cover Letter Content'), { target: { value: 'Updated content of my cover letter.' } });
    fireEvent.click(screen.getByText('Save Changes'));
    expect(screen.getByText('Updated content of my cover letter.')).toBeInTheDocument();
  });

  // Tests that deleting a cover letter correctly updates the UI.
  test('deletes a cover letter and updates UI', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(screen.queryByText('My Cover Letter')).not.toBeInTheDocument();
  });

  test('attempts to save a cover letter without content', () => {
  test('attempts to save a cover letter without content', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Please provide both a title and content for your cover letter.')).toBeInTheDocument();
  });

  // Tests that attempting to delete a non-existent cover letter displays the appropriate error message.
  test('attempts to delete a non-existent cover letter', () => {
    render(<CoverLetter />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button[data-id="nonexistent"]' }));
    expect(screen.getByText('Cover letter not found')).toBeInTheDocument();
  });
});
