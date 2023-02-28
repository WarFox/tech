---
layout: post
title: "Windows batch script to create directory name DDMMYYYY"
date: 2011-09-07T14:55:00+05:30
tags:
 - Batch Script
 - Windows XP
---

Many times I had to create directories with date as name for different purposes.
I made this batch script to make that task easy. This is handy to keep all work
of a particular day in its own folder. The following batch script will create
directory of name format <b>DDMMYYYY</b>&nbsp;in the current path.

``` sh
:: Auto directory date batch (MMDDYYYY format)
:: First parses month, day, and year into mm , dd, yyyy formats and then combines to be DDMMYYYY
:: Setups %date% variable
:: @author Deepu Mohan Puthrote http://deepumohan.com
@echo off
FOR /F "TOKENS=1* DELIMS= " %%A IN ('DATE/T') DO SET CDATE=%%B
FOR /F "TOKENS=1,2 eol=/ DELIMS=/ " %%A IN ('DATE/T') DO SET mm=%%B
FOR /F "TOKENS=1,2 DELIMS=/ eol=/" %%A IN ('echo %CDATE%') DO SET dd=%%B
FOR /F "TOKENS=2,3 DELIMS=/ " %%A IN ('echo %CDATE%') DO SET yyyy=%%B
SET date=%dd%%mm%%yyyy%
echo New folder name %date%
MKDIR %date%
```

Copy and paste this code into a file with extension <b>bat</b>&nbsp;and save it
into a path where you want to create the directory. Double click on the batch
file to create the current day's directory.

You can also download the batch file from <a
href="http://files.deepumohan.com/winbatch/DDMMYYYY.bat" onClick="javascript:
_gaq.push(['_trackPageview', '/downloads/DDMMYYYY']);"> here</a>. You can safely
download it, it is hosted in safe server of&nbsp;<a
href="http://secure.hostgator.com/~affiliat/cgi-bin/affiliates/clickthru.cgi?id=deepumohanp">HostGator</a>.

In the [next post][next-post] I will post the batch script for creating
directory names with <b>DDMONYYYY</b> format. It will be pretty advanced which
uses temporary javascipt and batch file. See the post [here][next-post].

For those who are new to windows batch files, [visit][ms-resource] [this
site][ms-resource] by [Microsoft][ms-resource].

[next-post]:/windows-batch-script-to-create-directory-auto-file-name-ddmonyyyy-with-the-help-of-javascript/
[ms-resource]:http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/batch.mspx?mfr=true
