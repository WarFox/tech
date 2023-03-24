---
layout: post
title: "How to get html color code from an image using MS Paint"
date: 2011-04-18T22:36:00+05:30
categories:
  - How To
tags:
 - Windows
 - How To
toc:
 enable: false
---

This is a quick tutorial for getting html color codes using MS Paint. The idea
is to get RGB codes from MS Paint and then convert the RGB color code values to
hexadecimal values. This tutorial is best suited for Windows 7 operators. Follow
the instructions:

1. Open the image in ms paint.

![](https://4.bp.blogspot.com/-LcD6ya5GM58/TzqDVxQvhvI/AAAAAAAACd4/s0AF2125lrc/s1600/1.png "Open image in MS Paint")

2. Use color picker to select the color on image for which you want the html code for. (Circled in red)

![](https://4.bp.blogspot.com/-xUku0PwA_30/TzqEZq4Ju8I/AAAAAAAACeI/eSt3p0SD3KM/s1600/2.png "use color picker")

3. Now that I have selected blue color note that 'Color 1' changes to blue. You should make sure the color you have selected and that shown in 'Color 1' are same.

![](https://4.bp.blogspot.com/-fV7Hz32nMK4/TzqE14yg4EI/AAAAAAAACeQ/2ckVhxWZuRs/s1600/3.png "Color 1 shows selected color")

4. Now we are ready to get the RGB code of the selected color.&nbsp; &nbsp; Click on the 'Edit Color's button to get the color palette.

![](https://1.bp.blogspot.com/-TVITK1D6RKw/TzqqZMjFpEI/AAAAAAAACeY/JhQx6lVxTHg/s1600/4.png "Click on Edit colors to get color palette")

![](https://4.bp.blogspot.com/-Ug7B7u37wxs/Tzqq6eQYReI/AAAAAAAACeg/zZpZCfXRDJs/s1600/5.png "Color palette")

5. That's it! Now we got the RGB values of the selected color. `RGB(14,149,255)` = the blue color we want.

6. To get the html color code convert each value to its hexadecimal notation. For those lazy people like me there are a lot of RGB to HTML converters available. The first result I got from <a href="https://lmgtfy.com/?q=rgb+to+html+code+converter" target="_blank">Google</a> is&nbsp;<a href="https://easycalculation.com/rgb-coder.php" style="text-align: left;">https://easycalculation.com/rgb-coder.php</a>

7. Now, for those who really want to convert RGB to html color code on their on, read the rest. Open Calculator. (Windows + R, calc)

8. Press Alt+3 or select 'Programmer' mode.

![](https://3.bp.blogspot.com/-BkHE7N2dJdM/Tzqvqk4hdTI/AAAAAAAACeo/gDMER4HO-lo/s1600/6.png "Select programmer mode")

9. Now calculator must have expanded with some extra features. Radio button for 'Dec' is selected by default.

![](https://3.bp.blogspot.com/-cDB44Y49UQg/TzqzU7l9svI/AAAAAAAACew/5knwZdtVM9o/s1600/7.png "Radio button Dec")

10. Type in each of the RGB values and select **Hex** for converting to hexadecimal value.

* 14 will be converted to E
* 149 will be converted to 95
* 255 will be converted to FF

So RGB(14,149,255) ---&gt; #0E95FF.

<i>Note that html color code is either 6 digits or 3 digits. So if you get single digit hexadecimal just add a zero on left.</i>

Fiddle here: <a href="https://jsfiddle.net/deepumohanp/9AA33/">https://jsfiddle.net/deepumohanp/9AA33/</a>

Share this tutorial if it helped you. And feel free to tell your opinions in comments. I read them to improve.
