import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'heading': ['40px', {
        lineHeight: '48px',
      }],
      'button': ['16px', {
        lineHeight: '24px',
      }],
      'footer': ['10px', {
        lineHeight: '15px',
      }],
      'text': ['14px', {
        lineHeight: '20px',
      }],},
    extend: {
      colors: {
        white: "#F5F5F5",
        black: "#171717",
        primary: "#16A34A",
      },
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
