import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        tight: '1.1',
        relaxed: '1.4',
      },
      letterSpacing: {
        tight: '-1.5px',
        normal: '0px',
      },
      colors: {
        primary: {
          blue: '#B8D2E7',
          green: '#4ECA71',
        },
        darkGray: '#101518',
        gray: '#666666',
        lightGray: '#55626C',
        'dark-green': '#82B440',
        'medium-gray': '#56626C',
        'custom-blue': '#214562',
        softGray: '#F6F6F6',
        darkBlue: '#214562',
        grayLight: '#dddddd',
      },
    },
  },
  plugins: [],
};
export default config;
