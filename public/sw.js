const CACHE_NAME = "recipe-cache-v1";

const cacheFirst = async (request) => {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    const responseClone = response.clone(); // Clone the response for caching
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, responseClone); // Cache the new response
    return response; // Return the fresh response
  } catch (error) {
    console.error("Network request failed", error);
    throw error;
  }
};

// Activate event to clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
