const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/space.avif')",
      },
    },
    screens: {
      'phone': {'max':'768px'},
      'tablet': {'min':'769px','max':'1280px'},
    },
  },
  plugins: [ flowbite.plugin(),],
};
