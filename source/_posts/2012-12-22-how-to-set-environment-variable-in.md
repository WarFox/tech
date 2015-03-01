---

title: "How to set environment variable in Ubuntu "
date: 2012-12-22T20:52:00+05:30
categories:
 - linux
 - ubuntu
---
If you just need to set an environment variable for the current session you can always use <code>export ENV_VAR=VALUE</code> command. But most of the cases you will need to persist that variable.
Ubuntu no longer recommends setting environment variables in <code>~/.profile</code> file. Instead you have to set it in <code>~/.pam_environment</code>. You need to re-login for this to take effect.
The environment variables are read from <code>~/.pam_environment</code> file and is set when a user logs in. Read Ubuntu documentation on [Environment Variables][1] [here][1].
The file <code>~./pam_environment</code> might not be already available depending upon your configuration. In that case you need to create a new file. Make sure you create it in the home directory.
``` bash
touch ~/.pam_environment
```
This command will create a new empty <code>.pam_environment</code> file in your home directory. Note that this is a hidden file and won't be visible in the file browser unless you have selected to show hidden files.
Next thing you will do is to open the file and just write your environment variables as a key-value pair, like this <code>NAME=VALUE</code>, one per line. <code>NAME</code> should not have any spaces.
``` bash
vi ~/.pam_environment
```
A sample .pam_environment file:
``` bash
#the hash(#) sign at the beginning of the line makes it a comment line.
PATH=$PATH:~/bin
DATABASE_URL=postgres://heroku:heroku@localhost/herokuappdb
```
####Advanced configuration
There are two possible options for each of the environment variables - <code>DEFAULT</code> and <code>OVERRIDE</code>. The <code>DEFAULT</code> option, if provided, sets the default value of an environment variable, else "" is assumed. And this DEFAULT value can be overridden by using the <code>OVERRIDE</code>. Again if <code>OVERRIDE</code> is not given "" value is assumed.
``` bash
    PATH    DEFAULT=$PATH    OVERRIDE=$PATH:~/bin
```    
You can read more and view some examples on your system by typing the following command on your terminal.
``` bash
cat /etc/security/pam_env.conf
```
###Some Ubuntu books you should check out:
<a href="http://www.amazon.com/gp/product/0133017605/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0133017605"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=0133017605&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0133017605" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/B004Y1NMDI/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B004Y1NMDI"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=B004Y1NMDI&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=B004Y1NMDI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> <a href="http://www.amazon.com/gp/product/0672336243/ref=as_li_ss_il?ie=UTF8&tag=thelaccur-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0672336243"><img border="0" src="http://ws.assoc-amazon.com/widgets/q?_encoding=UTF8&Format=_SL160_&ASIN=0672336243&MarketPlace=US&ID=AsinImage&WS=1&tag=thelaccur-20&ServiceVersion=20070822" ></a><img src="http://www.assoc-amazon.com/e/ir?t=thelaccur-20&l=as2&o=1&a=0672336243" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> 

[1]:https://help.ubuntu.com/community/EnvironmentVariables "Environment variables in Ubuntu"