---
layout: post
title: "emacs:: Show line numbers in the left margin"
date: 2013-06-14T11:09:00+05:30
categories:
 - emacs
---
So, I recently started using <code>emacs</code> as a text editor, instead of <code>vi</code>.
It didn't seem easy to get things up straight at start.
But gradually I understood why many experienced developers prefer <code>emacs</code>: <em> 
it is highly customisable and extensible</em>.
<code>vi</code> gives you easy to use command to show line numbers, <code>:set nu</code> and you are done.
That is not the case with <code>emacs</code>, and hence this blog post.
You need to install linum package and enable <code>linum-mode</code> for this.
Make sure you have the latest version of <code>emacs</code>, at the time of writing 24.3,
so that you have emacs package manager ready. Add marmalade and melba to the package
archive list by adding the following to your <code>~/.emacs.d/init.el</code>.
```lisp
(require 'package)
(add-to-list 'package-archives'
    ("marmalade" . "http://marmalade-repo.org/packages/") t)
(add-to-list 'package-archives'
    ("melpa" . "http://melpa.milkbox.net/packages/") t)
(package-initialize)                                                                                      
```
Now list the packages using <code>M-x list-packages</code> command.
{{ 'image-name.gif' | http://3.bp.blogspot.com/-C9vwda5ezn4/UbquDn_xIgI/AAAAAAAAEB8/xJ9Oludx5EA/s1600/Screen+Shot+2013-06-14+at+11.12.30+AM.png | img_tag }}
You should get a list of packages like this.
{{ 'image-name.gif' | http://2.bp.blogspot.com/--vuorjxpGOg/UbqupLSrq3I/AAAAAAAAECE/lGaKi8lnvFY/s1600/Screen+Shot+2013-06-14+at+11.16.41+AM.png | img_tag }}
Next locate <code>linum</code> package using <code>Ctrl-s</code> command.
You may have to repeatedly use <code>Ctrl-s</code> to get the right package.
It would say <em>display line numbers in the left margin</em>.

{{site.url}}
![](http://1.bp.blogspot.com/-_4b9KgqIPI8/Ubqxfmw1-CI/AAAAAAAAECU/0UogSTSbDvk/s1600/Screen+Shot+2013-06-14+at+11.28.13+AM.png) 

Select and install that using arrow keys and return key.
You can enable linum-mode right away using `M-x linum-mode` command.

{% img http://1.bp.blogspot.com/-a9FUTdLh8DM/Ubq3O7P_R8I/AAAAAAAAECk/6PU8WgocLVE/s1600/Screen+Shot+2013-06-14+at+11.54.24+AM.png "linum" "linum" %}

### References:
* [EmacsWiki:LineNumbers] [1]
* [SuperUser:How do I display line numbers in emacs (not in the mode line)?] [2]
* [ErgoEmacs:How to Set Emacs's User Interface to Modern Conventions] [3]
  [1]: http://goo.gl/DlqUI        "EmacsWiki:LineNumbers"
  [2]: http://goo.gl/VhUc7  "How do I display line numbers in emacs"
  [3]: http://goo.gl/w8Tqn    "How to Set Emacs's User Interface to Modern Conventions"
