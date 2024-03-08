import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsComponent from '../components/SettingsComponent';

describe('SettingsComponent', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByText } = render(<SettingsComponent />);
    expect(getByText('Settings | MyJobsAI')).toBeInTheDocument();
  });

  it('loads Bootstrap script dynamically', () => {
    render(<SettingsComponent />);
    const scripts = Array.from(document.getElementsByTagName('script'));
    const bootstrapScript = scripts.find(script => script.src.includes('bootstrap.bundle.min.js'));
    expect(bootstrapScript).not.toBeNull();
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
