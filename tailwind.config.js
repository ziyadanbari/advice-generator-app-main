/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCyan: "hsla(var(--light-cyan), <alpha-value>)",
        neonGreen: "hsla(var(--neon-green), <alpha-value>)",
        grayishBlue: "hsla(var(--grayish-blue), <alpha-value>)",
        darkGrayishBlue: "hsla(var(--dark-grayish-blue), <alpha-value>)",
        darkBlue: "hsla(var(--dark-blue), <alpha-value>)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
