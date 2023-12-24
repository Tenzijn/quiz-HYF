# Quiz Project

## Getting Started with vite build tool

- npm install
- npm run dev
  - host: localhost:3000
- npm run build
  - build: dist

## HOSTING to NETLIFY

[![Netlify Status](https://api.netlify.com/api/v1/badges/f9d280f3-57b3-4a01-b6a7-87aa440e9ed9/deploy-status)](https://app.netlify.com/sites/hyf-quiz/deploys)

[hyf-quiz.netlify.app](https://hyf-quiz.netlify.app/)

# Structure

Let's run through the folders:

```
public
└── assets
└── styles

src
└── pages
└── components
└── utils
└── app.js
└── constants.js
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
  - `assets` this contains images and other files that are used in the website
  - `styles` this contains our css files
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
    it also contains our code that links up our handler code to the DOM.
  - `components` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
  - `app.js` this file our initialisation code. Generally this code should only run once and starts the application
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file
  - `utils` this contains code that is used in multiple places.
