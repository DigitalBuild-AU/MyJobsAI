import React from 'react';
import { render } from '@testing-library/react';
import ApplicationsPage from '../pages/ApplicationsPage';

describe('ApplicationsPage Component', () => {
  it('renders the Applications component', () => {
    const { getByText } = render(<ApplicationsPage />);
    expect(getByText(/Content from applications.html goes here, converted to JSX/i)).toBeInTheDocument();
  });
});
