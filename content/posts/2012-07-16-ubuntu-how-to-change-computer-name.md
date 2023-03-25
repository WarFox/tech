---
layout: post
title: "How to Change the Computer Name of an Ubuntu machine"
slug: ubuntu-how-to-change-the-computer-name
date: 2012-07-16T09:07:00+05:30
categories:
 - linux
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
    <li>Change the name and save the file</li>
    <li>New hostname will take effect after the reboot.</li>
    <li>You will also need to update the <code>/etc/hosts</code> file with the same computername</li>
</ol>

Note that, the new name will take effect after you restart the machine. If the same hostname is configured on any other machine in the network, system may fail to boot or won't be available in the network.
