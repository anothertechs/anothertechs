---
title: Python Data Structure Cheat Sheet 2021
category: programming
author: Hatim
published: true
date: 2021-07-23
keyword: python,data,structure,cheat,sheet,2021,list,code,snippet,2021,tuple,tuples,set,set,dictionary,remove,del,delete,adding,accessing,index,managing,organizing,storing,union,intersection,difference,symatric,operation
description: In this tutorial we will lean about Built-In data structure of python which are used to organizing,managing and storing data in different structures.
thumbnail: ./python-data-structure.jpg
---

# Python Built-In Data Structure Cheat Sheet 2021

Python programming language is widely utilized in various industries, including website development, software engineering, artificial intelligence, data science, and many others. However, data plays a critical part in making all of these things possible, which implies that this data must be kept efficiently and accessed on time. To accomplish this, we employ a technique known as Data Structures. So, in this essay, we will go through the concepts in Python Data Structures.

## What is Data Structure?

The most important thing is organizing, managing, and storing data to allow for easy access and efficient alterations.
Moreover, Data Structures allow us to organize data so that we can store collections of data, relate them, and conduct actions on them as needed.

So, using Data Structures, we can structure our data in a way that allows it to be retrieved rapidly.
However, one Data Structure is insufficient to accommodate all use case scenarios.
As a result, we have a variety of data structures that can be utilized for various purposes.

## Need Of Data Structure

Consider the following scenario: you wish to look for a specific document in a file explorer that contains hundreds of documents.
One method is to go through each document one by one in a sequential fashion, however this is a time-consuming process.

Another option is to go directly to the location where it is kept or where the linked papers are located.

Yes, your operating system (OS) performs this through the use of indexing and hashtables, which are a type of data structure.
Even if there are many files, this decreases the amount of time required to search.
This is why Data Structures are essential.

Now that we know what are data structure let's dive into built-in data structure in python

## Types of Data Structure in Python

![Type of Data Structure](./type-of-python-ds.webp)

Python provides implicit support for Data Structures, which allow you to store and access data.
The data structures involved in this are as follows:

**List, Tuple, Dictionary, and Set are all types of data structures**.

Not only that, but Python also allows users to construct their Data Structures, giving them complete control over their functioning.
The most well-known Data Structures are

**Stack, Queue, Tree, Linked List, Graph, Hash Map, and so on**.

All of the data structures listed above are also accessible in other programming languages such as C, Rust, Javascript,C++, etc.
We have limited our discussion in this post to Python's Built-In Data Structures.

## Built-in Data Structure in Python

As the name implies, the Data Structures in this category are built into Python, making programming more accessible and allowing programmers and data scientists to achieve faster solutions.
Python has the following built-in data structures:

- **List**
- **Dictionaries**
- **Sets**
- **Tuples**

### List

Lists are the most basic data structures, and they are used to store data of various types in a sequential order.
The Interpreter allocated addresses to each element of the list called an Index during list creation.
The index value in the list begins at 0 and continues until the last entry; this index is known as the positive index.
We also have negative indexing in Lists, which starts at -1 and allows us to access entries from the last to the first.
Following are the code snippet to grasp lists and their features better.

#### Creating List

```python
foo = [] # Empty list
foo = ["Another Techs",52,53,786,110] # creating list
print(foo)
```

#### Accessing element in list

```python
foo = ["Another Techs",52,53,786,110]

# Access all elements
print(foo)

# Access element at certain location say 2nd index
print(foo[2])

# Access element from 1-3
print(foo[1:3])

# Access element in reverse order
print(foo[::-1])
```

#### Adding Element

To add elements to the list, we can utilize the `append()` ,`insert` and `extend()` functions.

1. The `append()` function joins all of the components provided to it as a single element.

2. `insert()` method is use to add element at particular index.

3. The `extend()` function adds the elements to the list one at a time.

```python
foo = ["Another Techs",52,53,786,110]

# Adding elment in list
foo.append(72.3)

# Adding another list
foo.append(["python","Cpp",11])
print(foo)

# Adding another list element one by one in
foo.extend(["Data Science","AI","python3"])

# Add element at particular index
foo.insert(2,"Javascript")
```

#### Deleting Element

`del` keyword is used to delete element at specific index:

```python
foo = ["Another Techs",52,53,786,110]

del foo[4]
print(foo)
```

#### Remove specific element from the list

To remove specific element by it's value from the list we use `remove()` method:

```python
foo = ["Another Techs",52,53,786,110,'cpp']
foo.remove('cpp')

print(foo)
```

#### Remove all the element from the list

`clear()` method is use to remove all the elements from the list:

```python
foo = ["Another Techs",52,53,786,110]

foo.clear()

print(foo) #empty list

```

#### Sort List

The `sort()` function is used to sort the list.
However, while sorting a list, you must ensure that the data types of all the components are the same because we cannot compare two distinct data types, however, you can use a combination of float and int data types:

```python
foo = [111,1,43,23,52,53,786,110]
foo.sort()

print(foo)

```

### Tuples

Tuples are similar to lists, except that once data is inserted into a tuple, it cannot be modified in any way, i.e. it is immutable.
The lone exception is when the data inside the tuple is mutable (e.g., a list), in which case we can update the tuple data.
Let us now use the following examples to grasp tuples and their functionalities better.

#### Creating Tuples

```python
foo = () # Empty tuple
foo = ("Another Techs",52,53,786,110) # creating tuple

print(type(foo))
print(foo)
```

#### Accessing element in tuple

