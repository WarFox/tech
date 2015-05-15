---
layout: post
title: "git:: how to undo changes to a single file"
date: 2012-03-27T20:20:00+05:30
categories:
 - git
---

## undo changes in a single file, using git #

To get rid of the stupid changes you have made in a single file, without effecting important changes in other files use,  

```
git checkout filename
```

Yes, that is the same command used to switch between branches.  

If the branch name is same the filename, do this 

```
git checkout --filename
```

Note: ```
git checkout --hard```
 will reset all the files. Use that when you are certain about that.   

<div class="my-amazon-links">
### Related Books: #
<iframe src="http://rcm.amazon.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=thelaccur-20&o=1&p=8&l=as1&m=amazon&f=ifr&ref=tf_til&asins=1430218339" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=0596520123&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=1934356158&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>  <iframe src="http://rcm.amazon.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=thelaccur-20&o=1&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=B0067QNR56" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=B0071Q26O4&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> 
</div>
