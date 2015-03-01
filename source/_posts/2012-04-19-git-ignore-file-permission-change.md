---

title: "git:: ignore file permission (mode,chmod) change"
date: 2012-04-19T01:03:00+05:30
categories:
 - git
---

Try this command.

```
git config core.filemode false
```

git will ignore the file permission(mode) changes made using chmod command 

```
From git-config(1):
       core.fileMode
           If false, the executable bit differences between the index and the
           working copy are ignored; useful on broken filesystems like FAT.
           See git-update-index(1). True by default.
```
  

<div class="my-amazon-links"><h3>Related Books:</h3><a href="http://www.amazon.com/gp/product/1430218339/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=1430218339&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=1430218339&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=1430218339" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/0596520123/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596520123&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=0596520123&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0596520123" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />  <a href="http://www.amazon.com/gp/product/1934356158/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=1934356158&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=1934356158&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=1934356158" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />  <a href="http://www.amazon.com/gp/product/B0067QNR56/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0067QNR56&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=B0067QNR56&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=B0067QNR56" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />  <a href="http://www.amazon.com/gp/product/B0071Q26O4/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0071Q26O4&linkCode=as2&tag=thelaccur-20"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&ASIN=B0071Q26O4&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thelaccur-20" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=B0071Q26O4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />    
