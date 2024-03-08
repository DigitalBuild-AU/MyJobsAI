import { setupWebVitals } from './webVitals';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';
import { afterEach, describe, expect, jest, test } from '@jest/globals';

describe('setupWebVitals', () => {
  let spyCLS, spyFID, spyLCP, spyFCP, spyTTFB;

  beforeEach(() => {
    spyCLS = jest.spyOn(require('web-vitals'), 'getCLS');
    spyFID = jest.spyOn(require('web-vitals'), 'getFID');
    spyLCP = jest.spyOn(require('web-vitals'), 'getLCP');
    spyFCP = jest.spyOn(require('web-vitals'), 'getFCP');
    spyTTFB = jest.spyOn(require('web-vitals'), 'getTTFB');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('getCLS is called once when setupWebVitals is invoked', () => {
    setupWebVitals();
    expect(spyCLS).toHaveBeenCalledTimes(1);
  });

  test('getFID is called once when setupWebVitals is invoked', () => {
    setupWebVitals();
    expect(spyFID).toHaveBeenCalledTimes(1);
  });

  test('getLCP is called once when setupWebVitals is invoked', () => {
    setupWebVitals();
    expect(spyLCP).toHaveBeenCalledTimes(1);
  });

  test('getFCP is called once when setupWebVitals is invoked', () => {
    setupWebVitals();
    expect(spyFCP).toHaveBeenCalledTimes(1);
  });

  test('getTTFB is called once when setupWebVitals is invoked', () => {
    setupWebVitals();
    expect(spyTTFB).toHaveBeenCalledTimes(1);
  });

  test('setupWebVitals can be called multiple times without errors', () => {
    expect(() => {
      setupWebVitals();
      setupWebVitals();
    }).not.toThrow();
  });
});
