---
layout: post
title: "JavaMail api - javax.mail.NoSuchProviderException: smtp"
date: 2013-10-02T11:33:00+05:30
tags:
  - Java
---

## Problem ##

When you are using Java's <tt>mailapi.jar</tt>, it also expects supporting libraries like <tt>smtp.jar</tt>, <tt>imap.jar</tt>, <tt>pop3.jar</tt>, <tt>gimap.jar</tt>, <tt>dsn.jar</tt>. If you are using Java EE platform, then it is already included. But if you are getting the following error, you might have to include additional libraries, from [Java mail API](https://java.net/projects/javamail/pages/Home/).

```java
Exception in thread "main" javax.mail.NoSuchProviderException: smtp
at javax.mail.Session.getService(Session.java:746)
at javax.mail.Session.getTransport(Session.java:685)
at javax.mail.Session.getTransport(Session.java:628)
at javax.mail.Session.getTransport(Session.java:608)
at javax.mail.Session.getTransport(Session.java:663)
at javax.mail.Transport.send0(Transport.java:154)
at javax.mail.Transport.send(Transport.java:80)
```

There are several forums and discussions happening on this same issue. Surprisingly, this is a small class path issue.

## Solution ##

To solve this error, make sure you have both <tt>mailapi.jar</tt> and <tt>smtp.jar</tt> in your classpath. Also, make sure you don't have duplicate jar files in your class path.

Reading the FAQ on Oracle's documentation will give you a better idea. [https://www.oracle.com/technetwork/java/javamail/faq/index.html](https://www.oracle.com/technetwork/java/javamail/faq/index.html)

## References ##

* [https://www.oracle.com/technetwork/java/javamail/javamail-138606.html](https://www.oracle.com/technetwork/java/javamail/javamail-138606.html)
* [https://www.coderanch.com/t/601387/java/java/smtp-error/](https://www.coderanch.com/t/601387/java/java/smtp-error/)
* [https://stackoverflow.com/questions/2980408/problem-with-java-mail-no-provider-for-smtp/](https://stackoverflow.com/questions/2980408/problem-with-java-mail-no-provider-for-smtp/)
* [https://stackoverflow.com/questions/16861553/javax-mail-nosuchproviderexception-no-provider-for-smtps/](https://stackoverflow.com/questions/16861553/javax-mail-nosuchproviderexception-no-provider-for-smtps/)
* [https://answers.atlassian.com/questions/167299/unable-to-send-email-and-error-as-javax-mail-nosuchproviderexception/](https://answers.atlassian.com/questions/167299/unable-to-send-email-and-error-as-javax-mail-nosuchproviderexception/)
