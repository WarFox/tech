---
title: "ATI Radeon HD 6600M Graphics card on Ubuntu 12.04 LTS [Solved]"
date: 2012-04-29T22:05:00+05:30
tags:
 - linux
 - ubuntu
toc:
 enable: false
---

I had a very bad time with my Dell Vostro laptop with ATI Radeon HD 6600M Graphics card on Fedora 16 - couldn't install graphics card driver at all. I tried installing both <i>kmod</i> and <i>akmod</i> drivers on my machine and both didn't work. Even thought of changing my Graphics card because of this. But continued with the same as I had several projects running and din't wanted to waste time configuring Graphics card.

![](https://4.bp.blogspot.com/-lK0GZvxCS8U/T51vVwcRSTI/AAAAAAAADOY/oQ-ToxwfwpI/s1600/ati-radeon-hd-3800.jpg)
![](https://1.bp.blogspot.com/-I8YW50FNYNY/T51uH-lyEUI/AAAAAAAADOM/Zv_ZCYZ_rSE/s400/ubuntu.png)

I just formatted the whole Fedora and installed Ubuntu. After several failed attempts, I have installed FGLRX drivers with help from Terry at <a href="https://linuxclicks.blogspot.co.uk/2011/10/dual-monitor-display-with-ubuntuxubuntu.html">https://linuxclicks.blogspot.co.uk/2011/10/dual-monitor-display-with-ubuntuxubuntu.html</a>

I had installed the drivers suggested by <strong>jockey-gtk</strong> so I had to uninstall them first using <code>jockey-gtk</code>. And restart the machine.

These are the step by step procedures

1. Uninstall any graphics drivers already installed and reboot the machine.

```
	sudo jokey-gtk
```

2. Now install the drivers using this command
```
sudo apt-get install fglrx-updates fglrx-amdcccle-updates
```

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

Additionally I installed Compiz and enabled cube and wobbly windows!! I'm loving it! If you need to install Compiz, here is the Stackoverflow question that I followed: <a href="https://askubuntu.com/questions/86977/how-to-correctly-enable-desktop-cube-in-unity-3d">https://askubuntu.com/questions/86977/how-to-correctly-enable-desktop-cube-in-unity-3d</a>

I have decided to stick to Ubuntu although I have been using Fedora for a long long time. But Fedora had its vices like the infamous SELINUX, which always caused troubles. I am loving the Ubuntu Software Centre and Ubuntu One storage too :).


