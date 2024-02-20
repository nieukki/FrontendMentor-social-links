/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
      },
      colors: {
        greenColor: "hsl(75, 94%, 57%)",
        whiteColor: "hsl(0, 0%, 100%)",
        greyColor: "hsl(0, 0%, 20%)",
        darkGreyColor: "hsl(0, 0%, 12%)",
        offBlackColor: "hsl(0, 0%, 8%)",
      },
      screens: {
        ds: "1440px",
      },
    },
  },
  plugins: [],
};
