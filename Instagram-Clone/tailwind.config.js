/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./srcs/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      margin: {
        96: "24rem",
        128: "32rem",
      },
      width: {
        96: "24rem",
        128: "32rem",
        "1/1": "100%",
      },
    },
  },
  plugins: [],
};
