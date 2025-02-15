/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-100": "#fff",
        "black-10": "rgba(28, 28, 28, 0.1)",
        "black-100": "#1c1c1c",
        "black-40": "rgba(28, 28, 28, 0.4)",
        "primary-purple": "#e5ecf6",
        "primary-blue": "#e3f5ff",
        midnightblue: "#01187d",
        gainsboro: "#e0e0e0",
        darkslategray: "#2f2f2f",
        gray: {
          "100": "#fafafb",
          "200": "#767676",
        },
        black: "#000",
        "black-5": "rgba(28, 28, 28, 0.05)",
        "black-20": "rgba(28, 28, 28, 0.2)",
      },
      spacing: {
        boundvariablesdata2: "20px",
        boundvariablesdata3: "8px",
        boundvariablesdata5: "4px",
        boundvariablesdata7: "24px",
        boundvariablesdata8: "40px",
        boundvariablesdata9: "16px",
        boundvariablesdata10: "28px",
        "size-20": "20px",
        "size-28": "28px",
        boundvariablesdata12: "12px",
      },
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
        regular: "Inter",
        inter: ['Inter', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif']
      },
      borderRadius: {
        "61xl": "80px",
        mini: "15px",
        "6xs": "7px",
        boundvariablesdata: "24px",
        boundvariablesdata4: "8px",
        "radius-8": "8px",
        boundvariablesdata6: "80px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      md: {
        max: "960px",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
