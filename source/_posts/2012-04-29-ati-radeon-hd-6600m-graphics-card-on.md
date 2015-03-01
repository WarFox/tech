---

title: "ATI Radeon HD 6600M Graphics card on Ubuntu 12.04 LTS [Solved]"
date: 2012-04-29T22:05:00+05:30
categories:
 - linux
 - ubuntu
---

I had a very bad time with my Dell Vostro laptop with ATI Radeon HD 6600M Graphics card on Fedora 16 - couldn't install graphics card driver at all. I tried installing both <i>kmod</i> and <i>akmod</i> drivers on my machine and both didn't work. Even thought of changing my Graphics card because of this. But continued with the same as I had several projects running and din't wanted to waste time configuring Graphics card.

<a href="http://4.bp.blogspot.com/-lK0GZvxCS8U/T51vVwcRSTI/AAAAAAAADOY/oQ-ToxwfwpI/s1600/ati-radeon-hd-3800.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="100" src="http://4.bp.blogspot.com/-lK0GZvxCS8U/T51vVwcRSTI/AAAAAAAADOY/oQ-ToxwfwpI/s400/ati-radeon-hd-3800.jpg" width="108" /></a>  <a href="http://1.bp.blogspot.com/-I8YW50FNYNY/T51uH-lyEUI/AAAAAAAADOM/Zv_ZCYZ_rSE/s1600/ubuntu.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="100" src="http://1.bp.blogspot.com/-I8YW50FNYNY/T51uH-lyEUI/AAAAAAAADOM/Zv_ZCYZ_rSE/s400/ubuntu.png" width="103" /></a>I just formatted the whole Fedora and installed Ubuntu. After several failed attempts, I have installed FGLRX drivers with help from Terry at <a href="http://linuxclicks.blogspot.co.uk/2011/10/dual-monitor-display-with-ubuntuxubuntu.html">http://linuxclicks.blogspot.co.uk/2011/10/dual-monitor-display-with-ubuntuxubuntu.html</a>
I had installed the drivers suggested by <strong>jockey-gtk</strong> so I had to uninstall them first using <code>jockey-gtk</code>. And restart the machine.

These are the step by step procedures

1. Uninstall any graphics drivers already installed and reboot the machine.

```
	sudo jokey-gtk
```

2. Now install the drivers using this command
```
sudo apt-get install fglrx-updates fglrx-amdcccle-updates```

3. Initialise aticonfiguration      
```sh 
sudo aticonfig --initial --input=/etc/X11/xorg.conf
```

4. Restart the system

Verify installation by using `fgl_glxgears` or `fglrxinfo`

```
$ fglrxinfo
display: :0.0  screen: 0
OpenGL vendor string: Advanced Micro Devices, Inc.
OpenGL renderer string: AMD Radeon 6600M and 6700M Series
OpenGL version string: 4.2.11627 Compatibility Profile Context
$ lspci -nn | grep VGA
00:02.0 VGA compatible controller [0300]: Intel Corporation 2nd Generation Core Processor Family Integrated Graphics Controller [8086:0116] (rev 09)
01:00.0 VGA compatible controller [0300]: Advanced Micro Devices [AMD] nee ATI Whistler [AMD Radeon HD 6600M Series] [1002:6741]
$ cat /etc/lsb-release 
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=12.04
DISTRIB_CODENAME=precise
DISTRIB_DESCRIPTION="Ubuntu 12.04 LTS"
$ gt;echo $DESKTOP_SESSION
ubuntu
$ /usr/lib/nux/unity_support_test -p
OpenGL vendor string:   ATI Technologies Inc.
OpenGL renderer string: AMD Radeon 6600M and 6700M Series
OpenGL version string:  4.2.11627 Compatibility Profile Context
Not software rendered:    yes
Not blacklisted:          yes
GLX fbconfig:             yes
GLX texture from pixmap:  yes
GL npot or rect textures: yes
GL vertex program:        yes
GL fragment program:      yes
GL vertex buffer object:  yes
GL framebuffer object:    yes
GL version is 1.4+:       yes
Unity 3D supported:       yes
```

Additionally I installed Compiz and enabled cube and wobbly windows!! I'm loving it! If you need to install Compiz, here is the Stackoverflow question that I followed: <a href="http://askubuntu.com/questions/86977/how-to-correctly-enable-desktop-cube-in-unity-3d">http://askubuntu.com/questions/86977/how-to-correctly-enable-desktop-cube-in-unity-3d</a>

I have decided to stick to Ubuntu although I have been using Fedora for a long long time. But Fedora had its vices like the infamous SELINUX, which always caused troubles. I am loving the Ubuntu Software Centre and Ubuntu One storage too :). 

<div class="my-amazon-links"><h3>Books you might like:</h3><a href="http://www.amazon.com/gp/product/B004Y1NMDI/ref=as_li_ss_il?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B004Y1NMDI&amp;linkCode=as2&amp;tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&amp;ASIN=B004Y1NMDI&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=thelaccur-20" /></a><img alt="" border="0" height="1" src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&amp;l=as2&amp;o=1&amp;a=B004Y1NMDI" style="border: none !important; margin: 0px !important;" width="1" />  <a href="http://www.amazon.com/gp/product/B004RYVI0Q/ref=as_li_ss_il?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B004RYVI0Q&amp;linkCode=as2&amp;tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&amp;ASIN=B004RYVI0Q&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=thelaccur-20" /></a><img alt="" border="0" height="1" src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&amp;l=as2&amp;o=1&amp;a=B004RYVI0Q" style="border: none !important; margin: 0px !important;" width="1" />  <a href="http://www.amazon.com/gp/product/0596804849/ref=as_li_ss_il?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=0596804849&amp;linkCode=as2&amp;tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&amp;ASIN=0596804849&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=thelaccur-20" /></a><img alt="" border="0" height="1" src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&amp;l=as2&amp;o=1&amp;a=0596804849" style="border: none !important; margin: 0px !important;" width="1" /> <a href="http://www.amazon.com/gp/product/B00817OWS0/ref=as_li_ss_il?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=B00817OWS0&amp;linkCode=as2&amp;tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&amp;ASIN=B00817OWS0&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=thelaccur-20" /></a><img alt="" border="0" height="1" src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&amp;l=as2&amp;o=1&amp;a=B00817OWS0" style="border: none !important; margin: 0px !important;" width="1" /> <a href="http://www.amazon.com/gp/product/0133017605/ref=as_li_ss_il?ie=UTF8&amp;camp=1789&amp;creative=390957&amp;creativeASIN=0133017605&amp;linkCode=as2&amp;tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&amp;ASIN=0133017605&amp;Format=_SL160_&amp;ID=AsinImage&amp;MarketPlace=US&amp;ServiceVersion=20070822&amp;WS=1&amp;tag=thelaccur-20" /></a><img alt="" border="0" height="1" src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&amp;l=as2&amp;o=1&amp;a=0133017605" style="border: none !important; margin: 0px !important;" width="1" />  
