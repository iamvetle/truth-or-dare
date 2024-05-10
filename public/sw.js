// service-worker.js

// Optional: Set the version of your service worker
const CACHE_VERSION = "v1";

// Optional: Define the cache name
const CACHE_NAME = `my-app-cache-${CACHE_VERSION}`;

// Optional: List of assets to cache
const assets = [
	"/",
	"/index.html",
	"/200.html",
	"/404.html",

	"/app.js",

	"/favicon.ico",
	"/_payload.json?8c8a575b-f29f-45c0-8bec-7ed45a1f58cd",
	"/_nuxt/builds/meta/8c8a575b-f29f-45c0-8bec-7ed45a1f58cd.json",
	"/android-chrome-192x192.png",
	"/android-chrome-512x512.png",
	"/truthQuestions.json",
	"/dareQuestions.json",
	"/manifest.json",
	"/_nuxt/CoUi9COX.js",
	"/_nuxt/Da76QKvm.js",
	"/_nuxt/error-404.CyhgO96i.css",
	"/_nuxt/DJaUC7tt.js",
	"/_nuxt/error-500.Cph627d6.css",
];

// Installation event: Cache assets
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Cachine shell assets");
			cache.addAll(assets);
		})
	);
});

// Activation event: Clean up old caches
self.addEventListener("activate", (event) => {
	console.log("Service worker activated");
	event.waitUntil(
		caches.keys().then((keys) => {
			console.log(keys);
			return Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						return caches.delete(key);
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
