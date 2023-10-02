/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#ff6000",
        "primary-darken": "#b34300",

        secondary: "#3d3f3c",
        "secondary-light": "#505250",

        gray: "#9ca3af",
        "gray-light": "#e1e3e7",
      },
    },
  },

  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".section": {
          display: "flex",
          height: "100vh",
          "flex-direction": "column",
          "padding-top": "8rem",
          "padding-right": "5rem",
          "padding-left": "5rem",
        },
        ".rounded-icon": {
          cursor: "pointer",
          padding: "0.5rem",
          "border-radius": "9999px",
        },
      });
    }),
  ],
};
