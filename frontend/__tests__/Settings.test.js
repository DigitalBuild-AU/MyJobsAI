import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Settings from '../components/Settings';
import { SettingsContext } from '../contexts/SettingsContext';

describe('Settings Component', () => {
/**
 * Test suite for the Settings component.
 * Tests include loading and applying settings from SettingsContext,
 * and updating settings within the SettingsContext.
 */
  test('loads and applies settings from SettingsContext', () => {
    const defaultSettings = { theme: 'light', notifications: true };
    const wrapper = ({ children }) => <SettingsContext.Provider value={{ settings: defaultSettings }}>{children}</SettingsContext.Provider>;

    const { getByText } = render(<Settings />, { wrapper });

    expect(getByText('Current theme: light')).toBeInTheDocument();
    expect(getByText('Notifications: On')).toBeInTheDocument();
  });

  test('updates settings within SettingsContext', () => {
  /**
   * Tests that the Settings component correctly loads and displays settings from SettingsContext,
   * including the theme and notifications settings.
   */
    let settings = { theme: 'light', notifications: true };
    const updateSettings = jest.fn(updatedSettings => settings = { ...settings, ...updatedSettings });
    const wrapper = ({ children }) => <SettingsContext.Provider value={{ settings, updateSettings }}>{children}</SettingsContext.Provider>;

    const { getByText, getByLabelText } = render(<Settings />, { wrapper });

    fireEvent.click(getByLabelText('Dark Theme Toggle'));
    expect(updateSettings).toHaveBeenCalledWith({ theme: 'dark' });
    expect(getByText('Current theme: dark')).toBeInTheDocument();

    fireEvent.click(getByLabelText('Notifications Toggle'));
    expect(updateSettings).toHaveBeenCalledWith({ notifications: false });
    expect(getByText('Notifications: Off')).toBeInTheDocument();
  });
});
  /**
   * Tests the functionality of updating settings within the SettingsContext through the Settings component,
   * verifying the changes in theme and notifications settings.
   */
