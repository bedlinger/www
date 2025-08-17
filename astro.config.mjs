// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import node from "@astrojs/node";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	site: "https://bedlinger.at",

	i18n: {
		locales: ["en", "de"],
		defaultLocale: "de",
		routing: {
			prefixDefaultLocale: false,
		},
	},

	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "de",
				locales: {
					de: "de-AT",
					en: "en-GB",
				},
			},
		}),
		icon({
			iconDir: "src/assets/icons",
		}),
		playformCompress(),
	],

	adapter: node({
		mode: "standalone",
	}),
});
