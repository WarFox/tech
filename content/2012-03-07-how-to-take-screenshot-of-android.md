---
layout: post
title: "How to take screenshot of Android device (developer edition)"
date: 2012-03-07T06:44:00+05:30
categories: mobile
tags:
 - Android
 - Google
---

Older versions of Andriod doesn't give a simple option to take screen shot directly from the device. Apple's iPhone has a handy feature which allows to take screen shots by pressing Power+Home button. From Android 2.2 (Froyo) onwards Android devices gives and option to take screenshot from the device itself by using Home + Power button combo. This post is android developers method for getting screen shot from Android devices.

It took some time and searches to figure out how to take screen shots from Android device. You need to have a android development kit installed and configured to take screen shots using the official method.
<a href="http://4.bp.blogspot.com/-vsUHIXD3zIU/T1asFbGOnXI/AAAAAAAACoY/w1sjj8m9QKo/s1600/device-2012-03-06-223556.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="320" src="http://4.bp.blogspot.com/-vsUHIXD3zIU/T1asFbGOnXI/AAAAAAAACoY/w1sjj8m9QKo/s320/device-2012-03-06-223556.png" width="214" /></a>It was easy for me once I figured out the method, as I had already installed <a href="http://developer.android.com/sdk/index.html">android-sdk</a> in my machine. I am using <a href="http://www.springsource.com/developer/sts/">SpringSource Tool Suite</a> with <a href="http://developer.android.com/sdk/eclipse-adt.html">ADT</a> plugin for development which is a <a href="http://www.springsource.com/">Spring</a> flavoured <a href="http://www.eclipse.org/">Eclipse</a>.

If you already have them installed great otherwise you might want to get these installed in your machine. Download and installation instructions can be found in the following links
<ul><li><a href="http://developer.android.com/sdk/index.html">Android SDK &amp; USB drivers</a></li><li><a href="http://www.eclipse.org/downloads/">Eclipse</a> or <a href="http://www.springsource.org/springsource-tool-suite-download/">SpringSource Tool Suite</a> (Optional)</li><li><a href="http://developer.android.com/sdk/eclipse-adt.html#installing">ADT plugin</a> for Eclipse or STS (Optional)</li></ul><i>By optional I mean, Eclipse and ADT is not required for taking the screen shot, which is the purpose of this blog post</i>

Once you have it ready, follow these steps
<ol><li>Enable <b>USB debugging</b> in the android device, by going to <b>Settings</b> &gt; <b>Applications</b> &gt; <b>Development</b> &gt; and checking the check box that says <b>USB debugging</b>. </li>
<li>Connect your Android device to your machine</li>
<li>Start ddms(Dalvik Debug Monitor Server) either from <b>Android-SDK/tools</b> folder or from Eclipse</li>
<a href="http://1.bp.blogspot.com/-V51Zxx1Zz10/T1aws4UlF4I/AAAAAAAACo8/-gAV419ps7k/s1600/Screenshot%2Bat%2B2012-03-07%2B00%253A49%253A14.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="347" src="http://1.bp.blogspot.com/-V51Zxx1Zz10/T1aws4UlF4I/AAAAAAAACo8/-gAV419ps7k/s640/Screenshot%2Bat%2B2012-03-07%2B00%253A49%253A14.png" width="640" /></a>
<a href="http://2.bp.blogspot.com/-_ywKvPK84c8/T1avo9sG5CI/AAAAAAAACok/H3Ga0IxBqis/s1600/Screenshot%2Bat%2B2012-03-06%2B22%253A19%253A43.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="360" src="http://2.bp.blogspot.com/-_ywKvPK84c8/T1avo9sG5CI/AAAAAAAACok/H3Ga0IxBqis/s640/Screenshot%2Bat%2B2012-03-06%2B22%253A19%253A43.png" width="640" /></a>
<li>That will open ddms screen like this</li>
<a href="http://4.bp.blogspot.com/-Sf0q1hUR3fY/T1av6kh9N5I/AAAAAAAACow/ZLU92_iluio/s1600/Screenshot%2Bat%2B2012-03-06%2B22%253A22%253A12.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="360" src="http://4.bp.blogspot.com/-Sf0q1hUR3fY/T1av6kh9N5I/AAAAAAAACow/ZLU92_iluio/s640/Screenshot%2Bat%2B2012-03-06%2B22%253A22%253A12.png" width="640" /></a>
Here your will be able to see the device that you have connected. You can ignore the messages and warnings that are continuously updated at the bottom.
<li>Click on the camera icon or screen capture option under the <b>Device</b> menu</li>
<a href="http://2.bp.blogspot.com/-8a5KnIB3x_s/T1azENhdsLI/AAAAAAAACpI/pR5RbgTVcR8/s1600/Screenshot%2Bat%2B2012-03-06%2B22%253A22%253A12.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="360" src="http://2.bp.blogspot.com/-8a5KnIB3x_s/T1azENhdsLI/AAAAAAAACpI/pR5RbgTVcR8/s640/Screenshot%2Bat%2B2012-03-06%2B22%253A22%253A12.png" width="640" /></a>
<li>Now you will get the Device Screen Capture window.</li>
<a href="http://2.bp.blogspot.com/-uQS56mUZTyE/T1a1JtpzhcI/AAAAAAAACpU/Q1ycUrRRxlw/s1600/Screenshot%2Bat%2B2012-03-07%2B01%253A04%253A27.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="225" src="http://2.bp.blogspot.com/-uQS56mUZTyE/T1a1JtpzhcI/AAAAAAAACpU/Q1ycUrRRxlw/s400/Screenshot%2Bat%2B2012-03-07%2B01%253A04%253A27.png" width="400" /></a>
You can directly save the screen shot from this. Go to a different screen or application and click 'refresh' option to get a updated screenshot. It also gives rotate and copy to clipboard options. Click done to close the window. </ol>

The images are saved in PNG format and are small in size. I have tried screenshots of Youtube videos being played and it worked very well.

 <div class="my-amazon-links"><h3>Related Products:</h3>
 <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=B0061R2A1S&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazonwireless&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>  <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=1934356565&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=1449390501&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=1449389694&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe> <iframe src="http://rcm.amazon.com/e/cm?t=thelaccur-20&o=1&p=8&l=as1&asins=1118102274&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
