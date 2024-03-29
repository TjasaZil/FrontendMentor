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
        "order-pale-blue": "hsl(225, 100%, 94%)",
        "order-bright-blue": "hsl(245, 75%, 52%)",
        "order-very-pale-blue": "hsl(225, 100%, 98%)",
        "order-desaturated-blue": "hsl(224, 23%, 55%)",
        "order-dark-blue": "hsl(223, 47%, 23%)",
        "price-cyan": "hsl(179, 62%, 43%)",
        "price-bright-yellow": "hsl(71, 73%, 54%)",
        "price-light-gray": "hsl(204, 43%, 93%)",
        "price-grayish-blue": "hsl(218, 22%, 67%)",
        "advice-light-cyan": "hsl(193, 38%, 86%)",
        "advice-neon-green": "hsl(150, 100%, 66%)",
        "advice-grayish-blue": "hsl(217, 19%, 38%)",
        "advice-dark-grayish-blue": "hsl(217, 19%, 24%)",
        "advice-dark-blue": "hsl(218, 23%, 16%)",
        "news-soft-orange": "hsl(35, 77%, 62%)",
        "news-soft-red": "hsl(5, 85%, 63%)",
        "news-off-white": "hsl(36, 100%, 99%)",
        "news-grayish-blue": "hsl(233, 8%, 79%)",
        "news-dark-grayish-blue": "hsl(236, 13%, 42%)",
        "news-very-dark-blue": "hsl(240, 100%, 5%)",
        "bootcamp-dark-blue": "hsl(240, 38%, 20%)",
        "bootcamp-grayish-blue": "hsl(240, 18%, 77%)",
        "meet-teal": "#4d96a9",
        "meet-purple": "#855fb1",
        "meet-dark": "#28283d",
        "meet-gray": "#87879d",
        "meet-light-teal": "#8fe3f9",
        "meet-light-purple": "#d9b8ff",
        "meet-light": "#fafafa",
        "github-light-blue": "#0079ff",
        "github-light-gray": "#697c9a",
        "github-light-bluish": "#4b6a9b",
        "github-light-black": "#2b3442",
        "github-light-shell": "#f6f8ff",
        "github-light-white": "#fefefe",
        "github-dark-white": "#ffffff",
        "github-dark-black": "#141d2f",
        "github-dark-blue": "#1e2a47",
        "results-summary-red": "hsl(0, 100%, 67%)",
        "results-summary-red-bg": "hsla(0, 100%, 67%, 0.1)",
        "results-summary-orange": "hsl(39, 100%, 56%)",
        "results-summary-orange-bg": "hsla(39, 100%, 56%, 0.1)",
        "results-summary-teal": "hsl(166, 100%, 37%)",
        "results-summary-teal-bg": "hsla(166, 100%, 37%, 0.1)",
        "results-summary-blue": "hsl(234, 85%, 45%)",
        "results-summary-blue-bg": "hsla(234, 85%, 45%, 0.1)",
        "results-summary-slate-blue": "hsl(252, 100%, 67%)",
        "results-summary-royal-blue": "hsl(241, 81%, 54%)",
        "results-summary-violet-blue": "hsla(256, 72%, 46%, 1)",
        "results-summary-perian-blue": "hsla(241, 72%, 46%, 0.5)",
        "results-summary-perian-blue-bg": "hsla(241, 72%, 46%, 0.2)",
        "results-summary-pale-blue": "hsl(221, 100%, 96%)",
        "results-summary-light-lavender": "hsl(241, 100%, 89%)",
        "results-summary-dark-blue": "hsl(224, 30%, 27%)",
        "dictionary-darkest": "#050505",
        "dictionary-middle-dark": "#1f1f1f",
        "dictionary-middle-darkish": "#2d2d2d",
        "dictionary-light-dark": "#3a3a3a",
        "dictionary-dark-gray": "#757575",
        "dictionary-middle-gray": "#e9e9e9",
        "dictionary-light-gray": "#f4f4f4",
        "dictionary-white": "#ffffff",
        "dictionary-violet": "#a445ed",
        "dictionary-red": "#ff5252",
        "ip-very-dark-gray": "hsl(0, 0%, 17%)",
        "ip-dark-gray": "hsl(0, 0%, 59%)",
        "password-green": "#a4ffaf",
        "password-red": "#f64a4a",
        "password-orange": "#fb7c58",
        "password-yellow": "#f8cd65",
        "password-dark": "#24232c",
        "password-gray": "#817d92",
        "password-grayish": "#e6e5ea",
        "password-black": "#18171f",
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
