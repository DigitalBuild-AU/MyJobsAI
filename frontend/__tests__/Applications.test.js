/**
 * @file Applications.test.js
 * @description Test suite for the Applications component, covering rendering, state updates, and interaction behaviors.
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Applications from '../pages/Applications';

describe('Applications Component', () => {
  /**
   * Tests that the Applications component renders correctly and verifies its initial state.
   */
  test('renders and verifies initial state', () => {
    render(<Applications />);
    expect(screen.getByText('No applications added yet')).toBeInTheDocument();
  });

  /**
   * Tests that submitting a new application correctly updates the component's state.
   */
  test('submits a new application and updates state', () => {
  * Tests that submitting a new application correctly updates the component's state.
  */
  test('submits a new application and updates state', () => {
    const { getByLabelText, getByText } = render(<Applications />);
    fireEvent.change(getByLabelText('Job Title'), { target: { value: 'Software Engineer' } });
    fireEvent.change(getByLabelText('Company Name'), { target: { value: 'Tech Innovations Inc.' } });
    fireEvent.click(getByText('Submit'));
    expect(screen.getByText('Software Engineer at Tech Innovations Inc.')).toBeInTheDocument();
  });

  /**
   * Tests that submitting a new application correctly updates the component's state.
   */
  test('updates an existing application and reflects changes', () => {
   */
  test('updates an existing application and reflects changes', () => {
 * Tests that updating an existing application correctly reflects the changes.
test('dynamically loads Bootstrap script', async () => {
  render(<Applications />);
  await waitFor(() => expect(document.querySelector('script[src*="bootstrap.bundle.min.js"]')).toBeInTheDocument());
  expect(console.log).toHaveBeenCalledWith('Bootstrap 5 script loaded successfully.');
});
test('includes Navbar in the rendering', () => {
  const { getByText } = render(<Applications />);
  expect(getByText(/Dynamic Navbar Inclusion is handled by the Navbar component/i)).toBeInTheDocument();
});
test('renders migrated content from applications.html', () => {
  const { getByText } = render(<Applications />);
  expect(getByText(/Additional page content can be added here/i)).toBeInTheDocument();
});
 */
  test('updates an existing application and reflects changes', () => {
    // Additional scenario: Updating the company name of an existing application
    fireEvent.change(getByLabelText('Company Name'), { target: { value: 'Innovative Tech Solutions' } });
    fireEvent.click(getByText('Update'));
    expect(screen.getByText('Senior Software Engineer at Innovative Tech Solutions')).toBeInTheDocument();

    // Additional scenario: Updating the application status
    fireEvent.change(getByLabelText('Status'), { target: { value: 'Interview Scheduled' } });
    fireEvent.click(getByText('Update'));
    expect(screen.getByText('Interview Scheduled')).toBeInTheDocument();
/**
 * Tests that deleting an application correctly updates the component's state.
 */
/**
 * Tests that submitting an application with incomplete information displays the appropriate error message.
 */
/**
 * Tests that attempting to delete a non-existent application displays the appropriate error message.
 */
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
  test('attempts to update an application with invalid data', () => {
    render(<Applications />);
    // Simulating updating an application with invalid job title
    fireEvent.click(screen.getByText('Edit', { selector: 'button' }));
    fireEvent.change(getByLabelText('Job Title'), { target: { value: '' } }); // Empty job title
    fireEvent.click(getByText('Update'));
    expect(screen.getByText('Job title cannot be empty')).toBeInTheDocument();

    // Simulating updating an application with invalid company name
    fireEvent.change(getByLabelText('Company Name'), { target: { value: '' } }); // Empty company name
    fireEvent.click(getByText('Update'));
    expect(screen.getByText('Company name cannot be empty')).toBeInTheDocument();
  });
});
    expect(screen.getByText('Application not found')).toBeInTheDocument();
  });
});
import { BrowserRouter } from 'react-router-dom';

describe('App.js Routing', () => {
  test('navigates to CoverLetterComponent', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByText('Cover Letter'));
    expect(screen.getByText('Generate Cover Letter')).toBeInTheDocument();
  });

  test('navigates to CVHelperComponent', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByText('CV Helper'));
    expect(screen.getByText('Get CV Suggestions')).toBeInTheDocument();
  });

  test('navigates to EmailComponent', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByText('Email'));
    expect(screen.getByText('Send Email')).toBeInTheDocument();
  });

  test('navigates to AnalyticsComponent', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    fireEvent.click(screen.getByText('Analytics'));
    expect(screen.getByText('Total Applications:')).toBeInTheDocument();
  });
});
/**
 * Tests that the Applications component correctly navigates to different components via routing.
 */
