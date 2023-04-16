/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      teal: "#008080",
      // munsell: "#0792a5",
      parchment: "#f0ead2",
      test: "red",
    },
    margin: {
      "705px": "905px",
    },
  },
  plugins: [],
};
