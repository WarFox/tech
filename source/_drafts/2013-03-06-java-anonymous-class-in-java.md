---
layout: post
title: "Anonymous Class in Java"
date: 2013-03-06T12:40:00+05:30
categories:
 - java
---

Make a gist  Write atleast 3 examples and explain

```java
    // To make sure Neo4j is shut down properly you can add a shutdown hook:
    private static void registerShutdownHook(final GraphDatabaseService graphDb) {
       // Registers a shutdown hook for the neo4j instance so that i
       // shuts down nicely when the VM exists (even if you Ctrl-C the running
       // example before its complete)
       Runtime.getRuntime().addShutdownHook(new Thread() {
           public void run() {
           graphDb.shutdown();
       }
    })
   }
```
