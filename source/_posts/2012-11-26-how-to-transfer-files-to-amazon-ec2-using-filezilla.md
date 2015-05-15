---
layout: post
title: "How to transfer files to Amazon EC2 instance using FileZilla"
date: 2012-11-26T07:19:00+05:30
categories:
 - FTP
 - Filezilla
 - Amazon EC2
 - SFTP
---
##SFTP access to Amazon EC2 using FileZilla
When using cloud service like Amazon EC2, most trivial task will be to get your data/files up the cloud. Amazon offers secure ftp (SFTP) service and gives instructions how to use it on command line.
But if you have many files stored in separate locations, it will be easier to use a GUI application like FileZilla. And best thing about FileZilla is that it works on Mac, Linux and Windows. Ubuntu has also included FileZilla in their repository and you can install it on Ubuntu using:
``` bash
sudo apt-get install FileZilla
```
Before using FileZilla to upload files, make sure you follow the steps given in EC2 documentation, activate SSH and test it on the shell/command prompt.
Amazon uses authentication using key file and does not accept username & password combination, unlike other SFTP services. When you add a new site to FileZilla site manager, you wont find option to use key-file.
<a href="http://4.bp.blogspot.com/-WQVcu59WSsY/ULLL47GQclI/AAAAAAAADzQ/4awUSqaCPrM/s1600/Screenshot%2Bfrom%2B2012-11-26%2B01%253A18%253A03.png" imageanchor="1" style="margin-left:1em; margin-right:1em"><img border="0" height="322" width="400" src="http://4.bp.blogspot.com/-WQVcu59WSsY/ULLL47GQclI/AAAAAAAADzQ/4awUSqaCPrM/s400/Screenshot%2Bfrom%2B2012-11-26%2B01%253A18%253A03.png" /></a> 
You need to import the key file in another location. Go to <strong>Edit --> Settings</strong>, you will find the option to upload keyfile under the <strong>SFTP</strong> option.
<a href="http://2.bp.blogspot.com/-zopkUxkkJWM/ULLJIwAOtjI/AAAAAAAADyw/_2C_jo-bl0I/s1600/Screenshot%2Bfrom%2B2012-11-26%2B01%253A20%253A35.png" imageanchor="1" style="margin-left:1em; margin-right:1em"><img border="0" height="234" width="400" src="http://2.bp.blogspot.com/-zopkUxkkJWM/ULLJIwAOtjI/AAAAAAAADyw/_2C_jo-bl0I/s400/Screenshot%2Bfrom%2B2012-11-26%2B01%253A20%253A35.png" /></a>
FileZilla will convert *.pem file to .ppk file which is Putty Private Key format and save it in a location you specify.
<a href="http://1.bp.blogspot.com/-361jRMsDghg/ULLJQUnT8WI/AAAAAAAADy8/fcd-yQ6C3iE/s1600/Screenshot%2Bfrom%2B2012-11-26%2B01%253A21%253A06.png" imageanchor="1" style="margin-left:1em; margin-right:1em"><img border="0" height="135" width="400" src="http://1.bp.blogspot.com/-361jRMsDghg/ULLJQUnT8WI/AAAAAAAADy8/fcd-yQ6C3iE/s400/Screenshot%2Bfrom%2B2012-11-26%2B01%253A21%253A06.png" /></a>
Now you can use upload files to your EC2 instance without a glitch. FileZilla will automatically authenticate using the added key file. You may add other key files along with Amazon EC2 keyfile, it will still authenticate you.
