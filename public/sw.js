// service-worker.js

// Optional: Set the version of your service worker
const CACHE_VERSION = "v1";

// Optional: Define the cache name
const CACHE_NAME = `my-app-cache-${CACHE_VERSION}`;

// Optional: List of assets to cache
const urlsToCache = [
	"/index.html",
	"/200.html",
	"/404.html",

	"/app.js",

	"/favicon.ico",
	"android-chrome-192x192.png",
	"android-chrome-512x512.png",

	"/manifest.json",

	"/sw.js",
];

// Installation event: Cache assets
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => cache.addAll(urlsToCache))
			.then(() => self.skipWaiting())
	);
});

// Activation event: Clean up old caches
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== CACHE_NAME) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// Fetch event: Serve cached assets
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
