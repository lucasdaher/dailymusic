/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        malibu: {
          50: "#effaff",
          100: "#dff4ff",
          200: "#b8ebff",
          300: "#78dcff",
          400: "#32cbff",
          500: "#06b5f1",
          600: "#0091ce",
          700: "#0074a7",
          800: "#02618a",
          900: "#085172",
          950: "#06334b",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        title: "-0.2175rem",
        desc: "-0.0975rem",
      },
    },
  },
  plugins: [],
};
