import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { jest } from '@jest/globals';

describe('Service Worker Tests', () => {
  beforeEach(() => {
    global.self = { addEventListener: jest.fn() };
    global.caches = {
      open: jest.fn().mockResolvedValue({
        addAll: jest.fn().mockResolvedValue(undefined),
      }),
      keys: jest.fn().mockResolvedValue(['old-cache']),
      delete: jest.fn().mockResolvedValue(true),
    };
    global.fetch = jest.fn().mockResolvedValue('network response');
  });

  test('precacheAndRoute on install', async () => {
    require('../src/serviceWorker');
    const [eventType, eventListener] = self.addEventListener.mock.calls[0];
    expect(eventType).toBe('install');
    const event = { waitUntil: jest.fn() };
    await eventListener(event);
    expect(global.caches.open).toHaveBeenCalledWith('myjobsai-cache-v1');
    expect(global.caches.open().then(cache => cache.addAll)).toHaveBeenCalledWith([
      '/',
      '/index.html',
      '/static/js/bundle.js',
      '/static/js/main.chunk.js',
      '/static/js/0.chunk.js',
      '/favicon.ico',
      '/logo192.png',
    ]);
  });

  test('CacheFirst strategy for images', async () => {
    const cacheFirst = new CacheFirst({
      cacheName: 'image-cache',
      plugins: [new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 })],
    });
    const response = await cacheFirst.handle({ request: new Request('https://example.com/image.png') });
    expect(response).toBe('network response');
    expect(global.fetch).toHaveBeenCalledWith('https://example.com/image.png');
  });

  test('NetworkFirst strategy for API responses', async () => {
    const networkFirst = new NetworkFirst({
      cacheName: 'api-cache',
      plugins: [new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 5 * 60 })],
    });
    const response = await networkFirst.handle({ request: new Request('https://api.myjobsai.com/data') });
    expect(response).toBe('network response');
    expect(global.fetch).toHaveBeenCalledWith('https://api.myjobsai.com/data');
  });

  test('Deletes old caches on activate', async () => {
    require('../src/serviceWorker');
    const [eventType, eventListener] = self.addEventListener.mock.calls.find(call => call[0] === 'activate');
    const event = { waitUntil: jest.fn() };
    await eventListener(event);
    expect(global.caches.keys).toHaveBeenCalled();
    expect(global.caches.delete).toHaveBeenCalledWith('old-cache');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
