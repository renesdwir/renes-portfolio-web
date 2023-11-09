/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        cstmgreen: "#0AFF9D",
        cstmblack: "#111111",
      },
      boxShadow: {
        cstm: "0px 0px 200px 150px rgba(255,255,255,0.1);",
      },
    },
  },
  plugins: [],
};
