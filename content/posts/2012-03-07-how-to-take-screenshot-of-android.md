---
title: "How to take screenshot of Android device (developer edition)"
date: 2012-03-07T06:44:00+05:30
categories:
 - How To
tags:
 - Android
 - Google
---

Older versions of Andriod doesn't give a simple option to take screen shot
directly from the device. Apple's iPhone has a handy feature which allows to
take screen shots by pressing Power+Home button. From Android 2.2 (Froyo)
onwards Android devices gives and option to take screenshot from the device
itself by using Home + Power button combo. This post is android developers
method for getting screen shot from Android devices.

It took some time and searches to figure out how to take screen shots from
Android device. You need to have android development kit installed and
configured to take screen shots using the official method.

<a
href="https://4.bp.blogspot.com/-vsUHIXD3zIU/T1asFbGOnXI/AAAAAAAACoY/w1sjj8m9QKo/s1600/device-2012-03-06-223556.png"
imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0"
height="320"
src="https://4.bp.blogspot.com/-vsUHIXD3zIU/T1asFbGOnXI/AAAAAAAACoY/w1sjj8m9QKo/s320/device-2012-03-06-223556.png"
width="214" alt="Android home screen" /></a>

It was easy for me once I figured out the method, as I had already installed [android-sdk](https://developer.android.com/sdk/index.html) in my machine. I am using [SpringSource Tool Suite](https://www.springsource.com/developer/sts/) with [ADT](https://developer.android.com/sdk/eclipse-adt.html) plugin for development which is a [Spring](https://www.springsource.com/) flavoured [Eclipse](https://www.eclipse.org/)

If you already have them installed great, otherwise you might want to get these installed in your machine. Download option and installation instructions can be found in the following links

* [Android SDK & USB drivers](https://developer.android.com/sdk/index.html)
* [Eclipse](https://www.eclipse.org/downloads/) or [SpringSource Tool Suite](https://www.springsource.org/springsource-tool-suite-download/) (Optional)
* [ADT plugin](https://developer.android.com/sdk/eclipse-adt.html#installing) for Eclipse or STS (Optional)

_By optional I mean, Eclipse and ADT is not required for taking the screen shot, which is the purpose of this blog post_

Once you have it ready, follow these steps

1. Enable **USB debugging** in the android device, by going to **Settings** > **Applications** > **Development** > and checking the check box that says **USB debugging**.
2. Connect your Android device to your machine
3. Start ddms(Dalvik Debug Monitor Server) either from **Android-SDK/tools** folder or from Eclipse

![Android SDK tools folder](https://1.bp.blogspot.com/-V51Zxx1Zz10/T1aws4UlF4I/AAAAAAAACo8/-gAV419ps7k/s640/Screenshot%2Bat%2B2012-03-07%2B00%253A49%253A14.png "Android SDK tools folder")

![Start DDMS](https://2.bp.blogspot.com/-_ywKvPK84c8/T1avo9sG5CI/AAAAAAAACok/H3Ga0IxBqis/s640/Screenshot%2Bat%2B2012-03-06%2B22%253A19%253A43.png "Start DDMS")

4. That will open ddms screen like this

![DDMS Screen](https://4.bp.blogspot.com/-Sf0q1hUR3fY/T1av6kh9N5I/AAAAAAAACow/ZLU92_iluio/s640/Screenshot%2Bat%2B2012-03-06%2B22%253A22%253A12.png "DDMS Screen")

Here you will be able to see the device that you have connected. You can ignore the messages and warnings that are continuously updated at the bottom.

5.  Click on the camera icon or screen capture option under the **Device** menu

![Click on camera icon](https://2.bp.blogspot.com/-8a5KnIB3x_s/T1azENhdsLI/AAAAAAAACpI/pR5RbgTVcR8/s640/Screenshot%2Bat%2B2012-03-06%2B22%253A22%253A12.png "Click on camera icon")

6.  Now you will get the Device Screen Capture window.

![Device Screen Capture Window](https://2.bp.blogspot.com/-uQS56mUZTyE/T1a1JtpzhcI/AAAAAAAACpU/Q1ycUrRRxlw/s1600/Screenshot%2Bat%2B2012-03-07%2B01%253A04%253A27.png "Device Screen Capture Window")

You can directly save the screen shot from this. Go to a different screen or
application and click 'refresh' option to get a updated screenshot. It also
gives rotate and copy to clipboard options. Click done to close the window.

The images are saved in PNG format and are small in size. I have tried
screenshots of Youtube videos being played and it worked very well.
