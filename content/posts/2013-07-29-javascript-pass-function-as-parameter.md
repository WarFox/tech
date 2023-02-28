---
layout: post
title: "Pass function as parameter in Javascript"
date: 2013-07-29T23:19:00+05:30
---

Javascript allows you to pass functions as parameter to another function and that makes Javascript super awesome!. Great things can be achieved from this power.
Quote from Mozilla developer website:

>In JavaScript, functions are first-class objects, i.e. they are objects and can be manipulated and passed around just like any other object.

Every Javascript function is a [Function][5] object. Hence we can pass them as arguments, like any other object.

### How to do that?
Passing function as parameter is no different from passing any other object when it comes to syntax.
I am gonna try and explain that with an example (hopefully, easy to understand)

### The example problem
Bob wants to get sum of values [1, 2, 3, 4, 5, 6, 7, 8, 9]
So we give him the following solution
``` javascript
// find sum of values
var total = function(values) {
    var sum = 0;
    values.forEach( function(value) {
        sum += value;
    });
    return sum;
};
```

Bob is happy with the function. But now he wants to get sum of all even numbers in the list of values.
So we copy-paste the above function, rename it and make slight changes.

``` javascript
// find sum of values
var total = function(values) {
    var sum = 0;
    values.forEach( function(value) {
        sum += value;
    });
    return sum;
};
// find sum of even numbers in list of values
var totalEven = function(values) {
    var sum = 0;
    values.forEach( function(value) {
        if( value % 2 === 0 ) sum += value;
    });
    return sum;
};
```

Bob is happy again. But he wants more. Now he need sum of all odd numbers from the same list.
As usual, we copy-paste, rename and make slight changes.

``` javascript
    // find sum of values
    var total = function(values) {
        var sum = 0;
        values.forEach( function(value) {
            sum += value;
        });
        return sum;
    };

    // find sum of even numbers in list of values
    var totalEven = function(values) {
        var sum = 0;
        values.forEach( function(value) {
            if( value % 2 === 0 ) sum += value;
        });
        return sum;
    };

    // find sum of odd numbers in list of values
    var totalOdd = function(values) {
        var sum = 0;
        values.forEach( function(value) {
            if( value % 2 !== 0 ) sum += value;
        });
        return sum;
    };
```

### The problem with that approach
* Lot of duplicate code.
* Cluttered and ugly source code.
* Source file becomes unnecessarily lengthy.
* Not applying re-usabilty principle.
* Have to create separate function for each additional request.

### Better code with passing function as argument
We can improve the above code a lot by passing the selection functionality as argument. In the above example, the basic operation is summation. Then, we need some kind of selection of values to sum. This selection can be anything, like even numbers, odd numbers etc. This is what we will pass an argument.

``` javascript
    var totalSelectValues = function(values, selector) {
        var sum = 0;
        values.forEach(function(value) {
            if(selector(value)) sum+= 0;
        });
        return sum;
    };
```

The `selector`, is function passed as parameter. Here we are expecting it to return a boolean value.
``` javascript
    var values = [1,2,3,4,5,6,7,8,9];

    // even numbers
    totalSelectValues(values, function(value) { return value % 2 === 0});

    // odd numbers
    totalSelectValues(values, function(value) { return value % 2 !== 0});

    // greater than 5
    totalSelectValues(values, function(value) { return value > 5 });
```
Awesome! We just created functions on the fly and passed it as parameters, didn't even bother to name it! Neat eh? Also we have reduced the code base by far. Just a single function and no ugly repetition.

### But that is not enough
We also need to make sure our little function works perfectly even if the second argument is not send.
``` javascript
    var totalSelectValues = function(values, selector) {
        // handle undefined selector
        if (typeof selector == 'undefined' ) {
            selector = function() {return true;};
        }
        var sum = 0;
        values.forEach(function(value) {
            if(selector(value)) sum+= 0;
        });
        return sum;
    };
```
Now that should work.

The complete example is available in the following jsFiddle. <a href="http://jsfiddle.net/deepumohanp/s2DBJ/">http://jsfiddle.net/deepumohanp/s2DBJ/</a>
<iframe width="100%" height="876px" src="http://jsfiddle.net/deepumohanp/s2DBJ/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### References
1. I got the example inspiration from Dr. Venkat Subramaniam's talk an Scala.
    * [http://www.youtube.com/watch?v=LH75sJAR0hc][1]
    * [https://vimeo.com/57988159][2]

2. [http://www.joelonsoftware.com/items/2006/08/01.html][3]
3. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope][4]
4. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function][5]

[1]:http://www.youtube.com/watch?v=LH75sJAR0hc
[2]:https://vimeo.com/57988159
[3]:http://www.joelonsoftware.com/items/2006/08/01.html
[4]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope
[5]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
