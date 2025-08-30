/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#ff6f3d" }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: { color: theme('colors.brand.DEFAULT') }
          }
        }
      })
    }
  },
  plugins: []
};
