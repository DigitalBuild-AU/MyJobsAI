/**
 * Logs the given metric to the console.
 * This function checks for the availability of `window.requestIdleCallback` to log the metric. If unavailable, it falls back to using `setTimeout`.
 * @param {Object} metric - The metric object containing web vitals data to be logged.
 */
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function log(metric) {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => console.log(metric));
  } else {
    setTimeout(() => console.log(metric), 0);
  }
}

export function setupWebVitals() {
  getCLS(log);
  getFID(log);
  getLCP(log);
  getFCP(log);
  getTTFB(log);
}
/**
 * This file includes the setup for web vitals monitoring in the application.
 * It imports web vitals from 'web-vitals' package and logs them to the console.
 */
/**
 * Sets up listeners for web vitals metrics and logs them using the `log` function.
 * It does not take any parameters and does not return any value.
 */
