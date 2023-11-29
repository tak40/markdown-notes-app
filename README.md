# Scrimba React Basics: Markdown Notes App

## Overview
This project is a Markdown Notes App built with React, as part of Scrimba's React Basics course. It demonstrates key React concepts and provides a functional platform for creating and managing markdown notes.

## Important Notes
- **React Version**: The app is developed using React version 17. This is due to compatibility issues with one of the libraries, `react-mde`, which is not supported beyond React 17. The app is intended for learning purposes.

## Table of Contents
1. [Understanding the Rendering Process and File Connections](#understanding-the-rendering-process-and-file-connections)
2. [Guidelines for Understanding React Codebase](#guidelines-for-understanding-react-codebase)
3. [Sync Notes with localStorage](#sync-notes-with-localstorage)
4. [Lazy State Initialization](#lazy-state-initialization)
5. [Add Note Summary Titles](#add-note-summary-titles)
6. [Move Modified Notes to the Top of the List](#move-modified-notes-to-the-top-of-the-list)
7. [Delete Notes](#delete-notes)

### Understanding the Rendering Process and File Connections

#### Overview
The Markdown Notes App starts with `index.js` as the entry point, which is responsible for rendering the `App` component into the DOM. The `App` component acts as the orchestrator, managing the application's state and logic, and includes the child components `Editor` and `Sidebar`.

#### Rendering Process
- **`index.js`**: The entry point of the application. It mounts the `App` component to the root DOM node in the HTML using `ReactDOM.render(<App />, document.getElementById("root"))`.
- **`App` Component**: Manages the application's state and logic. It renders child components `Editor` and `Sidebar` as part of its output (JSX).
- **Child Components**: `Editor` and `Sidebar` are responsible for defining their own UI. They receive data and callback functions as props from `App`.

#### React’s Role
React oversees the rendering process, translating the JSX from `App` (including `Sidebar` and `Editor`) into actual DOM elements. This integrated UI is displayed in the web browser.

### Guidelines for Understanding React Codebase

When approaching a React codebase, especially for the first time, it's important to have a systematic approach. Here are some general guidelines to help you understand the structure and functionality of React components:

1. **Component Structure and JSX**: Begin by examining the JSX layout to grasp the component's structure. Look for how child components are nested and integrated.
   - **Component Layout**: Identify the layout and arrangement of elements within the JSX.
   - **Child Components**: Note any child components and how they are incorporated into the JSX.

2. **State and Props Analysis**: Understand the state variables - what dynamic data they represent, their initial values, and how they're used in the component. Also, observe how props are passed and utilized.
   - **State Variables**: Review any state variables declared (e.g., with `useState`) and their roles in the component.
   - **Props Usage**: Examine how props are received from parent components and passed to child components.

3. **Functionality and Event Handling**: Focus on the functions within the component. These might include event handlers, state update logic, and other behavior-defining code.
   - **Event Handlers**: Identify functions that handle user interactions (e.g., clicks, form submissions).
   - **State Updates**: Pay attention to how and when the state is updated in response to events or user actions.

This approach offers a structured pathway to analyze and comprehend React components, setting a strong foundation for exploring specific components in the application.


### Sync Notes with localStorage

![Using localStorage](/public/localStorage.png)

- Resource:
[Understanding `localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

`localStorage` is a way to store information on the user's computer. Unlike data stored in variables that disappear when you close your app, `localStorage` keeps the data even after closing the browser. This is how we use it:

- **Value Constraints**: The `localStorage` only accepts strings as values. Therefore, if we want to store objects or arrays, we need to convert them into a JSON string using `JSON.stringify`. When retrieving the data, we convert it back to a JavaScript object or array with `JSON.parse`.

- **Storing Items**: To store data, we use `localStorage.setItem("key", value)`. It's important to understand that `localStorage` works with key-value pairs:
  - The "key" is a unique identifier for the data we want to store.
  - The "value" is the data we want to store, which must be a string.

    ```javascript
    // Storing an object as a string
    const notesObject = { ... };
    localStorage.setItem("notes", JSON.stringify(notesObject));
    ```

- **Retrieving Items**: To retrieve data, we use `localStorage.getItem("key")`. This method returns the data as a string, which we can then convert back to its original format using `JSON.parse` if necessary.

    ```javascript
   // Retrieving the object from localStorage
   // Since we stored it as a string, we know we need to parse it back into an object
   const storedNotes = localStorage.getItem("notes");

   // If 'storedNotes' is truthy, it means we have retrieved our notes data as a string
   // We then parse it to convert back to an object (or array if that's what you stored)
   // If 'storedNotes' is null (falsy), it means no data was found for "notes", 
   // so we default to an empty array (or another suitable default state)
   const notes = storedNotes ? JSON.parse(storedNotes) : [];
    ```

When implementing `localStorage` in a React app, we use the `useEffect` hook to manage side effects:

1. **Store Item**: We use `useEffect` to listen for changes in our state and update `localStorage` accordingly. The dependency array `[notes]` tells React to run the effect only when `notes` changes.

    ```javascript
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    ```

2. **Get Item**: We retrieve and initialize our state with the stored data when the component mounts. If there's no stored item, we default to an empty array `[]`.

    ```javascript
    const [notes, setNotes] = React.useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );
    ```

This setup ensures our notes are saved across browser sessions and are retrieved when the app loads.

#### Lazy Initialization of State

In React, `useState` allows for lazy initialization, where the initial state is only set on the initial render of the component. This prevents expensive operations from being run on every render. 

For instance, when we retrieve notes from `localStorage`, we only want to do this once when the component mounts:

```javascript
const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
);
```

In this code:

- `JSON.parse(localStorage.getItem("notes"))` is the potentially expensive operation (e.g., accessing `localStorage` and parsing JSON).
- Wrapping this operation in a function `() => ...` ensures it's only called when the component mounts.
- If `localStorage` returns `null`, indicating no saved notes, we default to an empty array [].

This pattern is especially useful when the initial state depends on computations such as parsing JSON from `localStorage` or fetching data from an API. It improves performance by avoiding unnecessary work on re-renders.

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
