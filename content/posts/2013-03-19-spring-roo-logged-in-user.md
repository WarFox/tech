---
layout: post
title: "Spring Roo:: logged in user"
date: 2013-03-19T20:09:00+05:30
draft: true
---

<sec:authorize access="isAuthenticated()">  <sec:authentication property="principal.username"/> </sec:authorize>
