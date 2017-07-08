---
layout: post
title: How is hash map implemented?
date: 2013-01-25T22:12:00+05:30
categories: Java
tags:
 - java
---

## What is Hash map? ##

Hash map is a data structure that allows you to store a key and a value pair. A hashmap will always have unique set of keys. In Java hashmap allows to have `null` keys and `null` values.

It is a commonly used data structure in Java.

## How is a hash map implemented? ##

A hash map works on the principle of `Hashing`. This allows to efficiently add, delete and lookup a particular key in a collection.

A **Hash function**, returns an integer for a given value. `hashCode()` method in the `Object` class is an example of hash function. The integer value returned by hash function is called *hash value* or simply **hash**.

For each (key, value) pair a corresponding `Entry` is created. This entry is mapped to a hash value of the key.

Hashing or hash function returns a number for the given key. Multiple keys may return same hash number. This is called `hash collision`. For each `hash`, a bucket of entries is created.

Hash function returns a direct index, from which an Entry can be accessed, directly. This makes it easier to

"Aa".hashCode

"BB".hashCode

Java 8 uses Treemap after a threshold

> Java 8 HashSet is backed by an instance of HashMap
> https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html

A hash function that returns a unique hash number is called a universal hash function. In practice it is extremely hard to assign unique numbers to objects. The later is always possible only if you know (or approximate) the number of objects to be processed.

Thus, we say that our hash function has the following properties

it always returns a number for an object.
two equal objects will always have the same number
two unequal objects not always have different numbers

## Implement your own hashmap ##

```java
public class Map<K, V> {
    add(K key, V value);
    delete(K key);
    V get(K key);
}
```


```java
public class MyHashMap<K,V> implements Map<K,V> {

}
```

## References

* [https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html][1]
* [https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html][2]

[1]: https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html "HashMap (Java Platform SE 8 )"
[2]: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html "Concept Of Hashing"
