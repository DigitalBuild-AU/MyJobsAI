/**
 * This file tests the Navbar component, ensuring it renders without crashing and displays all expected links correctly.
 */

import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Component Tests', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
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
   * Test if the Navbar component renders the 'Applications' link correctly.
   */
  it('renders Applications link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Applications')).toBeInTheDocument();
  });

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

  it('renders Settings link', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Settings')).toBeInTheDocument();
  });
});
