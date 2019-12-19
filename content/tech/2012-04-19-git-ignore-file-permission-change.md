---
layout: post
title: "git :: ignore file permission (mode,chmod) change"
date: 2012-04-19T01:03:00+05:30
categories: development
tags:
 - git
---

# Git ignore file permission change

You have a situation, where you did not edit a file under git version control. But you changed the files permission. By default git will still identify this as a version change.

If you don't want git to acknowledge file permission as a change, then try this command.

```
git config core.filemode false
```

git will ignore the file permission(mode) changes made using chmod command

```
From git-config(1):
       core.fileMode
           If false, the executable bit differences between the index and the
           working copy are ignored; useful on broken filesystems like FAT.
           See git-update-index(1). True by default.
```
