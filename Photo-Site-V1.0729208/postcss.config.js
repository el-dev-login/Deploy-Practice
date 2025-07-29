/*
 * PostCSS Configuration - CSS processing and transformation setup
 * 
 * This file configures PostCSS plugins for processing CSS in the build pipeline.
 * It's needed to enable Tailwind CSS compilation and autoprefixer for browser compatibility.
 * Essential for transforming modern CSS features and utility classes into browser-compatible CSS.
 * Works with Vite during development and build processes to handle CSS transformations.
 */

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}