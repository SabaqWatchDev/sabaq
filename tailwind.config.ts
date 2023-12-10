import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#7ba43e",
            foreground: "#fffff0",
            50: '#f5f9ec',
            100: '#e8f1d6',
            200: '#d3e5b1',
            300: '#b5d383',
            400: '#99bf5c',
            500: '#7ba43e',
            600: '#5e822e',
            700: '#4a6427',
            800: '#3d5024',
            900: '#354522',
          }
        }
      }
    }
  })]
}
export default config
