/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundColor: {
      //   app: "#0E100F",
      // },
      // textColor: {
      //   app: "#FFFCE2",
      // },
      colors: {
        sfondo: "#0E100F",
        testo: "#FFFCE2",
        "doc-bg": "#0D100F",
        verde: "#1AE348",
        sky: "#17BAE2",
        pink: "#FEC5FC",
        purple: "#9E95FF",
        orange: "#F9840A",
      },
    },
  },
};
