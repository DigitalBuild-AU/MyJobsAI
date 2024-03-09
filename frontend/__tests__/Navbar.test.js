/**
 * This file tests the Navbar component, ensuring it renders without crashing and displays all expected links correctly.
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Component Tests', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
  });

  // Test the dynamic active link feature with NavLinks component
  it('updates active link on click within NavLinks', () => {
    const { getByText } = render(<Navbar />);
    fireEvent.click(getByText('Dashboard'));
    expect(getByText('Dashboard').closest('li')).toHaveClass('active');
    fireEvent.click(getByText('Job Listings'));
    expect(getByText('Job Listings').closest('li')).toHaveClass('active');
    expect(getByText('Dashboard').closest('li')).not.toHaveClass('active');
  });

  it('displays the brand name MyJobsAI', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('MyJobsAI')).toBeInTheDocument();
  });

  it('renders Dashboard link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders Job Listings link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Job Listings')).toBeInTheDocument();
  });

  /**
   * Test if the Navbar component renders the 'Applications' link correctly and verifies its active state on click.
   */
  it('renders Applications link and verifies active state on click', () => {
    const { getByText } = render(<Navbar />);
    const applicationsLink = getByText('Applications');
    expect(applicationsLink).toBeInTheDocument();
    fireEvent.click(applicationsLink);
    expect(applicationsLink.parentNode).toHaveClass('active');
  });


  // Test case to ensure the CV Helper link is rendered in the Navbar component.
  /**
   * Test if the Navbar component renders the 'CV Helper' link correctly.
   */

  it('renders CV Helper link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('CV Helper')).toBeInTheDocument();
  });

  it('renders Cover Letter link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Cover Letter')).toBeInTheDocument();
  });

  it('renders Interviews link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Interviews')).toBeInTheDocument();
  });

  /**
   * Test if the Navbar component renders the 'Settings' link correctly.
   * This test verifies that the Navbar component includes a link for 'Settings',
   * ensuring that users can navigate to the Settings page from the Navbar.
   */
  it('renders Settings link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Settings')).toBeInTheDocument();
  });
});
  // Test to ensure NavLinks component is rendered within Navbar
  it('renders NavLinks component within Navbar', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('nav-links')).toBeInTheDocument();
  });
