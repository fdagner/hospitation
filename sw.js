const CACHE_NAME = 'hospitation-cache-v1';
const urlsToCache = [
  '/hospitation/',
  '/hospitation/index.html',
  '/hospitation/css/style.css',
  '/hospitation/css/quill.snow.css',
  '/hospitation/js/script.js',
  '/hospitation/js/quill.min.js',
  '/hospitation/icons/icon.png',
  '/hospitation/manifest.json',
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