---
layout: post
title: "User directory utility to add user without login"
date: 2013-04-23T16:33:00+05:30
draft: true
---

video  dscl . -read /Groups/mysql You shouldn’t create your own mysql group, and any attempts to modify it will affect the _mysql group. But to answer your question, the most succinct way to do it would be this single command:  dscl . -create /Groups/mysql gid 296 To add an encrypted password to the group:  dscl . -passwd /Users/mysql ‘my secret’
