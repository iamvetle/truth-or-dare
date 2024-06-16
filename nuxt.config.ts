// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/test-utils/module",
		"@vueuse/motion/nuxt",
		"@vite-pwa/nuxt",
	],
	pwa: {
		minify: false,
		injectManifest: {
			maximumFileSizeToCacheInBytes: undefined,
		},
		registerType: "autoUpdate",
		manifest: {
			name: "Truth or dare",
			short_name: "Truth or dare",
			id: "/",
			description: "Play truth or dare",
			start_url: "/",
			scope: "/",
			display: "standalone",
			display_override: ["window-controls-overlay"],
			theme_color: "#ffffff",
			background_color: "#ffffff",
			icons: [
				{
					src: "android-chrome-192x192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: "android-chrome-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
			],
		},
		manifestFilename: "manifest.json",
		workbox: {
			navigateFallback: "/",
			// ! THIS IS WHAT MADE IT WORK -> including svg, png and ico in "globPatterns"
			globPatterns: ["**/*.{js,wasm,css,html,svg,png,ico}"],
		},
		devOptions: { enabled: true, type: "module" },
	},

	// nitro: {
	// 	prerender: {
	// 		// Have to specify this (npx nuxi generate) or manifest.json will become a html file..
	// 		ignore: ["/manifest.json"],
	// 	},
	// },
	ssr: false,
});
