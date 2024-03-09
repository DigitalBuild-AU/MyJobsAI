import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsComponent from '../components/SettingsComponent';

describe('SettingsComponent', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<SettingsComponent />);
    expect(getByText('Settings | MyJobsAI')).toBeInTheDocument();
    // Assuming new UI elements from settings.html include a theme switcher and language selector
    expect(getByTestId('theme-switcher')).toBeInTheDocument();
    expect(getByTestId('language-selector')).toBeInTheDocument();
  });
});
/**
 * Test suite for the SettingsComponent.
 * This file contains tests that verify the rendering and dynamic script loading of the SettingsComponent.
 */
/**
 * Tests for SettingsComponent.
 */
    render(<SettingsComponent />);
    const scripts = Array.from(document.getElementsByTagName('script'));
    const bootstrapScript = scripts.find(script => script.src.includes('bootstrap.bundle.min.js'));
    expect(bootstrapScript).not.toBeNull();
  });
});
