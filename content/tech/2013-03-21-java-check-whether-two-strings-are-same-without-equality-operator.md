---
layout: post
title: "Java :: Check whether two Strings are equal without using the equality(==) operator or the equals() method"
date: 2013-03-21T15:40:00+05:30
categories: Java
---

You can exploit the uniqueness property of `Set Collection` to accomplish this.

Observe the following code:

``` java
/**
 * Returns true if the given strings are equal. else returns false.
 *
 */
public boolean isEquals(String one, String two) {
    Set<String> temp = new HashSet<String>();
    temp.add(one);
    temp.add(two);
    return (temp.size() == 1);
}
```

The size of set will be greater than 1 only if the given strings are different.
The <code>add</code> method will internally use <code>equals()</code> and
<code>hashCode()</code> methods.
