---
title: How does the JVM work?
date: 2017-04-06 14:32:45
draft: true
tags:
  - Java
---

## Introduction
Are you curious about how Java programs operate beneath the surface?
With years of experience fine-tuning Java-based systems, I'm excited
to share my insights with you. In this blog post, we will uncover the
inner workings of the Java Virtual Machine (JVM) and its components,
taking you on a journey to understand the mechanics behind the
efficient execution of Java programs. Additionally, I've carefully
chosen some affiliate resources that can help you deepen your
knowledge and become a Java performance guru.

## From Source Code to Execution
Running a Java program involves several crucial steps, which are as follows:

- Compilation:
The Java source code is compiled into bytecode using the
Java compiler (javac). Bytecode is an intermediate,
platform-independent representation of the source code, optimized for
execution by the JVM. In practical projects you would use a build
system like [Apache Maven](https://maven.apache.org/),
[Gradle](https://gradle.org/), [sbt](https://www.scala-sbt.org/) etc

- Initialization:
When you run a Java program, the JVM is
initialized. It loads the necessary runtime libraries, sets up the
classpath, and configures other runtime settings.

- Class loading:
The JVM's class loader subsystem loads the main class
and its dependencies, resolving any required references. This process
involves the Bootstrap, Extension, and System class loaders, with the
Bootstrap class loader being the topmost in the hierarchy.

> Read about the process in more detail in [Loading, Linking, and Initializing](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html)

- Bytecode verification:
To ensure safety and adherence to the JVM
specification, the bytecode verifier checks the loaded bytecode for
any potential issues or inconsistencies.

> Read more about verification in [Verification of class Files](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.10)

- Execution:
The JVM's interpreter and Just-In-Time (JIT) compiler work
together to execute the bytecode. The interpreter reads and executes
the bytecode sequentially, while the JIT compiler optimizes frequently
executed code by translating it into native machine code.

> Geeks for geeks have a short article about JIT https://www.geeksforgeeks.org/just-in-time-compiler/

- Memory management:
Throughout the program's lifecycle, the JVM
manages memory allocation and garbage collection. It uses stack and
heap memory regions to store method call frames, local variables,
objects, and instance variables. Several years of optimisations has
gone into perfecting memory management and garbage collection in JVM.

https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html

- Shutdown:
After the program finishes executing, the JVM cleans up
resources and terminates the process.

https://docs.oracle.com/javase/8/docs/technotes/guides/lang/hook-design.html

> To master the essentials of Java programming and kickstart your
> learning journey, explore our top-pick Java programming course.

In the following sections, we will delve deeper into the key
components of the JVM, providing insights into the performance
optimizations and techniques used by seasoned Java experts.

# Class Loaders and the Bootstrap Class Loader

In Java, class loaders are responsible for loading classes into the
JVM dynamically at runtime. They follow a delegation model, where each
class loader delegates the loading process to its parent class loader
before attempting to load the class itself. There are three main types
of class loaders in Java:

- Bootstrap Class Loader:
This is the topmost class loader in the
hierarchy and is part of the JVM's core. It is responsible for loading
the essential Java libraries (e.g., java.lang, java.util) from the
Java Runtime Environment (JRE) lib directory (rt.jar). The Bootstrap
Class Loader is written in native code and doesn't have a parent class
loader.

- Extension Class Loader:
The Extension Class Loader is a child of the
Bootstrap Class Loader and loads classes from the JRE's ext
directory. This class loader allows developers to extend the core Java
libraries with additional functionality without modifying the core
libraries themselves.

- System/Application Class Loader:
The System (or Application) Class
Loader is a child of the Extension Class Loader and loads classes from
the application's classpath. It is responsible for loading
user-defined classes and third-party libraries used in the
application.

Understanding the class loader hierarchy and how each class loader
works is crucial for resolving class loading issues, such as
ClassNotFoundException and NoClassDefFoundError. In addition, custom
class loaders can be created to implement specific loading strategies,
enabling features like hot code replacement and dynamic code loading.

> Master the art of Java class loading with this comprehensive Java class loader guide.

Here are some reference links for Section 2:

Overview of class loaders in Java:
https://www.geeksforgeeks.org/classloader-in-java/

Class loader delegation model:
https://www.infoworld.com/article/2077260/learn-java-the-basics-of-java-class-loaders.html

## The Art of Running Bytecode: JVM Interpretation and Optimization

Once the Java bytecode is loaded into the JVM, it needs to be executed efficiently to ensure optimal performance. This process involves two key components of the JVM: the interpreter and the optimizer.

Interpreter: The JVM interpreter reads and executes the bytecode sequentially. It uses a program counter to keep track of the current instruction, ensuring smooth execution. The interpreter follows a fetch-decode-execute cycle:

a. Fetch: The interpreter retrieves the next bytecode instruction from memory.

b. Decode: The interpreter decodes the fetched bytecode, determining the operation to be performed.

c. Execute: The interpreter performs the required operation, updating the operand stack, local variables, and program counter accordingly.

Optimizer: While the interpreter is fast and simple, it may not be the most efficient way to execute bytecode, especially for frequently executed code (hotspots). The JVM employs various optimization techniques to enhance performance:

a. Just-In-Time (JIT) Compilation: The JIT compiler translates frequently executed bytecode into native machine code during runtime. This native code is executed directly by the underlying hardware, reducing interpretation overhead and improving performance. The JVM uses profiling data to identify hotspots and decide which code segments to compile with the JIT compiler.

b. Adaptive Optimization: The JVM uses adaptive optimization techniques to fine-tune the performance of the JIT compiler. It continuously monitors the execution of the compiled code and may recompile it with different optimization strategies if it detects potential performance improvements.

c. Dead Code Elimination: The JVM optimizer can detect and eliminate dead code, which is code that is never executed or doesn't affect the program's output. Removing dead code reduces memory usage and improves execution speed.

By understanding the mechanisms behind bytecode execution and optimization in the JVM, developers can write more efficient Java applications and troubleshoot performance issues more effectively. Knowing when and how to leverage the JVM's optimization capabilities can be invaluable when fine-tuning your Java systems.

Here are some reference links for Section 3:

JVM interpretation and bytecode execution:
https://www.baeldung.com/java-virtual-machine-internals

JIT compilation in the JVM:
https://www.geeksforgeeks.org/jit-compiler-in-java/

JVM optimization techniques:
https://www.oracle.com/java/technologies/javase/performance-tuning-examples-twp.html


## Section 4: Just-In-Time Compiler – The Performance Catalyst for Java Applications

The Just-In-Time (JIT) compiler plays a crucial role in enhancing the performance of Java applications. As the name suggests, it compiles bytecode into native machine code during runtime, eliminating the overhead of interpreting the bytecode for frequently executed code segments (hotspots).

Tiered Compilation: Modern JVMs employ a multi-tiered JIT compilation strategy, combining multiple compilation levels to balance start-up time and peak performance. In the early stages, the JVM focuses on fast compilation with fewer optimizations. As the application runs, the JVM recompiles hotspots with more aggressive optimizations, gradually improving the performance. This tiered approach helps strike a balance between start-up time and peak performance.

Profiling and Compilation: The JIT compiler relies on profiling data collected by the JVM during the execution of the application. This data helps the JVM identify hotspots and make informed decisions about when and how to compile the code. Profiling information includes method invocation counts, loop iteration counts, and branching statistics.

Inlining: One of the most powerful optimization techniques employed by the JIT compiler is method inlining. Inlining replaces a method call with the actual method code, reducing the overhead of method invocation. The JIT compiler is particularly effective at inlining small, frequently called methods, which can result in significant performance improvements.

Garbage Collection Optimizations: The JIT compiler can also optimize garbage collection performance by identifying object allocation patterns and usage. By analyzing the compiled code, the JIT compiler can help the garbage collector make more informed decisions about when and how to collect unused objects, reducing the overhead of garbage collection and improving application performance.

By understanding the inner workings and optimization techniques of the JIT compiler, developers can better appreciate the performance improvements it brings to Java applications. Profiling your application, analyzing JIT compilation logs, and tuning JIT compilation parameters can help you squeeze every last bit of performance out of your Java systems.

Here are some reference links for Section 4:

Introduction to the Just-In-Time Compiler:
https://www.geeksforgeeks.org/jit-compiler-in-java/

JIT compilation and tiered compilation:
https://www.oracle.com/technical-resources/articles/java/architect-evans-pt2.html

Method inlining optimization:
https://www.baeldung.com/java-jit-compiler

JIT compilation and garbage collection optimizations:
https://shipilev.net/jvm/diy-gc/#_garbage_collection_optimizations

> Dive deeper into the world of JIT compilers with this informative JIT compiler book.

> Affiliate link idea JobRunr,

## Section 5: Memory Management in Java – The Art of Stack and Heap Allocation

Java's memory management plays a pivotal role in ensuring efficient execution of applications. The JVM uses two primary memory regions – stack and heap – to store and manage data throughout the program's lifecycle. Understanding the nuances of stack and heap memory can help developers write memory-efficient code and diagnose memory-related issues.

Stack Memory: The JVM uses stack memory to store method call frames and local variables. Each method invocation creates a new stack frame, which is removed when the method returns. Stack memory allocation is fast and deterministic, as the JVM knows the exact size and lifetime of the data being stored. Stack memory is thread-local, meaning each thread has its own stack, ensuring that data on the stack isn't shared between threads.

Heap Memory: The JVM heap is used to store objects and their instance variables. Heap memory is shared among all threads, making it the primary location for storing shared data. Heap memory allocation is more complex than stack memory, as the JVM must manage the lifetime of objects and deallocate memory when it's no longer needed. Java's garbage collector handles this task, automatically reclaiming memory occupied by unused objects.

Garbage Collection: Java's garbage collector (GC) is responsible for identifying and reclaiming memory occupied by unused objects on the heap. Several GC algorithms and configurations are available to optimize memory management for different application scenarios. Understanding the fundamentals of garbage collection and tuning the GC can significantly improve application performance and reduce memory usage.

Memory Leaks: Despite Java's automatic memory management, memory leaks can still occur when objects remain in memory even though they're no longer needed. Detecting and fixing memory leaks is essential to ensure the long-term stability and performance of Java applications.

> Get your hands on this Java memory management book to become an expert in handling memory allocation.

## Review

Now let us review what we have learned from this blog

### What happens when you run a Java program?
When you run a Java program, the Java Virtual Machine (JVM) is
started, which loads and executes the compiled Java bytecode. The JVM
translates the bytecode into machine code for the underlying operating
system and hardware.

## Does it create a system process?
Yes, running a Java program creates a new system process. The JVM runs
as a separate process on the host operating system, with its own
memory space and resources.

## Difference between Java process and system process.
A Java process is a running instance of a Java application or program
within the Java Virtual Machine (JVM). A system process, on the other
hand, is a running program or application in the operating system, not
limited to Java applications. Java processes are a subset of system
processes.

## What is the Bootstrap class loader?
The Bootstrap class loader is the top-most class loader in the Java
class loader hierarchy. It is responsible for loading core Java
libraries such as java.lang, java.util, and other runtime classes from
the Java Runtime Environment (JRE) lib directory.

## How it runs bytecode?
The JVM runs bytecode by interpreting it into machine code, which is
then executed on the host machine. The bytecode is executed
sequentially, with the help of a program counter that keeps track of
the current instruction.

## Explain Just in time compiler.
The Just-In-Time (JIT) compiler is a component of the JVM that
compiles Java bytecode into native machine code at runtime. This
process improves the performance of Java applications by reducing the
overhead of interpretation. The JIT compiler compiles frequently
executed bytecode (hotspots) into native code, which is then executed
directly by the underlying hardware.

## How is memory allocated?
In Java, memory is allocated for objects on the heap and for method
execution on the stack. When an object is created, memory is allocated
on the heap, and when a method is called, a new stack frame is
created, which holds local variables and intermediate results.

## What is bytecode, program counter, stack, heap?

- Bytecode:
Bytecode is the intermediate, platform-independent representation of
Java source code, which is executed by the JVM.

- Program counter:
The program counter is a register in the JVM that holds the address of
the currently executing instruction.

- Stack:
The stack is a region of memory in the JVM that holds method
call frames, including local variables and intermediate results.

- Heap:
The heap is a region of memory in the JVM that holds objects and their
instance variables.

## Why does Java use stack and heap?
Java uses stack and heap memory for different purposes. The stack is
used for method call frames and local variables, providing a simple
and efficient way to manage method calls and recursion. The heap is
used for object storage, allowing objects to be shared and accessed by
multiple methods and threads. This separation of memory regions
simplifies memory management and garbage collection, improving
performance and reliability.
