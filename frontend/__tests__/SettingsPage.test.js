import React from 'react';
import { render } from '@testing-library/react';
import SettingsPage from '../pages/SettingsPage';

describe('SettingsPage Component', () => {
  it('renders the Settings component', () => {
    const { getByText } = render(<SettingsPage />);
    expect(getByText(/Placeholder for settings content/i)).toBeInTheDocument();
  });
});
