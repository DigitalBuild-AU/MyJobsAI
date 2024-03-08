/**
 * This function sets up web vitals by logging them to the console.
 * It does not take any parameters and does not return any value.
 */
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

export function setupWebVitals() {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
  getFCP(console.log);
  getTTFB(console.log);
}
