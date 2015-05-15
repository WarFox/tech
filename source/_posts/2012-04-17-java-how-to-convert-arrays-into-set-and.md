---
layout: post
title: "Java:: How to convert Arrays to List and Set (Collection) in Java"
date: 2012-04-17T18:47:00+05:30
categories:
 - Java
---

 
Converting a Java array into <code>Set</code> or <code>List</code> is a very common requirement in most Java projects. Java collections frameworks supports this in the following way. 
 
<h2>Required Imports</h2><pre class="brush: java">
import java.util.List;
import java.util.Set;
import java.util.Arrays;
```
  
 
<h2>Convert Array to List</h2><pre class="brush: java">
List newList = Arrays.asList(yourArray);
```
  
 
<h2>Convert Array to Set</h2><pre class="brush: java">
Set&lt;T&gt; newSet = new HashSet&lt;T&gt;(Arrays.asList(yourArray));
```
<em>Note the use of generics</em>
 
<h2>Difference between List and Set</h2>List is an ordered sequence of elements whereas Set is a distinct list of elements which is unordered. </br>Read more here:</br><ul><li><a href="http://docs.oracle.com/javase/1.5.0/docs/api/java/util/List.html">List</a></li><li><a href="http://docs.oracle.com/javase/1.5.0/docs/api/java/util/Set.html">Set</a></li></ul>
 

