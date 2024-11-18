/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },

      },
      colors: {
        'ink-black': "#1B1924",
        'midnight-black': "#02000c",
        'primary-gray': "#d9d9d9",
        'dark-gray': "#636363",
        'navy-blue': "#7575751A",
        'light-black': "#0d0c17",
        'btn-bg': '#2A70F429',
        'ink-blue': '#2a70f4',
        'gray-border': '#FFFFFF26',
        'light-gray': '#9a999f',
        'dark-blue': '#085bf7',
        'gray': '#8a8f97',
        'charcoal-black': '#0F0E18',
        'off-white': '#FFFFFF1A',
        'circle-border': '#3D3B45',
      },

      fontSize: {
        'custom2xl': "21px",
        'custom3xl': "26px",
        'custom4xl': "42px",
        'custom5xl': "64px",
        'custom6xl': "66px",
        'custom7xl': "85px",
      },

      backgroundImage: {
        'ready': "url('./assets/images/webp/ready-bg-image.webp')",
        'timeline-one': "url('./assets/images/webp/timeline-one-image.webp')",
        'timeline-two': "url('./assets/images/webp/timeline-two-image.webp')",
        'timeline-three': "url('./assets/images/webp/timeline-three-image.webp')",
        'timeline-four': "url('./assets/images/webp/timeline-four-image.webp')",
        'timeline-five': "url('./assets/images/webp/timeline-five-image.webp')",
        'timeline-six': "url('./assets/images/webp/timeline-six-image.webp')",
        'timeline-seven': "url('./assets/images/webp/timeline-seven-image.webp')",
        'timeline-eight': "url('./assets/images/webp/timeline-eight-image.webp')",
        'hero': "url('./assets/images/webp/hero-bg-image.webp')",
        // 'timeline': "url('./assets/images/webp/timeline-line.webp')",
      },

      lineHeight: {
        'custom-base': "19.2px",
        'custom-lg': "22.4px",
        'custom-xl': "25.2px",
        'custom-5xl': "58.8px",
        'custom-6xl': "63.6px",
        'custom-7xl': "79.2px",
        'custom-8xl': "89.6px",
        'custom-9xl': "102px",
      },

    },
  },
  plugins: [],
}

