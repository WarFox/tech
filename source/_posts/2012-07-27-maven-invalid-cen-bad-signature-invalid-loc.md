---
layout: post
title: "Maven:: Invalid CEN (bad signature) Invalid LOC (bad signature)"
date: 2012-07-27T11:16:00+05:30
categories:
 - mvn
 - Java
 - maven
---
So, you are here, and I guess you are having a tough time trying to figure out what that error is. I'd spent almost three days trying to figure out what this crazy error is, but then decided to not waste time and deleted my Maven repository folder at <strong>~/.m2/repository</strong>.

I assume that, this is some bug in maven, but this also pops up in several other projects like Apache Tomcat, Atlassian Confluence etc. The error comes up randomly and developers spent a great portion of their fruitful work time, just to figure out whats going wrong. And most of the time it is not their fault.

This error comes up randomly and means that one of the jar file in the project class path is corrupt. A practical solution is to replace the jar files with new ones freshly downloaded.

This crazy error show up when the JVM thinks that the jar file it is accessing is corrupt. So I assumed if I delete the dependency jar files and download them again, it might solve the problem.

``` bash
#delete repository
rm -rf ~/.m2/repository/*

#use maven
mvn test
```

This deletes all files from ~/.m2/repository/ first and then, <code>mvn test</code> will download all dependent jar files before building the project and running junit tests. It took a while for Maven to download all my dependencies, but was worthwhile. The project is back in action!!!

If you are not using Maven or any other dependency management tool, you may try downloading the required jar files again, may be from a different source, if the file in that source is corrupted.

This error may also come up when [checking out from repository][1].

[1]:http://stackoverflow.com/questions/3831217/cvs-checkout-on-windows-ant-build-invalid-cen-header-bad-signature
