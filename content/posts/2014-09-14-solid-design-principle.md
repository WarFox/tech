---
layout: post
title: "SOLID design principle"
date: 2014-09-14T06:07:48+05:30
comments: true
categories:
 - Programming
---
When it comes to OO designing, it is a good idea to have a strategy to follow.
A strategy allows you to think and organize ideas in a particular fashion that is comfortable to you.
I've found SOLID principle easy enough for beginners and experts to understand and practice.
This  was originally put forward by [Rober C. Martin][robert wiki], who is a pioneer in agile software development and extreme programming.

Checkout [Cleancoders](https://cleancoders.com/) to know more.

Chances are, you may be already using SOLID principle, just without giving it a name.
## tl;dr
S - Single Responsibility Principle (SRP)

O - Open/Closed Principle (OCP)

L - Liskov Substitution Principle (LSP)

I - Interface Segregation Principle (ISP)

D - Dependency Inversion Principle (DIP)

Thats right, SOLID stands for a bunch of other acronyms.

## S - Single Responsibility Principle (SRP)
> The single responsibility principle states that every class should
> have a single responsibility, and that responsibility should be
> entirely encapsulated by the class. All its services should be
> narrowly aligned with that responsibility.

Fairly simple. A Student class should manipulate Student properties and not the the properties of School. Specification of the class remains mostly untouched unless there is a big change in requirement of your software.

It is good to keep in mind that, there can be some exceptions to this. For example a utility class may provide methods for managing both Students and Schools.

## O - Open/Closed Principle (OCP)
>Software entities should be open for extension, but closed for modification.
The idea is that once a class is implemented completely, it should not be modified for including new features. Bugs and error correction must be done as and when required. Adding a new feature will require new specification and release of newer version.
https://en.wikipedia.org/wiki/Open/closed_principle

## L - Liskov Substitution Principle (LSP)
>Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program. See also [design by contract].
That right there is the basic use of Dependency Injection, right? You define a parent interface and replace them by concrete implementation which are derivatives.

```java
class Animal {
    public void makeNoise() {
        System.out.println("noise");
    }
}
class Dog extends Animal {
    @override
    public void makeNoise() {
        bark();
    }
    public void bark() {
        System.out.println("bow bow bow");
    }
}
Dog dog = new Animal();
dog.makeNoise();
@Inject
Animal animal; // can be replaced by Dog
```
https://en.wikipedia.org/wiki/Liskov_substitution_principle

## I - Interface Segregation Principle (ISP)
>Many client-specific interfaces are better than one general-purpose interface.
Interfaces provide abstraction no implementation. When developing client interfaces, it should be kept at minimum and should only expose those methods which are essential for that client.

https://en.wikipedia.org/wiki/Interface_segregation_principle

```java
interface Jumbable {
    void jump();
}
interface Climbable {
    void climb();
}
class Dog extends Animal implements Jumbable {
    @override
    void jump() {
        //jump
    }
}
class Monkey extends Animal implements Jumbable, Climbable {
    @override
    void jump() {
    }
    @override
    void climb() {
    }
}
```

##D - Dependency Inversion Principle (DIP)
>One should “Depend upon Abstractions. Do not depend upon concretions.”
Dependency injection is one method of following this principle.

```java
interface JumpringService {
    public void jump();
}
public class JumpingServiceImpl implements JumpingService {
    @Inject
    private Jumpable jumbable;
    @override
    public void jump() {
        jumpable.jump();
    }
}
```

https://en.wikipedia.org/wiki/Dependency_inversion_principle

[robert wiki]: https://en.wikipedia.org/wiki/Robert_C._Martin
[design by contract]: https://en.wikipedia.org/wiki/Design_by_contract
