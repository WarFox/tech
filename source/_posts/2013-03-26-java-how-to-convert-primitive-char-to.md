---
layout: post
title: "Java :: How to convert primitive char to String in Java"
date: 2013-03-26T14:35:00+05:30
categories:
 - Java
---
Char is 16 bit unsigned data type in Java used to store characters and <code>String</code> is an immutable array of <code>char</code>. In Java you cannot cast a primitive <code>char</code> element to <code>String</code>.

Below I have given five methods to convert a <code>char</code> to <code>String</code>. Also I have included common mistakes that gives compile time errors.

``` java
package com.deepumohan.tech.chartostring;

public class CharToString {
    
    public static void main(String[] args) {
        char x = 'x';
        System.out.println(concatBlankString(x));
        System.out.println(stringValueOf(x));
        System.out.println(characterToString(x));
        System.out.println(characterObjectToString(x));
        System.out.println(charArray(x));
    }
    
    // append a blank string
    public static String concatBlankString(char x) {
        return x + "";
    }
    
    // use String.valueOf(char) static function
    public static String stringValueOf(char x) {
        return String.valueOf(x);
    }
    
    // use Character.toString(char) static function
    public static String characterToString(char x) {
        return Character.toString(x);
    }
    
    // create new Character object from the given char and
    // then use object's toString() method
    public static String characterObjectToString(char x) {
        return new Character(x).toString();
    }
    
    // create new char[] array from the char and pass it to
    // String constructor
    public static String charArray(char x) {
        return new String(new char[]{x});
    }
    
    /*
    // Compile time error
    // No suitable constructor found
    public static String noConstructor(char x) {
        return new String(x);
    }
    // Compile time error
    // Inconvertible types
    public static String inconvertibleTypes(char x) {
        return (String) x;
    }
    */
}
```

I wonder why Java doesn't include <code>String</code> constructor that accept a single <code>char</code> as argument.

###Also see
[How to convert Char to String in Java with Example][1]
[How to convert a char to a string in Java?][2]

[1]:http://goo.gl/E3aKf "How to convert Char to String in Java with Example"
[2]:http://goo.gl/BI05v "How to convert a char to a string in Java?"
