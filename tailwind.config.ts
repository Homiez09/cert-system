import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#03A96B",
        secondary: "#52bee5",
        success: "#02BC77",
        hover: "#02BC77",
      },
      animation: {
        navbarUp: 'hiddenNavbarUp 0.3s ease-in-out',
        navbarDown: 'hiddenNavbarDown 0.3s ease-in-out',
        navbarMobileMenu: 'showMobileMenu 0.3s ease-in-out',
        navbarMobileMenuHidden: 'hiddenMobileMenu 0.3s ease-in-out'
      },
      keyframes: {
        hiddenNavbarUp: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
        hiddenNavbarDown: {
          '0%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        showMobileMenu: {
          '0%': {
            transform: 'translateY(-30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            'opacity': '1',
          },
        },
        hiddenMobileMenu: {
          '0%': {
            transform: 'translateY(0)',
            height: '100vh',
            background: '#06011F',
          },
          '100%': {
            transform: 'translateY(-40%)',
            height: '20vh',
            background: 'transparent'
          },
        },
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
