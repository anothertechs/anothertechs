---
title: React Js - useCallback Hook in React
date: 2022-08-25
authour: Hatim
category: programming
keywords: react,usecallback,hook,memo,function,callback,state
description: In this article we will go through useCallback hook and how it help us to optimize our react component
published: true
thumbnail: ./reactuseCallback.jpg
---
# React Js - useCallback Hook in React

It goes without saying that React.js has gained a lot of popularity in recent years.  These days, many of the biggest names on the internet, like Facebook and WhatsApp, prefer using this JavaScript library.

The inclusion of hooks in version 16.8 was one of the primary causes of its increase.  You can use React features without constructing class components by using React hooks.  Developers now use functional components with hooks as their preferred React coding framework. 

We'll delve more into one particular hook in this article, useCallback, because it refers to memoization, a crucial component of functional programming.  You'll be fully aware of the optimal times to apply the useCallback hook's performance-enhancing features.

Before understanding how useCallback Hook works first let us understand what is **Function Equality Checks**.


## Function Equality Checks

Functions can be used in JavaScript just like any other variable.  A function's arguments may be provided to other functions, it may be returned by another function, it may be used as a value for a variable, it may be compared, and so on.  It can, in essence, perform any action that an object can. 

Let's understand this with simple example:

```js

function print(value) {
   console.log(value)
}

const printHello = print("Hello");  
const printWorld = print("World");  

printHello() //output: Hello
printWorld() //output: World


console.log(printHello == printWorld); //output: false

```
The function `printHello` and `printWorld` shares the same thing but they are distinct seperate function object. Therefore comparing themselves evaluate to false.

_Note: In JavaScript fucntion are treated as First Class function_



## useCallback Hook

Similar to [useMemo hook](https://anothertechs.com/programming/react/react-usememo-hook/) which we have studied in our last article useCallback hook returns a memoization value but intead of returning a value this hook return a **callback function**.

_Think of memoization as caching ceratin value so that it does not need to be recalculated.__

In a react application every function inside a component is regenerated when it is re-rendered, so the references to these functions vary between renders.

A memoized instance of the callback will be returned by `useCallback(callback, dependencies)`, and it will only change if one of the dependencies has changed.  **This implies that we can reuse the same function object between renders rather than constructing a new one for each new render.**

The primary and only purpose of the useCallback hook is to prevent needless re-renders in your code, which will speed up and improve the performance of your application.

The **array of dependencies**  and a **function** are both passed as parameters to the useCallback hook.  The callback will only be modified by the useCallback hook if one of the dependencies has changed. It will return a memoized version of the callback.


```jsx

useCallback(() => {
  callBackFunction();
},[dependencies]);

```

An empty dependency array can also be given.  The function will only be run once as a result.  If you don’t give an array, this will return a fresh value on every request.

Now let's understand this with an example:

### Example

**The primary and only purpose of the useCallback hook is to prevent needless re-renders in your code, which will speed up and improve the performance of your application.**

Because inline functions are cheap, there is no need to recreate them for each rendering.  A limited number of inline functions are allowed per component.

However, there are times when you must keep a single instance of a function running in between renderings:



1. an internal component wrapped inside `React.memo()` is capable of accepting a function object as prop.

2. when a hook, such as useEffect(..., [callback]) , depends on another function object.

3. when the function is throttled or debounced, or whenever it has an internal state.

In this case, useCallback(callbackFun, deps) hooks comes in handy because it returns the same function instance across renderings if the dependency values provided by `deps` are the same (aka memoization)


```jsx

import React,{useState,memo} from 'react';

const Todos = memo(({ todos, addTodo }) => {
  console.log("Todo Renders");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});



const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const inc = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo List"]);
  };

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
};


export default App;

```

Now try running this app you and click on "+" button in console you will notice that although we have memoized `<Todos/>` component whenever you click "+" button whole `<Todos/>` component get re-render weather or not `todo` state is changed or not.

This is because of referetial equality, every time a component re-renders, its fucntion get re-created because of this `addTodo` fucntion object changes on every render which causes re-render of `<Todos/>` componenet.


To solve this problem we will be using useCallback Hook:


```jsx

import React,{useState,memo,useCallback} from 'react';


const Todos = memo(({ todos, addTodo }) => {
  console.log("Todo Renders");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});



const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const inc = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo List"]);
  },[todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
};


export default App;


```

Now if you will click on "+" button you will see that `<Todos/>` compoenent will not be rendered it will only get rendered whenever our `todos` state changes which is exactly what we wanted.



## When not to use useCallback Hook

Let's be careful not to overdo it.  The main drawback of useCallback hook is code complexity.  There are several circumstances in which adding useCallback hook is unnecessary, and you must accept function recreation.

The performance cost of using useCallback() is that it has be called every time a component is rendered again.


## Conclusion

As cool as useCallback and useMemo are, keep in mind that they have specific use cases and should not be used to wrap every function.  A dependency on another hook or a prop passed to a memoized component are good indicators that you should use useCallback if the function is computationally complex.

We hope this article helped you understand advanced React functionality and gained confidence in functional programming along the way!
