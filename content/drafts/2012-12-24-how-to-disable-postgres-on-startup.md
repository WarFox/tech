---
layout: post
title: "How to disable postgres on startup"
date: 2012-12-24T03:20:00+05:30
draft: true
---

Using update-rc.d is better but you can do it with chkconfig:

sudo apt-get install chkconfig

sudo chkconfig -s  postgresql off

In Ubuntu 12.04, you also need to create a symlink to insserv's location:

sudo ln -s /usr/lib/insserv/insserv /sbin/insserv
