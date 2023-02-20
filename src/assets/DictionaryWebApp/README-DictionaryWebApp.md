# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [FrontendMentor](https://www.frontendmentor.io/solutions/dictionary-web-app-JVxqcsDTuc)
- Live Site URL: [Vercel live site](https://frontendmentor-steel.vercel.app/dictionary-web-app)

## My process

I used TDD. I wrote up one test at a time and made it pass before I focused on the next part of the challenge. After everything was tested and every component was in the appropriate place I styled the project accordingly with Tailwindcss and added Alpine.js Intersect animations.

### Built with

- [VUE.js](https://cli.vuejs.org/) - Javascript framework - used because I really like working with it and enjoy the workflow
- [Tailwindcss](https://tailwindcss.com/) - CSS framework - used because I like working with it and it enables me to style components quickly, meaning I can use my time for other things that I find more important (like testing).
- [Alpine Intersect Plugin](https://alpinejs.dev/plugins/intersect)- used for animation
- [Jest](https://jestjs.io/) - used for unit testing Vuejs components
- [Vue test utils](https://test-utils.vuejs.org/installation/)
- [Vue testing library](https://testing-library.com/docs/vue-testing-library/intro)
- [DOM testing library](https://testing-library.com/docs/dom-testing-library/install)
- [User event testing library](https://testing-library.com/docs/user-event/install)
- [Jest dom testing library](https://testing-library.com/docs/ecosystem-jest-dom)
