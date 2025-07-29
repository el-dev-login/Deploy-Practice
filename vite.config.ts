/*
 * Vite Configuration - Modern build tool and development server setup
 *
 * This file configures Vite for building and serving the React application.
 * It's needed to define build settings, plugins (like React support), path aliases, and CSS processing.
 * Essential for development server, hot module replacement, and optimized production builds.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@/components": path.resolve(__dirname, "./components"),
      "@/styles": path.resolve(__dirname, "./styles"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["*"],
  },
});
