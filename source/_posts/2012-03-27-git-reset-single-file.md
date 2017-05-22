---
layout: post
title: "git :: how to undo changes to a single file"
date: 2012-03-27T20:20:00+05:30
tags:
 - git
---

# How to undo changes in a single file, using git #

To get rid of the stupid changes you have made in a single file, without effecting important changes in other files use,

```
git checkout filename
```

Yes, that is the same command used to switch between branches.

If the branch name is same the filename, do this

```
git checkout --filename
```

Note:
`git checkout --hard` will reset all the files. Use that when you are certain about that.
