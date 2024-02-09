# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

- Solution URL: [Solution URL](https://github.com/lahanhelith/results-summary-frontend-mentor)
- Live Site URL: [Live Site URL](https://resonant-hotteok-60dd78.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Javascript

### What I learned

I learned and improved how to use flexbox to center a div horizontally and vertically in CSS. This code snippet is all you need to center a single div horizontally and vertically on the body using flexbox.

```css
body{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
```

Another thing to note is transitions cant be applied to CSS gradients as the linear-gradient function creates an image. However there is a workaround which involves using the css ::before selector and create a layer that changes opacity. I'll link a resource to how it works in the "Useful resources" section.

### Useful resources

- [Gradient Transitions with CSS - Jeremy Wood](https://levelup.gitconnected.com/gradient-transitions-with-css-f7004b89892) - This article by Jeremy Wood explains how you can apply gradient transitions in CSS.

## Author

- Frontend Mentor - [@lahanhelith](https://www.frontendmentor.io/profile/lahanhelith)
