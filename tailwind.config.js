/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(180, 29%, 50%)",
          100: " hsl(180, 31%, 95%)",
          200: "hsl(180, 52%, 96%)",
          800: "hsl(180, 8%, 52%)",
          900: "hsl(180, 14%, 20%)",
        },
      },
    },
  },
  plugins: [],
};
