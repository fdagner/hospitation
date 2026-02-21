const CACHE_NAME = 'hospitation-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/quill.snow.css',
  '/js/script.js',
  '/js/quill.min.js',
  '/icons/icon.png',
  '/manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Kritische Dateien — müssen funktionieren
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});