---
layout: post
title: "Oracle SQL to calculate value based on previous row value"
date: 2011-12-21T20:29:00+05:30
tags:
 - How To
 - Oracle
 - database
---

Oracle database allows you to use SQL to calculate value based on the values of
the previous row in a query result set. `LAG` and `LEAD` analytic function
to calculate based on previous rows values.

## Usage:
Both functions have the same usage, as shown below.

``` sql
LAG  (value_expression [,offset] [,default]) OVER ([query_partition_clause] order_by_clause)
LEAD (value_expression [,offset] [,default]) OVER ([query_partition_clause] order_by_clause)
```

`value_expression` can be a column or a built-in function, except for other
analytic functions.

`offset` is the number of rows preceeding/following the current row, from which
the data is to be retrieved. The default value is 1.

`default` is the value returned if the offset is outside the scope of the
window. The default value is NULL.

## Example:

``` sql
SELECT salary,
       LAG(salary + 300, 1, 0) OVER (ORDER BY salary) AS new_sal,
       LAG(salary + 200, 2, 0) OVER (ORDER BY salary) AS new_sal2
FROM employees;
```
