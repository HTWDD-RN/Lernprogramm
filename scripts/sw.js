self.addEventListener('install', event => event.waitUntil(
    caches.open('pwa1').then(cache => cache.add('/'))
));

self.addEventListener('fetch', event => event.respondWith(
    caches.open('pwa1')
        .then(cache => cache.match(event.request))
        .then(response => response || fetch(event.request))
));
