// tailwind.config.mjs
import formsPlugin from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any other paths that may contain Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin],
}
