---
layout: post
title: "Cancel html form submission when using jQuery.submit()"
date: 2011-08-21T23:50:00+05:30
categories: Javascript
tags:
 - Javascript
 - jQuery
---
Most web developers might have come across this scenario - cancel the form submission after it is fired. This happens when form validation is fired on the <i>submit</i>&nbsp;event of form element. You may have to cancel the submission based on the validation.
This post is on how to cancel an html form submission when using jQuery. The following 4 code snippets does the same the job. This can be used to prevent submit event being fired based on some validation.

1. Cancel using event.preventDefault() method.
``` js
$('form').submit(submit_handler1);
function submit_handler1(event) {
  event.preventDefault();
}
```

2. Cancel by returning false from the submit handler.
``` js
$('form').submit(submit_handler2);
function submit_handler2() {
 return false;
}
```

3. Cancel by returning false from the submit handler.
``` js
$('form').submit(submit_handler3);
submit_handler3 = function () {
 return false;
}
```

4. Cancel by returning false from the submit handler.
``` js
$('form').submit(submit_handler4);
$.submit_handler4 = function () {
 return false;
}
```

In these examples I have used a submit handler function. It is always better to write submit handler function separately, for code maintainability. Here examples 2, 3 and 4 are same only difference is in the way submit handler function is attached to the <i>submit</i> event.

To learn/improve jQuery skills, buy one of these book from Amazon.com.
<iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=0980576857&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe> <iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=0596159773&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe><iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=1847199720&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe><iframe align="left" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://rcm.amazon.com/e/cm?t=thelaccur-20&amp;o=1&amp;p=8&amp;l=bpl&amp;asins=1935182323&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;m=amazon&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="align: left; height: 245px; padding-right: 10px; padding-top: 5px; width: 131px;"></iframe>
