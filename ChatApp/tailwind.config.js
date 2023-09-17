/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#171b1d",
        "secondary-color": "#0a0e0f",
        "sent-message-color": "#48a6c3",
        "coming-message-color": "#0a0e0f",
        "text-color": "#6e7172",
      },
    },
  },
  plugins: [],
};
