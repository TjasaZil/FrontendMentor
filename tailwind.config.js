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
        "qr-light-gray": "hsl(212, 45%, 89%)",
        "qr-grayish-blue": "hsl(220, 15%, 55%)",
        "qr-dark-blue": "hsl(218, 44%, 22%)",
        "ping-blue": "hsl(223, 87%, 63%)",
        "ping-pale-blue": "hsl(223, 100%, 88%)",
        "ping-light-red": "hsl(354, 100%, 66%)",
        "ping-gray": "hsl(0, 0%, 59%)",
        "ping-very-dark-blue": "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
