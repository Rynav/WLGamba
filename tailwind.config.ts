import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#09e85e",
          "secondary": "#7a28cb",
          "accent": "#00ffff",
          "neutral": "#262626",
          "base-100": "#262626",
          "info": "#4747FF",
          "success": "#09E85E",
          "warning": "#E36374",
          "error": "#d7263d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
