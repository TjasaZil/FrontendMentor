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
        "profile-dark-cyan": "hsl(185, 75%, 39%)",
        "profile-very-dark-blue": "hsl(229, 23%, 23%)",
        "profile-dark-grayish-blue": "hsl(227, 10%, 46%)",
        "profile-dark-gray": "hsl(0, 0%, 59%)",
        "product-dark-cyan": "hsl(158, 36%, 37%)",
        "product-cream": "hsl(30, 38%, 92%)",
        "product-very-dark-blue": "hsl(212, 21%, 14%)",
        "product-dark-grayish-blue": "hsl(228, 12%, 48%)",
        "interactive-orange": "hsl(25, 97%, 53%)",
        "interactive-light-grey": "hsl(217, 12%, 63%)",
        "interactive-medium-grey": "hsl(216, 12%, 54%)",
        "interactive-dark-blue": "hsl(213, 19%, 18%)",
        "interactive-very-dark-blue": "hsl(216, 12%, 8%)",
      },
      width: {
        "profile-mobile-container-width": "326px",
        "profile-desktop-container-width": "350px",
        "profile-mobile-profile-width": "100px",
      },
      height: {
        "profile-mobile-container-height": "374px",

        "profile-mobile-container-background-height": "140px",
        "profile-mobile-profile-height": "100px",
      },
      backgroundImage: {
        "profile-container-bg":
          "url('./assets/ProfileCardComponent/bg-pattern-card.svg')",
        "profile-circle-up-bg":
          "url('./assets/ProfileCardComponent/bg-pattern-top.svg')",
        "profile-circle-bottom-bg":
          "url('./assets/ProfileCardComponent/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
};