```python
foo = ("Another Techs",52,53,786,110)

# Access all elements
print(foo)

# Access element at certain location say 2nd index
print(foo[2])

# Access element from 1-3
print(foo[1:3])

# Access element in reverse order
print(foo[::-1])
```

#### Return the index of element in Tuple

To discover the index of a particular element in a tuple, we can use the `index()` function, which accepts the element's value as an input and returns the index.
If we pass an element that does not exist in the tuple to the `index()` function, we get a `ValueError`.

```python
foo = ("Another Techs",52,53,786,110)

print(foo.index(53))
```

#### Adding new elements to the Tuple

We can use the ‘+' operator to append the values in an existing tuple by passing it another tuple to be appended to:

```python
foo = ("Another Techs",52,53,786,110)
foo = foo + ("Python")

print(foo)

# Adding more than one element
foo = foo + ("Cpp","AI")
print(foo)
```

### Dictionaries

**Data is stored in the form of key-value pairs in dictionaries.**

Imagine a phone directory with hundreds of thousands of names of different people and their accompanying phone numbers to comprehend dictionary data structure.
Here are the constant values (such as Name) and Phone Numbers, which we referred to as the keys.

Furthermore, the numerous names and phone numbers are the keys' values.
If we want to get the values of the keys, we will need all of the names and phone numbers.

So a key-value pair is precisely that.
Moreover, Dictionaries are used to hold this structure in Python.

#### Creating a Dictionary

```python
foo = {} # Empty dict
print(foo)

foo = {11:'Another Techs',12:'Python',13:'Data Science'}
print(foo)
```

#### Returning the value of particular key in python dictinory

We can only use the keys to access the components of a dictionary. We can use the get() function or just give the key values to retrieve the information.

```python
foo = {11:'Another Techs',12:'Python',13:'Data Science'}
print(foo.get(12)) # Output: Python

```

#### Changing or Adding Key Value Pairs

The **keys** can be used to change the values of the dictionary. As a result, we must first access the key and then alter the value. We just add another key-value pair to add values.

```python
foo = {11:'Another Techs',12:'Python',13:'Data Science'}

# Changing Value
foo[12] = 'Cpp'
print(foo)

# Adding Key Value Pair
foo[14] = "Python"
print(foo)
```

#### Returning sets of the elements in a dictionary

```python
foo = {11:'Another Techs',12:'Python',13:'Data Science'}
print(foo.items())
```

#### Getting All the keys present in dictionary

```python
foo = {11:'Another Techs',12:'Python',13:'Data Science'}
print(foo.keys())
```

#### Getting All the values of keys present in dictionary

```python
foo = {11:'Another Techs',12:'Python',13:'Data Science'}
print(foo.values())
```

#### Deleting Key-Value Pair

**Delete Values**: We can use the `pop()` function to delete values, which returns the deleted value.

**Deleting a Key-Value Pair**: To recover the key-value pair, use the `popitem()` method, which provides a key and value tuple.

**Clearing the Entire Dictionary**: The `clear()` function can be used to clean the entire dictionary.

```python
foo = {11:'Another Techs',12:'Python',13:'Data Science'}
# Pop the specified element
bar = foo.pop('12')
print('Value:', bar)
print('Dictionary:', foo)

# Pop the complete key-value pair
bar = foo.popitem()
print('Key, value pair:', bar)
print('Dictionary', foo)

# Make the dictionary Empty
foo.clear()
print('Empty Dictionary', foo)

```

### Sets

A set is a data type consisting of a collection of unordered elements and is a mutable (changeable) collection of unique components, i.e. there are no duplicate copies of elements.
Unlike arrays, which are type-specific, elements in sets can be of any data type.
Because the values of a set are unindexed, indexing operations cannot be performed on them.

#### Creating Sets

```python
foo = {'Another Techs','Python','Data Science'}
print(type(foo))
print(foo)
```

#### Accessing Element of sets

**Note**:_We cannot access the set elements using the index numbers because, as previously stated, set elements are not indexed.
As a result, if we wish to access the items of a set, we can use a for loop to do so._

```python
foo = {'Another Techs','Python','Data Science'}

for elem in foo:
    print(elem)
```

#### Adding Element

Using one of the two functions, we may add the new elements to a set.

- The `add()` function is used to add a single element.

- To adding multiple element use the `update()` function.

```python
# Adding Elements
foo = {'Another Techs','Python','Data Science'}
foo.add('Javascript')

print(foo)

# Adding more than one element
foo.update('Cpp',"AI","pandas","numpy")
print(foo)
```

#### Remove element from a set:

```python
foo = {'Another Techs','Python','Data Science'}
foo.re­mov­e("Python­") # If "Python" is not present, raises a KeyErorr

# using Discard method
foo.di­sca­rd(­"­Python") # Removes the element, if present

#Remove every element from the set
foo.cl­ear()
```

#### Operation on sets

```python
foo = {'Another Techs','Python','Data Science'}
bar = {'Another Techs','Python','cpp','javascript','Data Science'}

## Union of sets
foo | mySet2

# Inters­ection of two sets
foo & bar

# Difference of two sets
foo - bar

# Symmetric difference of two sets
foo ^ bar
```

### References

- https://docs.python.org/3/tutorial/datastructures.html
- https://www.tutorialspoint.com/python/python_data_structure.html
- https://whataftercollege.com/python-programming/built-in-data-structures-in-python/
- https://www.slideshare.net/EdurekaIN/what-are-data-structures-in-python-list-dictionary-tuple-explained-edureka

