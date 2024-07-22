import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#F60",
        darkBlue: "#0B1B35",
        customGray: "#8A898E",
        lightBlue: "#1E0E62",
        customLightGray: "#15143966"
      },
      fontSize: {
        normal: "1.125rem"
      }
    },
      
  },
  plugins: [],
};
export default config;
