---
layout: post
title: "How to change extension of multiple files (bash script)"
date: 2013-10-14T17:17:00+05:30
---

The following is the script I use in Macbook (Mountain Lion). It should work on most /*nix shell like `bash`, `csh`, `ksh` etc.
However, I have tested it only in `bash`.

{{< include_code file="bash/chext" title="Script to change extension for multiple files" lang="bash" >}}

Save this file as "chext", make it executable `chmod +x chext` and add to your `$PATH`.

Now you can use it like this:

``` bash Usage
cd path-to-dir
chext oldextension newextension
```
``` bash Example
chext JPG jpg
```

### Reference:

* [http://forums.appleinsider.com/t/106498/how-to-change-the-file-extension-of-multiple-files/](http://forums.appleinsider.com/t/106498/how-to-change-the-file-extension-of-multiple-files/)
* [http://stackoverflow.com/questions/15829702/how-to-change-the-extension-of-multiple-files-using-bash-script/](http://stackoverflow.com/questions/15829702/how-to-change-the-extension-of-multiple-files-using-bash-script)
* [http://kb.iu.edu/data/abec.html](http://kb.iu.edu/data/abec.html)
