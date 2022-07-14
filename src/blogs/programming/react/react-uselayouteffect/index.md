---
title: ReatJS - What is useLayoutEffect hook in react
date: 2022-07-14
author: Hatim
category: programming
published: true
keywords: useLayoutEffect,hook,react,reactjs,useEffect,difference,hooks,state,components
description: In this tutorial we are going to learn what is useLayoutEffect hook and how it is difference from useEffect hook
thumbnail: ./steve-johnson-6sB8gMRlEAU-unsplash.jpg
---

# ReatJS - What is useLayoutEffect hook in react

React is a well-known and rapidly developing JavaScript library in the web development industry. React is now an excellent alternative for developing interactive, modern real-world applications due to its ease of use and data-fetching capabilities. Hooks, a new feature in React V16.7, gives additional benefits such as providing hot reloading and leveraging functional components with ease.

Hooks are functions that allow you to use state and many other React features without having to write ES6 class components. The useLayoutEffect Hook functions similarly to the useEffect Hook. In this tutorial, we'll go over the hook API reference using the useLayoutEffect example.

Let's get started!

## What is useLayoutEffect hook in react ?

The useLayoutEffect hook functions similarly to the useEffect hook, except instead of functioning asynchronously like the useEffect hook, it fires synchronously when all DOM loading is complete. This is important for synchronously re-rendering the DOM as well as reading the DOM's layout. To avoid preventing the page from loading, we should always use the useEffect hook.

In terms of scheduling, this operates similarly to **componentDidMount** and **componentDidUpdate**. Your function is executed immediately after the DOM has been modified, but before the browser has had a chance to "paint" those changes (the user does not see the updates until the browser has been repainted).

**Syntax:**

```jsx
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(()=>{
    //Do something
    return ()=>{
      //Do some cleanup here
    }
  },[dependencies])
  return (
    <div>
      <!--- HTML HERE -->
    </div>
  );
}

export default App;


```

The useLayoutEffect hook in React takes two arguments. The first argument is an effect function, while the second argument is an array of dependents. In most cases, the first argument, effect, is either undefined or returns a cleanup function.

As demonstrated in the above function signature, both **useEffect** and **useLayoutEffect** accept an effect function and an array of dependencies as arguments and return either an unknown or a cleanup function.

## What is difference between useEffect hook and useLayoutEffect hook in react ?

The time when the routines are invoked differs between useEffect and useLayoutEffect. It's useful to know that component re-rendering goes through the following steps to understand when the hooks are called. Assume we're using the useEffect hook in our app.

1. The user interacts with the app. Assume the user presses a button.

2. Changes in component state

3. The DOM has been altered.

4. On the screen, changes are painted.

5. If `useEffect` dependencies have changed, the cleanup method is used to clean up effects from earlier renders.

6. After cleanup, the `useEffect` hook is called.

**Note: It should be noted that the cleanup function is not executed when a component is rendered for the first time because there is no effect to clean up.**

The `useEffect` hook and `useLayoutEffect` hook differ in the order in which they are invoked. After the DOM has been painted, the `useEffect` hook is called. In contrast, the `useLayoutEffect` hook is called synchronously before any modifications are made to the screen. The methods stated above for `useEffect` implementation can be adjusted as indicated below for `useLayoutEffect`.

1. The user interacts with the app. Assume the user presses a button.

2. Changes in component state

3. The DOM has been altered.

4. If the useLayoutEffect dependencies have changed, the cleanup method is called to clean up the effects from the previous render.

5. After cleanup, the useLayoutEffect hook is called.

6. On the screen, changes are painted.

The above explanation suggests that most of the time you don't need to `useLayoutEffect`.

## When to use useLayoutEffect hook in react app

When is it appropriate to `useLayoutEffect` instead? You'll recognise it when you see it. figuratively ;)

If your component flickers when its state is altered - for example, if it renders in a partially-ready state first and then instantly re-renders in its final state - that's a solid indication that it's time to replace `useLayoutEffect`.

This is true if your upgrade is a two-step (or multi-step) process. Do you wish to "batch" several updates before redrawing the screen? `useLayoutEffect` instead.

I think of `useLayoutEffect` as a method to get a little additional work done before React updates the DOM. "Hey, you're already making some modifications; could you please include this one as well?" Awesome.

## One Case where you can use useLayoutEffect in react

One case you might use **useLayoutEffect** instead of **useEffect** is if you are update a value like `ref` and you want to make sure it's up to date before running any other code.

As an example:

```jsx
import { useLayoutEffect, useRef } from "react";
import style from "./App.module.css";

function App() {
  const inputRef = useRef();
  const inputGroupRef = useRef();

  useLayoutEffect(() => {
    // This will load old style first because it render first

    const { current } = inputRef;

    const handleFocus = () => inputGroupRef.current.classList.add(style.active);

    current.addEventListener("focus", handleFocus);

    return () => {
      current.removeEventListener("focus", handleFocus);
    };
  });

  return (
    <div className={style.container}>
      <div ref={inputGroupRef} className={style.inputGroup}>
        <label className={style.lable}> Type Someting </label>
        <input ref={inputRef} className={style.input} type="text" />
      </div>
    </div>
  );
}

export default App;
```

## Conclusion

To control the output of a React component, you'll almost always want to utilise the **useEffect** and **useState** hooks.

However, in other circumstances, updates must be made directly to a DOM node.

In case you need to, follow these 2 rule of thumbs:

1. If you need to handle attention, text selection, activate imperative animations, or integrate third-party libraries, utilise **useRef**.

2. When you need to use useRef, use the **useLayoutEffect**.
