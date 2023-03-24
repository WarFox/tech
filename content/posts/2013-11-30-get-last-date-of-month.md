---
layout: post
title: "Get last date of a month"
date: 2013-11-30T23:48:00+05:30
categories:
 - Java
---
## Java Calendar ##

In Java, we can use the Calendar class to get <tt>day_of_month</tt>, <tt>day_of_week</tt> etc.
Last day of a month varies depending on the Month and on leap year we have extra day in February.
So to figure out the last day of any given month in a year, we write some code which is apparently simple.
Calendar object allows us to manipulate days, go forward or backward on the Calendar, add days, hours, minutes or seconds to any given time etc.

We will use these capabilities of Calendar class to get our <tt>last_of_month</tt>.

The idea here is to get the first day of next month and then reduce one day from it, which gives us the last day of the month relative to input date.

```java
/**
 * The trick is to add a month, set the date as 1st and then reduce a date.
 *
 * @param calendar
 */
private static void setCalendarToLastDayOfMonth(Calendar calendar) {
    calendar.add(Calendar.MONTH, 1);
    calendar.set(Calendar.DAY_OF_MONTH, 1);
    calendar.set(Calendar.HOUR, 0);
    calendar.set(Calendar.MINUTE, 0);
    calendar.set(Calendar.SECOND, 0);
    calendar.set(Calendar.MILLISECOND, 0);
    calendar.add(Calendar.DATE, -1);
}
```

But, Java Calendar has a better way of doing this, by using getActualMaximum() method which is far more convenient.

```java
 private static void setCalendarToLastDayOfMonth(Calendar calendar) {
   int lastDay = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
   calendar.set(Calendar.DAY_OF_MONTH, lastDay);
   calendar.set(Calendar.HOUR, 0);
   calendar.set(Calendar.MINUTE, 0);
   calendar.set(Calendar.SECOND, 0);
   calendar.set(Calendar.MILLISECOND, 0);
}
```

## Sample Util class code ##

A sample calendar util class which gives you few convenient methods is given below.

```java
/**
 * Copyright (C) 2013 Deepu Mohan Puthrote. All Rights Reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class CalendarUtil {
    public static void main(String[] args) throws Exception {
        String string = "January 2, 2010";
        CalendarUtil calendarUtil = new CalendarUtil();
        System.out.println(calendarUtil.getLastDateOfMonth(string));
        System.out.println(calendarUtil.getLastDateOfMonth());
    }
    public Date getLastDateOfMonth() {
        return getLastDateOfMonth(new Date());
    }
    public Date getLastDateOfMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return getLastDateOfMonth(calendar);
    }
    public Date getLastDateOfMonth(Calendar calendar) {
        setCalendarToLastDayOfMonth(calendar);
        return calendar.getTime();
    }
    public Date getLastDateOfMonth(String date) throws ParseException {
        return getLastDateOfMonth(date, "MMMM d, yyyy");
    }
    public Date getLastDateOfMonth(String date, String format) throws ParseException {
        return getLastDateOfMonth(date, format, Locale.US);
    }
    public Date getLastDateOfMonth(String stringDate, String format, Locale locale) throws ParseException {
        Date date = new SimpleDateFormat(format, locale).parse(stringDate);
        return getLastDateOfMonth(date);
    }
    private static void setCalendarToLastDayOfMonth(Calendar calendar) {
        int lastDay = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
        calendar.set(Calendar.DAY_OF_MONTH, lastDay);
        calendar.set(Calendar.HOUR, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
    }
}
```

## References

* [https://stackoverflow.com/questions/13624442/getting-last-day-of-the-month-in-given-string-date/](https://stackoverflow.com/questions/13624442/getting-last-day-of-the-month-in-given-string-date/)
* [https://docs.oracle.com/javase/7/docs/api/java/util/Date.html](https://docs.oracle.com/javase/7/docs/api/java/util/Date.html)
* [https://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html](https://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html)
* [https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)
* [https://docs.oracle.com/javase/7/docs/api/java/util/Locale.html](https://docs.oracle.com/javase/7/docs/api/java/util/Locale.html)
