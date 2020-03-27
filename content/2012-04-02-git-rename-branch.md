---
layout: post
title: "git :: rename a git branch"
date: 2012-04-02T17:05:00+05:30
categories: development
tags:
 - git
---

# Rename a Git Branch

That's easy pal. Renaming an existing branch in git repository is easy and simple. This method applies to renaming a branch in your local repository. Changes will reflect in the remote repository after you make a push.

If you **are in** the branch that you need to rename
```bash
git branch -m <new_branch_name>
```

If you **are not in** the branch that you need to rename

```bash
git branch -m <branch_you_want_to_rename> <new_name>
```

git is awesome!
