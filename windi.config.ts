import { defineConfig } from "windicss/helpers";

export default defineConfig({
  includes: ["./src", "**/*.vue", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6000",
        "primary-darken": "#b34300",

        secondary: "#3d3f3c",
        "secondary-light": "#505250",

        gray: "#9ca3af",
        "gray-light": "#e1e3e7",

        error: "#cc0000",
      },
    },
  },
  shortcuts: {
    section:
      "flex flex-col h-auto md:(h-screen) pt-32 p px-8 pb-8 md:(px-20 pb-20)",

    "rounded-icon": "cursor-pointer p-2 rounded-full",
  },
});
