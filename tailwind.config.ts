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
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
