import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

export function setupWebVitals() {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
  getFCP(console.log);
  getTTFB(console.log);
}
