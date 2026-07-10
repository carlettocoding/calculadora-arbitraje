const CACHE_NAME = 'arbitraje-v4';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[Service Worker] Purging obsolete cache:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const isNavigation = e.request.mode === 'navigate' || 
                       e.request.url.endsWith('index.html') || 
                       e.request.url === self.location.origin + '/';

  if (isNavigation) {
    // Estrategia Network-First: Intentar red primero para obtener siempre el último despliegue.
    // Si falla (offline), servir desde la caché.
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Para recursos estáticos (imágenes, manifest, etc.), Cache-First con fallback de red
    e.respondWith(
      caches.match(e.request).then((res) => {
        return res || fetch(e.request).then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          }
          return response;
        });
      })
    );
  }
});
