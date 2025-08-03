// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	site: "https://bedlinger.at",

	i18n: {
		locales: ["en", "de"],
		defaultLocale: "de",
	},

	integrations: [
		sitemap(),
		icon({
			iconDir: "src/assets/icons",
		}),
	],

	adapter: node({
		mode: "standalone",
	}),
});
