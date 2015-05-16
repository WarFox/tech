---
layout: post
title: "Java:: How to convert Arrays to List and Set (Collection) in Java"
date: 2012-04-17T18:47:00+05:30
categories:
 - Java
---
 
Converting a Java array into `Set` or `List` is a very common requirement in most Java projects. Java collections frameworks supports this in the following way. 
 
## Required Imports

```java
import java.util.List;
import java.util.Set;
import java.util.Arrays;
```
  
## Convert Array to List

```java
List newList = Arrays.asList(yourArray);
```
  
 
## Convert Array to Set
```java
Set<T> newSet = new HashSet<T>(Arrays.asList(yourArray));
```
<em>Note the use of generics</em>
 
## Difference between List and Set

List is an ordered sequence of elements whereas Set is a distinct list of elements which is unordered

Read more here:

* [List](http://docs.oracle.com/javase/1.5.0/docs/api/java/util/List.html)
* [Set](http://docs.oracle.com/javase/1.5.0/docs/api/java/util/Set.html)
