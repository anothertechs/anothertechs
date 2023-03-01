---
title: React Router - A Simple Introduction For Beginners
date: 2023-03-01
category: programming
author: Hatim
description: React Router is a powerful routing library for React that lets you add dynamic, server-side rendering, and code-splitting to your React apps. In this tutorial, we'll introduce React Router and show you how to use it to
thumbnail: ./react-route.jpg
keywords: React Router, dynamic routing, server-side rendering, code- splitting, introduce React Router
---
# React Router -  A Simple Introduction For Beginners

## What is React Router?
React Router is a popular routing library for React applications. It enables developers to manage the application's URLs and their corresponding components in a declarative and efficient way.

React Router provides a set of components such as `<Router>`, `<Switch>`, `<Route>`, and `<Link>` that allow developers to define the routing configuration of their application. By using these components, developers can create routes for different URLs and map them to specific components.

React Router also supports advanced features such as nested routes, route parameters, and route guards, which enable developers to build complex and dynamic applications with ease.

React Router is widely used in modern web development and is supported by a large community of developers. It is also compatible with other popular libraries and frameworks such as Redux and Next.js.

## Why use React Router?

Here are some of the reasons why you might want to use React Router in your application:

1. **Declarative routing**: React Router allows developers to define the routing configuration of their application in a declarative way using components. This makes it easier to understand and manage the routing logic of the application.

2. **Dynamic routing**: React Router supports dynamic routing, which means that developers can define routes with parameters that can be passed as props to the component. This enables developers to create more flexible and dynamic applications.

3. **Nested routing**: React Router supports nested routing, which means that developers can define routes that are nested within other routes. This enables developers to create more complex and hierarchical applications.

4. **Route guards**: React Router supports route guards, which are functions that can be used to restrict access to certain routes based on certain conditions. This enables developers to create more secure and protected applications.

5. **Browser history**: React Router uses the HTML5 History API to manage the browser history, which means that developers can create applications with client-side routing that can be bookmarked and shared.


##  Getting Started with React Router

To get started with React Router, you'll need to install it as a dependency in your project using npm or yarn. Here are the steps to install and set up React Router in your project:

1. Install React Router using npm or yarn:

```bash
npm install react-router-dom

```
Using yarn:

```bash
yarn add react-router-dom

```

2. Import the necessary components from React Router in your main application file:

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

```

3. Wrap your application inside the `<Router>` component to enable routing:

```js
<Router>
  // Your application code goes here
</Router>

```
4. Define your routes using the `<Route>` component:
```js
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Switch>

```
In this example, we've defined three routes: one for the home page, one for the about page, and one for the contact page. Each route specifies a path and a component to render when that path is matched.

5. Add links to your routes using the `<Link>` component:

```js
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

```
Above we've added links to the `home`, `about`, and `contact` pages using the `<Link>` component. When a user clicks on one of these links, the router will navigate to the corresponding route and render the associated component.

And that's it! With these steps, you should have a basic understanding of how to set up and use React Router in your application. Of course, there are many more advanced features and configuration options available in React Router, but this should be enough to get you started.

### Route in React
A basic `Route` in React Router is a component that renders a particular UI component when the URL matches a certain pattern. Here's an example of a basic `Route` component:

```js
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

```

In this example, we're using two `Route` components to define two different routes. The first route, defined using `exact path="/"`, will render the Home component when the URL is exactly `/`. The second route, defined using `path="/about"`, will render the About component when the URL matches `/about`.

Here's what the `Home` and `About` components might look like:

```js

function Home() {
  return <h1>Welcome to the Home page!</h1>;
}

function About() {
  return <h1>About us</h1>;
}

```
When a user navigates to the root URL, they will see the `Home` component rendered on the page. When they navigate to `/about`, they will see the About component.

__Note that the order in which you define your `Route` components is important. React Router will match the first route that matches the URL, so you should define your more specific routes before your less specific ones.__

 For example, if you have a route for `/about/:id` that matches any `id` parameter value, and you define it before a route for `/about`, the `/about` route will never be matched, because the `/about/:id` route will match first.

That's a basic overview of how to use Route components in React Router. With Route, you can define as many routes as you need to create a complex routing configuration for your React application.


### Route Parameters
Route parameters are dynamic parts of a URL that can be used to pass data to a component. They are defined in a `Route`  path by prefixing the parameter name with a colon (`:`), like this:

```js
<Route path="/users/:id" component={UserDetails} />
```
In this example, we've defined a `Route` that matches any URL that starts with `/users/` and has an id parameter. When a URL like `/users/123` is matched, the UserDetails component will be rendered with the `id` parameter passed as a prop.

To access the route parameters in the component, you can use the `useParams` hook provided by React Router:

```js
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  // Use the id parameter to fetch user data from an API or elsewhere
  return <h1>User details for user {id}</h1>;
}

