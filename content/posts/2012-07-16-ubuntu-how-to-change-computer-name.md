---
layout: post
title: "Ubuntu:: How to Change the Computer Name"
date: 2012-07-16T09:07:00+05:30
categories: linux
tags:
 - linux
 - ubuntu
---
Changing computer name in Ubuntu is easy.In Linux computer name is represented as 'hostname' and this name can be used to identify a Linux box in a network. To display current hostname on your linux machine

```
$ hostname
```

### To change hostname for current session

```
$ hostname new_host_name.my_domain
```

### To change hostname permanently
<ol>
    <li>Open /etc/hostname file as root</li>
    ```
    	$ sudo vi /etc/hostname
    ```
    <li>Change the name and save the file</li>
    <li>New hostname will take effect after the reboot.</li>
    <li>You will also need to update the <code>/etc/hosts</code> file with the same computername</li>
</ol>

Note that, the new name will take effect after you restart the machine. If the same hostname is configured on any other machine in the network, system may fail to boot or won't be available in the network.

<div class="my-amazon-links"><h3>Books you might like:</h3>  <a href="http://www.amazon.com/gp/product/0131367366/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=0131367366&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=0131367366&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0131367366" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/B004RYVI0Q/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=B004RYVI0Q&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=B004RYVI0Q&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=B004RYVI0Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/0470770198/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=0470770198&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=0470770198&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0470770198" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/1118004426/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=1118004426&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=1118004426&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=1118004426" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/1593273894/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=1593273894&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=1593273894&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=1593273894" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
