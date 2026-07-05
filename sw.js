const CACHE_NAME = 'arbitraje-v2'; // Cambiamos la versión para forzar la actualización
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Instalación inicial
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Obliga al service worker nuevo a activarse de inmediato
});

// Limpieza de cachés antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Toma el control de la página inmediatamente
});

// ESTRATEGIA: Network First (Prioriza internet para ver cambios al instante)
self.addEventListener('fetch', (e) => {
  // Ignoramos las peticiones externas de las APIs/CDN para que no se almacenen en caché
  if (!e.request.url.startsWith(self.location.origin)) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Si la red responde bien, guardamos la copia nueva en caché y la devolvemos
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // SI NO HAY INTERNET (Offline), recurre a la caché guardada
        return caches.match(e.request);
      })
  );
});