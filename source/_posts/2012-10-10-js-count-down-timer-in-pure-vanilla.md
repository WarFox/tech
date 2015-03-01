---

title: "js :: Count down timer in vanilla Javascript"
date: 2012-10-10T04:35:00+05:30
categories:
 - Javascript
 - Timer
---
In this article I will take you through creating a Timer object in javascript. We will create a javascript object that can be easily used to create multiple timers on a window.

A count down timer can be implemented in JavaScript using <code>setTimeout</code> or <code>setInterval</code> functions along with recursion. You may read this very good article on <a href="www.elated.com/articles/javascript-timers-with-settimeout-and-setinterval/">javascript timers with setTimeout and setInterval</a>. The important difference is setTimeout sets an execution time for a given function and setInterval calls the same function on given interval. Both work on milliseconds range.

A simple example of count down timer using the <code>setTimeout</code> is shown in the jsfiddle below. Run the code from the <em>Result</em> tab.
<iframe style="width: 100%; height: 210px" src="http://jsfiddle.net/deepumohanp/hnt9P/120/embedded/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>

All this above function does is to update the <code>span</code> content every 1000 milliseconds. As you can see here the <code>setTimeout</code> is applied to the <code>window</code> object. We also use a global variable to determine when to stop the timer. When the <code>countDown()</code> function is called timeout of 1000 milliseconds is set for countDown() function. If you repeatedly click on the start button, timeout of 1000 milliseconds is added at different times.

Now that we understand the simplest timer function, we will go ahead and make improvements to it.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/deepumohanp/hnt9P/embedded/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>
<a href="http://jsfiddle.net/deepumohanp/hnt9P/">http://jsfiddle.net/deepumohanp/hnt9P/</a>

### References
1. [http://www.elated.com/articles/javascript-timers-with-settimeout-and-setinterval/][1]
2. [http://ejohn.org/blog/how-javascript-timers-work/][2]
3. [http://mckoss.com/jscript/object.htm][3]
4. [http://helephant.com/2008/04/26/objects-event-handlers-and-this-in-javascript/][4]
[1]:http://www.elated.com/articles/javascript-timers-with-settimeout-and-setinterval/ "Javascript timers with settimeout and setinterval"
[2]:http://ejohn.org/blog/how-javascript-timers-work/ "How javascript timers work by John Resig"
[3]:http://mckoss.com/jscript/object.htm "Javascript Objects"
[4]:http://helephant.com/2008/04/26/objects-event-handlers-and-this-in-javascript/ "Objects, even handlers and this in Javascript"
