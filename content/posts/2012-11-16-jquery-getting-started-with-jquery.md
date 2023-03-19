---
layout: post
title: "jQuery:: Getting started with jQuery"
date: 2012-11-16T21:02:00+05:30

tags:
 - Javascript
 - jQuery
---
This is a beginners guide and information to getting started with [jQuery][1]. As you might know [jQuery][1] is light weight and cross browser, and is a leading JavaScript library. It was created by [John Resig][2], while he was working in Mozilla.
<blockquote cite="https://jquery.com/">[jQuery][1] is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. [jQuery][1] is designed to change the way that you write JavaScript. </blockquote>
####What is JavaScript library?
JavaScript libraries help you write more organised JavaScript code. These libraries are built on top of JavaScript and helps the programmer to write more maintainable cross-browser JavaScript.
####Write less, do more
As it says on the home page, [jQuery][1] helps you to reduce your JavaScript code with clever, short and easy to understand syntax.
####Why do we need [jQuery][1]? (or any other js framework)
In short, for faster development and better maintenance. If you have developed web application, you know the pain for writing vanilla JavaScript and hacking it to work as expected on all available browsers. The code base becomes huge and cluttered, which in turn effects the application maintenance. You could minimize it, by the clever use of JavaScript objects and prototyping. But a new developer may not be able to follow your code, unless it is properly documented and you are trying to re-invent the wheel.
If you are using a js framework like [jQuery][1], then you can be sure that it is properly documented and there is a huge community out there to help you out.
####Other JavaScript libraries?
There are lots of other js frameworks like [Mootools][3], [Dojo][4], <a href="https://prototypejs.org">Prototype</a>, <a href="https://yuilibrary.com/">YUI</a> and many more. Deciding which one to select depends on various factors like the project requirement, resource available, deadline etc.
What I liked about [jQuery][1] is that is easy to get started and get cracking. They say <a href="https://mootools.net">Mootools</a> is great, I found their documentation poor. <a href="https://mootools.net">Mootools</a> is a great choice if you are going to develop a complex application with lots of custom objects in it. [jQuery][1] is more focused on manipulating collections returned by the selectors.
For example <a href="https://jsfiddle.net/">jsFiddle</a> is built on <a href="https://mootools.net">Mootools</a>, building that on [jQuery][1] would have been harder.
####How can [jQuery][1] help?
* Its fast - Test JavaScript framework selectors speed at <a href="https://mootools.net/slickspeed/">slickspeed</a>
* Cross browser - Forget about writing js hacks for IE, same code works everywhere.
* Small size - just 55kb
* Easy animations and CSS3 selectors.
* Makes your REST client simple, with built in ajax support.
* Extremely simple to get started
####Onload event
Most javascript developers use the <code>onload</code> event either in the body tag or window.onload in javascript. But when using [jQuery][1] you don't do it like that.
Instead, you load the [jQuery][1]. file and use <code>$(document).ready();</code> function available. Most [jQuery][1] functions allows callbacks. Callback functions are called up on an event.
``` javascript
$(document).ready(function () {
    alert('loaded');
});
```
This will alert 'loaded', when the document is loaded. Here the callback function is defined as an anonymous JavaScript function, which [jQuery][1] calls on the event of 'document ready'. Read about the difference between onload & document ready <a href="https://stackoverflow.com/questions/4395780/difference-bw-onload-and-document-readyfunction">here</a>.
####Selector
To get started with jQuery you should need an understanding of selectors. Selectors always return us a collection of [jQuery][1] objects, which we can manipulate. We may select an object using its id, class name, tag name or its combinations. The rules are similar to CSS rules. Id is referred using '#', class is referred using '.' and tags are selected using the tag name.
For example an element with id <code>myelement</code> is selected by:
``` javascript
$('#myelement')
```
All elements with class <code>myclass</code> is selected by
``` javascript
$('.myclass')
```
And all <code>p</code> elements can be selected by
``` javascript
$('p')
```
As you have figured out all <code>p</code> elements with class <code>myclass</code> is selected by
``` javascript
$('p .myclass')
```
After selecting an element or group of element, you can manipulate is using various functions available in [jQuery][1] or in plugins. You may as well write your own [jQuery][1] plugins.
Now let us look at doing something with [jQuery][1] and JavaScript. We will try a simple example of changing the text content in an html element. Here is the content we want to change:
<script src="https://gist.github.com/3775927.js?file=fiddle.html"></script>
We will change the 'Old Text' to 'New Text'
####Change html text using JavaScript
<script src="https://gist.github.com/3775927.js?file=fiddle.js"></script>
Fiddle here: <a href="https://jsfiddle.net/gh/gist/library/pure/3775927/">https://jsfiddle.net/gh/gist/library/pure/3775927/</a>
Now the same stuff in [jQuery][1].

####Change html text using [jQuery][1]
<script src="https://gist.github.com/3776540.js?file=fiddle.js"> </script>
Fiddle here: <a href="https://jsfiddle.net/gh/gist/jquery/1.8/3776540/">https://jsfiddle.net/gh/gist/jquery/1.8/3776540/</a>
In [jQuery][1] we did that in one line and the code is so much easy to understand. Also it processes fast as it doesn't wait for the complete all content to load, as soon as the DOM is available, [jQuery][1] starts it job.
[1]:https://jquery.com/ "jQuery"
[2]:https://ejohn.org/ "John Resig"
[3]:https://mootools.net/ "Mootools"
[4]:https://dojotoolkit.org/ "Dojo Toolkit"
[5]:https://prototypejs.org/ "Prototype"
