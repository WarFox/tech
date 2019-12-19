---
layout: post
title: How is hash map implemented?
date: 2013-01-26T20:22:00+05:30
categories: Java
tags:
  - java
---

## What is Hash map?

Hash map is a data structure that allows you to store a key and a value pair. A hash map will always have unique set of keys. In Java hash map allows to have `null` keys and `null` values.

It is a commonly used data structure in many programming languages. For example, C# has [Dictionary](<https://msdn.microsoft.com/en-us/library/xfhwa508(v=vs.110).aspx>) and Python has [dict()](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) which are implementations oh Map.

## How is a hash map implemented?

A hash map works on the principle of `Hashing`. This allows to efficiently add, delete and lookup a particular key in a collection.

A **Hash function**, usually returns an integer for a given key. `hashCode()` method in the `Object` class is an example of hash function. The integer value returned by hash function is called `hash value` or simply `hash`. **Hash function** must produce same _hash value_ for two equal keys.

## Hash Collision

You may be already aware that, multiple keys can return same hash value. This is called `hash collision`.

For example, the Strings "Aa" and "BB" have same hashCode in the default implementation.

```
"Aa".hashCode() = 2112

"BB".hashCode() = 2112
```

An efficient `HashMap` should deal with hash collisions efficiently. Here efficiency refers to both space and time efficiency.

Hash collision is handled by creating **buckets** for each hash values. Every entry that collides with that hash, goes into that bucket.

For each (key, value) pair a corresponding `Entry` is created. This entry is mapped to a hash value of the key.

Hash function returns a direct index, from which an Entry can be accessed, directly. This makes it easier to find an `Entry` in the hashmap.

**Update** Java 8 uses Treemap after a threshold

> Java 8 HashSet is backed by an instance of HashMap
> https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html

A hash function that returns a unique hash number is called a universal hash function. In practice, it is extremely hard to assign unique numbers to objects. The later is always possible only if you know (or approximate) the number of objects to be processed.

Thus, we say that our hash function has the following properties

- It always returns a number for an object.
- Two equal objects will always have the same number
- Two unequal objects not always have different numbers

## References

- [https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html][1]
- [https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html][2]
- [https://www.geeksforgeeks.org/internal-working-of-hashmap-java/][3]
- [http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/util/HashMap.java][4]

[1]: https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html "HashMap (Java Platform SE 8 )"
[2]: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html "Concept Of Hashing"
[3]: https://www.geeksforgeeks.org/internal-working-of-hashmap-java/ "Internal Working of HashMap in Java"
[4]: http://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/util/HashMap.java "HashMap source code from Java 8"
