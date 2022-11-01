/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        //main
        mobilem: "375px",
        mobilel: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopl: "1440px",
        "4kay": "2560px",
      },
      colors: {
        "nft-soft-blue": "hsl(215, 51%, 70%)",
        "nft-cyan": "hsl(178, 100%, 50%)",
        "nft-main-bg": "hsl(217, 54%, 11%)",
        "nft-card-bg": "hsl(216, 50%, 16%)",
        "nft-line": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