```

In this example, we're using the `useParams` hook to extract the `id` parameter from the URL and render it in the component. You can use the route parameters to fetch data from an API or perform any other action that requires access to the parameter value.

Route parameters can also be optional or have default values. To make a parameter optional,

```js
<Route path="/users/:id?" component={UserDetails} />

```

The `id` parameter is optional, so the route will match both `/users` and `/users/123`.

To set a default value for a parameter, you can use the `:` syntax with a fallback value, like this:

```js
<Route path="/users/:id/:tab?" component={UserDetails} />
```

In the above code, the tab parameter is optional and has a default value of profile, so the route will match both `/users/123` and `/users/123/settings`.


### Route  Queries 

Route queries, also known as query parameters, are a way to pass additional information to a component through the URL. They are represented by key-value pairs that are appended to the end of a URL with a question mark (`?`) separator, like this:

```js
/users?id=123&name=john

```

Above, we have two query parameters, `id` and `name`, with values `123` and `john`, respectively.

In React Router, you can define a `Route` that includes query parameters like this:

```js
<Route path="/users" component={UserList} />

```

In the `UserList` component, you can access the query parameters using the `useLocation` and `useParams` hooks provided by React Router. The `useLocation` hook returns an object with information about the current URL, including any query parameters, while the `useParams` hook returns an object with any route parameters that may be present.

Here's an example of how to use these hooks to access query parameters in the `UserList` component:

```js
import { useLocation, useParams } from 'react-router-dom';

function UserList() {
  const { id } = useParams(); // Get any route parameters
  const { search } = useLocation(); // Get the query string
  const query = new URLSearchParams(search); // Convert the query string to a usable object
  const name = query.get('name'); // Get the value of the 'name' parameter
  return (
    <div>
      <h1>Users List</h1>
      <p>Showing users with id={id} and name={name}</p>
      {/* Render a list of users */}
    </div>
  );
}

```

We're using the `useParams` hook to get any route parameters, and the `useLocation` hook to get the current URL, including any query parameters. We're then converting the query string to a usable object using the `URLSearchParams` constructor, and using the get method to retrieve the value of the `name` parameter.

Query parameters can be used to create more flexible routing configurations that allow users to filter or sort data dynamically, without requiring a full page reload. They can also be used to pass information between components in a more lightweight way than using props.


###  Protected Routes
Protected routes are routes that require authentication before a user can access them. They are a common pattern in web applications, especially those that involve sensitive user data or functionality.

In React Router, you can create a protected route by creating a higher-order component that wraps the component you want to protect. This higher-order component can then check whether the user is authenticated, and either render the protected component or redirect the user to a login page.

Here's an example of how to create a protected route in React Router:

```js
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

```
In the above example, we've created a `PrivateRoute` component that takes a `component` prop, which is the component that we want to protect, as well as an `authenticated` prop, which is a boolean that indicates whether the user is authenticated.

The `PrivateRoute` component renders a `Route` component with the same props that were passed to it, but with a `render` prop that checks the value of `authenticated`. If the user is authenticated, it renders the protected component by passing the `props` object to it. If the user is not authenticated, it redirects the user to a login page, passing the current location as a state object so that the user can be redirected back to the original page after logging in.

To use the `PrivateRoute` component, you can simply replace the `Route` component in your routing configuration with the `PrivateRoute` component, like this:

```js
<PrivateRoute path="/dashboard" component={Dashboard} authenticated={isLoggedIn} />
```

In this example, we're using the `PrivateRoute` component to protect the `/dashboard` route, and passing the `isLoggedIn` boolean as the `authenticated` prop.

### 404 Pages
A 404 page is a standard HTTP response code that indicates that the server could not find the requested resource. In the context of a web application, this usually means that the user has requested a page that does not exist.

In React Router, you can create a 404 page by defining a catch-all route at the end of your routing configuration that matches any path that has not been matched by a previous route. This catch-all route can then render a custom 404 component.

Here's an example of how to create a 404 page in React Router:
```js
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        {/* Define your other routes here */}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you're looking for could not be found.</p>
    </div>
  );
}

```
Above, we're defining a catch-all route with the path `*` that matches any path that has not been matched by a previous route. This route renders a `NotFound` component that displays a custom 404 page.

By defining a catch-all route at the end of your routing configuration, you ensure that any requests for pages that do not exist will be handled by your custom 404 page instead of returning the default server response. This can help to improve the user experience and make your application feel more polished and professional.

## Wraping Up

React Router is a powerful library that allows you to create dynamic, client-side routing in your React applications. With React Router, you can create complex routing configurations that handle nested routes, route parameters, queries, and more.

In this conversation, we've covered some of the basics of React Router, including how to create basic routes, how to handle route parameters and queries, how to create protected routes, and how to create a custom 404 page.

React Router is a key tool for building robust, scalable web applications with React, and by mastering its features and patterns, you can create engaging and dynamic user experiences that keep users coming back."w
