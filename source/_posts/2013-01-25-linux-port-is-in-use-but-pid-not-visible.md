---

title: "Linux :: Port is in use but pid not visible"
date: 2013-01-25T20:48:00+05:30
categories:
 - linux
 - centos
 - ubuntu
---
##Problem: 
A port is being used by some process but the pid of process is not visible
###Reason:
When the process is started by <code>root</code>, other users not in the root group cannot view the process ids. So when you do:
<code>netstat -atnp</code>
process id will not be visible to normal user.
You have to run <code>netstat</code> command with <code>sudo</code>, to view all process ids.
``` bash
sudo netstat -atnp
```
A scenario I came across is when Apache tomcat was started as a Java service with jsvc command. The daemon.sh was run by the root user, so the process belonged to root.
<!-- it is used by root  jsvc.exec usses 8080  centos security  cannot see pid of process run by root -->
