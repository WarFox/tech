---
layout: post
title: "Java :: Count the number of times a method is called"
date: 2013-03-27T00:04:00+05:30
categories:
 - Java
---

## How to find how many times a method is used?

A general answer to this question would be something like this:

## Static variable

``` java
public class MyClass {

    static int count = 0;

    public void myMethod() {
        count++;
    }
}
```

Using `static int` would seem a perfect solution. Static will share the instance variable `count` among all instances of MyClass.
However, problem occurs in a multi threaded environment, as the count incrementation is not synchronised.

## Multi-threaded

``` java
package com.deepumohan.tech.methodinvocationcount;
public class MyClass {

    static int count = 0;

    public void myMethod() {

        synchronized(this) {
            count++;
        }
    }
}
```

Now this works perfect in a multi-threaded environment.

## Thread safe atomic class

Java provides a better option to use thread-safe increments through Atomic classes available in `java.util.concurrent.atomic` packag.

``` java
package com.deepumohan.tech.methodinvocationcount;
import java.util.concurrent.atomic.AtomicInteger;
public class MyClass {

    AtomicInteger atomicInteger = new AtomicInteger(0);

    public int getMethodInvocationCount() {
        return atomicInteger.incrementAndGet();
    }
}
```

Here is a good read about `AtomicInteger vs static int`: [Java - using AtomicInteger vs Static int] [1]

[1]: http://goo.gl/zSwHk "Java - using AtomicInteger vs Static int"
