---
layout: post
title: "How to convert primitive char to String in Java"
date: 2013-03-26T14:35:00+05:30
categories:
 - Java
---
`char` is 16 bit unsigned data type in Java, which is used to store characters and `String` value is an immutable array of `char`. In Java we cannot cast a primitive `char` element to `String`.

Below I have given <strike>five</strike> 6 methods to convert a `char` to `String`. Also I have included common mistakes that gives compile time errors.

{% include_code java/com/deepumohan/tech/chartostring/CharToString.java %}


## EDIT: September 07 2015

## Closer look on what is happening in Java 8

_Source codes are extracted from [grepcode Open JDK 8][open-jdk-8u40-b25]_

The `toString` methods in `java.lang.Character` class calls the `String.valueOf(char)` method.

``` java
package java.lang.Character;

...

public String toString() {
    char buf[] = {value};
    return String.valueOf(buf);
}

...

public static String toString(char c) {
   return String.valueOf(c);
}
```

And here is what `String.valueOf(char[])` and `String.valueOf(char)` methods looks like.

``` java
package java.lang.String;

...

/**
 * Returns the string representation of the {@code char} array
 * argument. The contents of the character array are copied; subsequent
 * modification of the character array does not affect the returned
 * string.
 *
 * @param   data     the character array.
 * @return  a {@code String} that contains the characters of the
 *          character array.
 */
public static String valueOf(char data[]) {
    return new String(data);
}

...

/**
 * Returns the string representation of the {@code char}
 * argument.
 *
 * @param   c   a {@code char}.
 * @return  a string of length {@code 1} containing
 *          as its single character the argument {@code c}.
 */
public static String valueOf(char c) {
    char data[] = {c};
    return new String(data, true); // package private
}

```

Here are the constructors that is called in the above methods.

``` java
package java.lang.String;

...

/**
 * Allocates a new {@code String} so that it represents the sequence of
 * characters currently contained in the character array argument. The
 * contents of the character array are copied; subsequent modification of
 * the character array does not affect the newly created string.
 *
 * @param  value
 *         The initial value of the string
 */
public String(char value[]) {
    this.value = Arrays.copyOf(value, value.length);
}

...

/*
* Package private constructor which shares value array for speed.
* this constructor is always expected to be called with share==true.
* a separate constructor is needed because we already have a public
* String(char[]) constructor that makes a copy of the given char[].
*/
String(char[] value, boolean share) {
    // assert share : "unshared not supported";
    this.value = value;
}

```

To summarise when you use `String.valueOf` or `Charactor.toString` methods, the constructor `public String(char value[])` is being invoked.
You may as well call it directly and reduce one hop.

### Side note

Remember `String` objects are immutable and they can be shared.

For example:
``` java
    String str = "abc";
```

is equivalent to:

``` java
     char data[] = {'a', 'b', 'c'};
     String str = new String(data);
```

<strike>I wonder why Java doesn't include `String` constructor that accept a single <code>char</code> as argument.</strike>

Java does'nt include `String` constructor that accepts a single `char`, because there already is a constructor that accepts a `char[]`.

###Also see
* [How to convert Char to String in Java with Example][1]
* [How to convert a char to a string in Java?][2]

[1]:http://goo.gl/E3aKf "How to convert Char to String in Java with Example"
[2]:http://goo.gl/BI05v "How to convert a char to a string in Java?"
[open-jdk-8u40-b25]:http://goo.gl/Vz7Zbk "GC: openjdk-8u40-b25.jar - GrepCode Java Project Source"
