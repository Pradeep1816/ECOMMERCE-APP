/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      transitionDelay: {
        2000: "2000ms",
      },
    },
    color: {
      indigo: "#4338ca",
    },
  },
  plugins: [],
};
