# Scrimba React Basics: Markdown Notes App

## Overview
This project is a Markdown Notes App built with React, as part of Scrimba's React Basics course. It demonstrates key React concepts and provides a functional platform for creating and managing markdown notes.

## Important Notes
- **React Version**: The app is developed using React version 17. This is due to compatibility issues with one of the libraries, `react-mde`, which is not supported beyond React 17. The app is intended for learning purposes.

## Table of Contents
1. [Understanding the Codebase](#understanding-the-codebase)
2. [Sync Notes with localStorage](#sync-notes-with-localstorage)
3. [Add Note Summary Titles](#add-note-summary-titles)
4. [Move Modified Notes to the Top of the List](#move-modified-notes-to-the-top-of-the-list)
5. [Delete Notes](#delete-notes)

### Understanding the Codebase

#### Overview
The Markdown Notes App is structured with `index.js` as the entry point, which plays a pivotal role in initiating the rendering of the entire application. The key components in this application are `App`, `Editor`, and `Sidebar`.

#### Rendering Process
- **`index.js`**: This is the entry point of the application. It is responsible for rendering the `App` component into the DOM. It calls `ReactDOM.render(<App />, document.getElementById("root"))`, which mounts the `App` component to the root DOM node in the HTML.

- **`App` Component**: `App` acts as the orchestrator for the entire application. It manages the application's state and logic, and includes child components `Editor` and `Sidebar` in its output (JSX). `App` is responsible for gathering all the necessary information and components, preparing them to be rendered onto the screen.

- **Child Components (`Editor` and `Sidebar`)**: These components are responsible for defining their own UI and local behavior. They receive data and callback functions as props from the `App` component. Their primary role is to define what their part of the UI should look like, based on the props they receive.

- **React’s Role**: React oversees the rendering process. It takes the JSX from `App` (which includes `Sidebar` and `Editor`) and translates it into actual DOM elements. This process integrates the UI definitions of all components into a cohesive whole, displayed in the web browser.

#### Summary
In summary, the Markdown Notes App starts with `index.js` rendering `App`, which in turn organizes and includes `Editor` and `Sidebar`. Each component has its role, with `Editor` and `Sidebar` focusing on their own UI based on props from `App`. React then renders this entire structure into the DOM, resulting in the visible interface of the app.


### Sync Notes with localStorage
(Details about how notes are synchronized with localStorage for persistence.)

### Add Note Summary Titles
(Description of how summary titles are added to the notes.)

### Move Modified Notes to the Top of the List
(Explanation of the logic used to move modified notes to the top of the list.)

### Delete Notes
(Description of the functionality that allows users to delete notes.)




# Scrimba React Starter Template

Warning: Vite enforces using jsx syntax inside jsx/tsx files, so it will complain about that. Solution: rename `.js` files to `.jsx` :)

Quick start:

```
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
