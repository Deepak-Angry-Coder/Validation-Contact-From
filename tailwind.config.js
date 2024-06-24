/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Red: "hsl(0, 66%, 54%)",
        Grey: {
          500: "hsl(186, 15%, 59%)",
          900: "hsl(187, 24%, 22%)",
        },
        Green: {
          200: "hsl(148, 38%, 91%)",
          600: "hsl(169, 82%, 27%)",
        },
      },
    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
    },
    plugins: [],
  },
};
