---
title: Database aggregation of aggregation window function and equi-join
date: 2017-03-11 14:14:05
tags:
draft: true
---

| Id | Employee          | Department               | Rank |
|----|-------------------|--------------------------|------|
|  1 | Gerald Tucker     | Research and Development |    1 |
|  2 | Nicholas Thomas   | Accounting               |    3 |
|  3 | Nicholas Allen    | Marketing                |    4 |
|  4 | Sharon Smith      | Accounting               |    4 |
|  5 | Michael Dean      | Training                 |    1 |
|  6 | Lois Stephens     | Accounting               |    1 |
|  7 | Russell Alvarez   | Services                 |    2 |
|  8 | Richard Alexander | Research and Development |    2 |
|  9 | Antonio Morrison  | Accounting               |    2 |
| 10 | Willie Mitchell   | Research and Development |    1 |
| 11 | John Smith        | Accounting               |    5 |
| 12 | Gabriel Leblanc   | Services                 |    2 |


Find top three employees by department in one query

describe ascii notation

* equi-join

* window function
A window function performs a calculation across a set of table rows that are somehow related to the current row. This is comparable to the type of calculation that can be done with an aggregate function. But unlike regular aggregate functions, use of a window function does not cause rows to become grouped into a single output row — the rows retain their separate identities. Behind the scenes, the window function is able to access more than just the current row of the query result.
