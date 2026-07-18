// =========================================================================
// SERVICE WORKER - CONTROL DE CACHÉ
// IMPORTANTE: Para forzar una actualización en los dispositivos de los usuarios
// (activando el aviso de "Nueva versión instalada"), debes incrementar el número
// al final del CACHE_NAME (ej: 'arbitraje-v6' -> 'arbitraje-v7') cada vez que
// realices un nuevo release de la aplicación.
// =========================================================================
const CACHE_NAME = 'arby-v22';
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

  const isApiRequest = e.request.url.includes('dolarapi.com') ||
                       e.request.url.includes('criptoya.com') ||
                       e.request.url.includes('yadio.io');

  if (isNavigation || isApiRequest) {
    // Estrategia Network-First: Intentar red primero para obtener siempre el último despliegue o tasas reales al día.
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
