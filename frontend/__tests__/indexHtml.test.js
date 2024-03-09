import fs from 'fs';
import { getDocument, queries } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

const htmlContent = fs.readFileSync('frontend/index.html', 'utf-8');
const dom = getDocument(htmlContent);

/**
 * Test suite for verifying the configuration of index.html.
 */
describe('index.html configuration', () => {
  test('contains a single root div element for React app attachment', () => {
    const { queryAllById } = queries;
    const rootDivs = queryAllById(dom, 'root');
    expect(rootDivs).toHaveLength(1);
  });

  test('correctly loads the React bundle script', () => {
    const { getBySrc } = queries;
    const reactBundleScript = getBySrc(dom, '/static/js/bundle.js');
    expect(reactBundleScript).toBeInTheDocument();
  });

  test('contains no duplicate or unnecessary script tags', () => {
    const { queryAllByTagName } = queries;
    const scriptTags = queryAllByTagName(dom, 'script');
    const expectedScripts = ['/static/js/bundle.js'];
    const actualScripts = scriptTags.map(tag => tag.getAttribute('src')).filter(Boolean);

    expectedScripts.forEach(script => {
      const occurrences = actualScripts.filter(src => src === script).length;
/**
 * Tests for index.html: This file contains tests to ensure the index.html file is correctly configured for the React application, including checks for the root div element, React bundle script, and script tags.
 */
      expect(occurrences).toBe(1);
    });

    actualScripts.forEach(script => {
      expect(expectedScripts).toContain(script);
    });
  });
});
