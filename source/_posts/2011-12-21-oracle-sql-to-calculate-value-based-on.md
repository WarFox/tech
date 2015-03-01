---

title: "Oracle SQL to calculate value based on previous row value"
date: 2011-12-21T20:29:00+05:30
categories:
 - How To
 - Oracle
---

Oracle database allows you to use SQL to calculate value based on the values of the previous row in a query result set.&nbsp;Use LAG and LEAD analytic function to calculate based on previous rows values.

Usage:
Both functions have the same usage, as shown below.
LAG  (value_expression [,offset] [,default]) OVER ([query_partition_clause] order_by_clause)
LEAD (value_expression [,offset] [,default]) OVER ([query_partition_clause] order_by_clause)

Description:
value_expression - Can be a column or a built-in function, except for other analytic functions. 
offset - The number of rows preceeding/following the current row, from which the data is to be retrieved. The default value is 1. 
default - The value returned if the offset is outside the scope of the window. The default value is NULL.

Example:

```
select salary,lag(salary+300,1,0) over (order by salary) as new_sal,lag(salary+200,2,0) over (order by salary) as new_sal2 from employees;
```

<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=0672325675&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>&nbsp;<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=0596520832&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>&nbsp;<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=0596526849&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>&nbsp;<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=0596009763&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>
