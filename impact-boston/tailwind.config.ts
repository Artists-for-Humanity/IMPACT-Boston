// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          "blue": "#5C85A9", 
          "orange": "#F46036",
          "purple": "#191325",
          "black": "#000000",
          "white": "#ffffff", 
          "gray": "#808285",
        },
      },
    },
  },
};

export default config;
