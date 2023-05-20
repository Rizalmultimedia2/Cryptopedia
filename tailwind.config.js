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
    extend: {
      colors: {
        "primary-1": "#29BF9F",
        "primary-2": "#6BC9B5",
        "primary-3": "#9CDBCE",
        "primary-4": "#CDEDE6",
        "primary-dark": "#24a88c",
        "gray-1": "#F8F9FA",
        "gray-2": "#E9ECEF",
        "gray-3": "#DEE2E6",
        "gray-4": "#CED4DA",
        "gray-5": "#ADB5BD",
        "gray-6": "#6C757D",
        "gray-7": "#495057",
        "gray-8": "#343A40",
        "gray-9": "#212529",
        "black-1": "#E6E6E6",
        "black-2": "#CCCCCC",
        "black-4": "#999999",
        "black-8": "#333333",
        "black-6": "#666666",
        "black-10": "#000000",
        "red-1": "#E96E70",
        "red-2": "#EF9294",
        "red-3": "#F4B7B8",
        "red-4": "#F9DADB",
        "yellow-1": "#FACA21",
        "yellow-2": "#FBD859",
        "yellow-3": "#FDE590",
        "yellow-4": "#FDF2C7",
        "light-color": "#FFFFFF",
      },
      container: {
        center: true,
      },
      boxShadow: {
        "shadows-1": "0px 7px 15px 0px #00000008",
      },
    },
  },
  plugins: [],
};
