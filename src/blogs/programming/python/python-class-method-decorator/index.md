---
title: Everything you need to know about Python Class Method Decorator
date: 2021-11-12
published: true
category: programming
keywords: classmethod,python,@classmethod,class,method,decorators,example,meaning,what,when,use
description: With the help of examples, we'll learn how to use the Python classmethod() function.
thumbnail: ./Python-@classmethod-decorator.jpg
---

# Python Class Method Decorator

In Python, decorators are a simple and elegant way to add functionality to functions and methods. The use of decorators can be done in a variety of ways. Decorators can be used with methods declared in a class, which is a handy use-case. The functionality of the defined method can be extended by decorating methods in the classes we design. We could, for example, do a data integrity check or save the method call's result to a file. What we choose to do is entirely up to us. Method decorators merely give us the ability to enhance functionality in a stylish manner.

## What is classmethod ?

A classmethod is one that is attached to a class rather than its object. It, like staticmethod, does not necessitate the construction of a class instance.

The following is the distinction between a static method and a class method:

1. The static method has no knowledge of the class and only deals with the parameters.

2. Because the class method's parameter is always the class itself, it works with it.

## When Should You Use a Python Decorator?

When Should You Use a Python Decorator?
When you need to change the behaviour of a function without changing the function itself, you'll use a decorator.
When you want to add logging, test performance, do caching, validate rights, and so on, here are some nice examples.

When you need to run the same code on many functions, you can utilise one. This prevents you from creating redundant code.

## Characteristics of Decorators

- Declares a method for a class.

- The first parameter must be `cls`, which is a class attribute accessor.

- Only the class attributes, not the instance attributes, are accessible via the class method.

- ClassName can be used to invoke the class method.

- It has the ability to return a class object.

The `@classmethod` decorator is used to declare a class method that may be called using `ClassName.MethodName()`.
A class object can also be used to call the class method.

The `classmethod()` function can be replaced with the `@classmethod()` function. Because the `@classmethod` decorator is only a syntactic sugar, it is advised to use it instead of the function.

## classmethods() Syntax

Syntax of `classmethod` methods is:

```python

classmethod(func) ## un-Pythonic way

#or

@classmethod
def func(cls,args...)

```

## classmethod() Parameters

`classmethod()` method takes one argument:

- **function** - Function that need to be converted into class method.

## classmethod() Return Value

It returns a class method for a giver function.

## Example

Let's have a look at an example of a class that deals with dates (this will be our boilerplate):

```python
class Date(object):

    def __init__(self, day=0, month=0, year=0):
        self.day = day
        self.month = month
        self.year = year
```

This class might certainly be used to hold information about specific dates.

Here we have `__init__`, a typical initializer of Python class instances, which receives arguments as a typical `instancemethod`, having the first non-optional argument (`self`) that holds a reference to a newly created instance.

Let's say we want to construct a lot of Date class instances with date information encoded as a string with the format 'dd-mm-yyyy' from an external source.
Assume we need to perform this in several locations across our project's source code.

So here's what we need to do:

1. Parse a string to get the day, month, and year as three integer variables or a three-item tuple that includes those variables.

2. Pass those variables to the initialization method to create Date.

which look's something like this:

```python
day, month, year = map(int, string_date.split('-'))
date1 = Date(day, month, year)
```

C++ can implement such a functionality with overloading for this reason, but Python lacks this overloading. We can instead use classmethod. Let's create another "constructor".

```python
    @classmethod
    def from_string(cls, date_as_string):
        day, month, year = map(int, date_as_string.split('-'))
        date1 = cls(day, month, year)
        return date1

date_obj = Date.from_str("2021-11-12")
```

Let's take a closer look at the above implementation and see what benefits we have:

- We've made date string parsing reusable by putting it all in one place.

- Encapsulation works well in this case (if you think that you could implement string parsing as a single function elsewhere, this solution fits the OOP paradigm far better).

**`cls` is not a class instance, but rather an object that holds the class itself. It's cool because if we inherit our Date class, all of our children will inherit `from_string() method.**

### Refrences

- https://www.educba.com/python-classmethod-decorator/
- https://stackoverflow.com/questions/12179271/meaning-of-classmethod-and-staticmethod-for-beginner
