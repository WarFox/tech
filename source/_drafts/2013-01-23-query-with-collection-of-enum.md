---
layout: post
title: "Query with Collection of enum"
date: 2013-01-23T01:02:00+05:30
---

//  It's not that easy. JPQL provides the IN operator for this:

//  select p from Person p, IN(p.email) m where m = :email

//  The 'old' way (read SQL-like) would be:

//  select p from Person p join p.email m where m = :email
