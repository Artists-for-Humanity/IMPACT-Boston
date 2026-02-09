// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          "dark-purple": "#421656", 
          "light-purple": "#6c3789",
          "orange": "#e86834",
          "black": "#0F0F0F",
          'white': '#FFFFFF'
        },
      },
    },
  },
};

export default config;
