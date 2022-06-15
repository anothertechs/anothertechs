---
title: ReactJS - React Conditional Rendering
category: programming
date: 2022-06-15
author: Hatim
keywords: react,conditional,rendering,components,jsx,if,else,switch,ternary,statement
description: In this article we will see how to render components based on certain conditions
published: true
thumbnail: ./conditionalrendering.jpg
---

# ReactJS - React Conditional Rendering

It is a frequent use case when designing an application in React or any other JS library/framework to show or hide items based on certain situations. It might be as basic as showing a popup when a user hits a certain button and hiding it when the user clicks the cross symbol. Consider authentication: while (s)he is logged in, we make a 'log out' button visible, and when (s)he is not, we make a 'Login/Sign up' form visible. Conditional rendering is the process of executing logic or rendering UI elements based on particular situations.

The most common approaches to perform conditional rendering in React are covered in this tutorial.

## Conditional Rendering with `if..else` in React

React's conditional rendering operates in the same way that JavaScript's conditions do.
If you use JavaScript operators like if, React will adjust the UI to match. With our condition, we use an if and return the element to be rendered.

Let's us consider this two components:

```jsx
// LoginIn Component

function LoggedIn() {
  return (
    <div>
      <h1>Welcome </h1>
      <Button>Log out </Button>
    </div>
  );
}
```

```jsx
//LogOut Component

function LoggedOut() {
  return (
    <div>
      <h1>Sign in, please! </h1>
      <Button>Log out </Button>
    </div>
  );
}
```

Depending on whether a user is logged in or not, we'll construct a `Status` component that shows either of these components. Depending on the value of the `isLogin`, a different greeting is displayed.

```jsx
function Status({ isLogin }) {
  if (isLogin) {
    return <LoggedIn />;
  }
  return <LoggedOut />;
}
```

## Conditional Rendering with Switch Case in React

Using an `if...else` statement, you can conditionally return different markup from a component based on given circumstances, as illustrated earlier.
A `switch` statement may be used to accomplish the same thing, allowing you to specify the markup for several scenarios.

```jsx
function Status({ isLogin }) {
  switch (isLogin) {
  case true:
      return <LoggedIn /> break;

  case false:
      return <LoggedOut /> break;

  default:
      return null;
}
```

When there are more than two alternative values or outcomes, the switch statement method is more practical.

**Keep in mind that you must always use default for the switch case operator in React since a component must always return an element or null.**

Additionally, if a component returns null, it will conceal itself (display nothing). This is a handy technique to toggle component visibility.

## Conditional Rendering with Ternary Operator in React

The only JavaScript operator that takes three operands is the conditional (ternary) operator.
The if statement is frequently replaced with this operator.

`condition ? " Render if True" : "Render if False";`

The operator returns "Render if True" if the condition evaluates to true; otherwise, it returns "Render if False" if the condition evaluates to false.

```jsx
function Status({isLogin}) {
return(
  {

  isLogin ? <LoggedIn /> : <LogdedOut />

  })
}

```

## Conditional Rendering Using Logical `&&` (Short Circuit Evaluation) in React

Short circuit evaluation is a technique for ensuring that no side effects occur when operands in an expression are evaluated. The logical `&&` allows you to declare that an action should be performed only if one of the conditions is met; else, it will be disregarded.

**Warning: Below is an example of code that should be avoided since it is inefficient .**

```jsx
function Status({isLogin}) {
return(

  { isLogin && <LoggedOut /> }
  { !isLogin && <LoggedIn /> }

  )
}

```

Based on the value of `isLogin`, this code would render the appropriate component.
However, because there are better, cleaner techniques to create the same effect, this is not recommended. This usage of short circuit evaluation may become onerous and unintuitive as your application grows.

## Conditional Rendering with Enum in React

When used as a map of key-value pairs in JavaScript, an object can be utilised as an enum.

```js
const ENUMOBJECT = {
  a: "apple",
  b: "ball",
  c: "cat",
};
```

Now let's create an ENUM object from our example above:

```
const ENUMSTATE = {
login: <LoggedIn />,
logout: <LoggedOut />
}

```

Create a function that takes state as an argument and returns components based on that value.
The `Status` function in the example below is self-explanatory.

```jsx
function Status({ state }) {
  return <div> {ENUMSTATE[state]} </div>;
}
```
