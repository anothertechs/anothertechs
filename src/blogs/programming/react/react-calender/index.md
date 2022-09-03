# React Calender

In your react web app, managing and modifying dates is a common task.  You may do things like add events or create reminders. You can do this by including a calendar in your web application. 

In this article, we'll look at how to make calendars in ReactJS. This calendar can be used in your to-do list, e-commerce site, ticket booking site, and a variety of other apps.


## What is react-calender 

React-Calendar is a simple calendar library that allows you to select days, months, years, and even decades.  For more complex use cases, it also supports date range selection and a variety of languages.

Because it is not dependent on [`moment.js`](https://momentjs.com/), React-Calendar is a very flexible and versatile library that can be used in almost any application. 

### Feature of react-calender

- Select from days, months, years, or even decades.

- Allows for the selection of a range

- It has the ability to support almost any language.

- Not dependent on `moment.js`

- JavaScript is needed. 

## Getting started with React Calender

Before implimenting calender let us first create an project and install some dependancies

### Creating a react project

To create an react project enter following in command in your built-in terminal:

```sh

npm create-react-app react-calender-example

```

This may take a few minutes; wait for the development environment to be installed. 

### Installing react calender in your react project

To add react calender in your react project run the following command:

```sh

npm install react-calender

```

[Click Here](https://github.com/wojtekmaj/react-calendar) to see the list of all props which can be used with react-calender.


## React Calender Example

**Boiler Plate Code**

```jsx
// app.js

import React,{useState} from 'react';
import Calendar from 'react-calendar';

const App = () => {

 const [date,setDate] = useState(new Date());

  return (
    <div>
        <div>
            <h1> Anoter Techs </h1>
            <h4> React Calendar </h4>
        </div>
        <div>
            <div>
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div>
                Selected Date: {date.toString()}
            </div>
        </div>
    </div>
  );
};

export default App;

```

As in the above component you can see we have imported `Calender` component from `react-calender`.
We have also created a state variable `date` which will hold todays date. We have passed this state to to `value` props of `Calender` component.

The `onChange` props of calender component take `setDate` function which will change the `date` whenever use click on certain date.

[React Calender](./calender.png)

## Styling React Calender

```jsx
import React,{useState} from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const App = () => {

 const [date,setDate] = useState(new Date());

  return (
    <div>
        <div>
            <h1> Anoter Techs </h1>
            <h4> React Calender </h4>
        </div>
            <div>
            <div>
                <Calendar onChange={setDate} value={date}/>
            </div>
        </div>
    </div>
  );
};


export default App;


```
