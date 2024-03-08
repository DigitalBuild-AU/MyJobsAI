import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ApplicationsComponent from '../components/ApplicationsComponent';
import '@testing-library/jest-dom/extend-expect';

describe('ApplicationsComponent', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText } = render(<ApplicationsComponent />);
    expect(getByText('Applications | MyJobsAI')).toBeInTheDocument();
  });

  it('loads Bootstrap script dynamically', () => {
    document.body.appendChild = jest.fn();
    document.querySelector = jest.fn().mockReturnValueOnce(null);
    render(<ApplicationsComponent />);
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.appendChild.mock.calls[0][0].src).toBe('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
  });
});
