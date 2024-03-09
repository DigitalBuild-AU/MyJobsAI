/**
 * Logs web vitals metrics to the console.
 * @param {Object} metric - The metric object containing web vitals data.
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
