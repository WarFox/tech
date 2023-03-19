---
title: "SSH config tips"
date: 2017-10-30 16:21:55
tags:
- ssh
- DevOps
---

## SSH config file ##

`~/.ssh/config` file can be very useful to configure settings for your ssh connections.

For example you may configure default `User` and `IdentityFile` for a domain using.

```sh ~/.ssh/config
Host example.com
   IdentityFile /path/to/identityfile
   User defaultUserName
```

## Multiple Identities on same server ##

I use trick for configuring multiple identities on Bitbucket server.

```sh ~/.ssh/config
Host personal.bitbucket.org
   HostName bitbucket.org
   User git
   IdentityFile ~/.ssh/id_rsa

Host work.bitbucket.org
   HostName bitbucket.org
   User git
   IdentityFile ~/.ssh/id_rsa_work
```

And you need to use `personal.bitbucket.org` and `work.bitbucket.org` when you want to ssh into them.

Bitbucket has wild card domain redirection, that's why this works for Bitbucket.

For other domains, you may need to add an entry into `/etc/hosts`.

## Specify Port ##

If you have configured your SSH server to use a different port instead of `22`, lets say `2222`

```sh ~/.ssh/config
Host my.server.fqdn
   Port 2222
```

## Force password authentication ##

You can force Password Authentication by using

```sh ~/.ssh/config
ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no user@host
```

## Port forwarding ##

This is my favourite of all.

```
ssh -L 9000:mydb.host:9000 user@example.com
```

This can be very useful for accessing a port behind a firewall, may be for database.

If you are using AWS EMR or Hortworks Sanbdox, then you will need access to more than one port through ssh.

Using `-L` command line option can be very lengthy, instead you could use `LocalForward` directive in the `~/.ssh/config`

```sh ~/.ssh/config
# This will allow us to use port 8080 on the local machine
# in order to access example.com at port 80 from the remote machine
Host local_to_remote
    LocalForward 8080 example.com:80

# This will allow us to offer access to internal.com at port 443
# to the remote machine through port 7777 on the other side
Host remote_to_local
    RemoteForward 7777 internal.com:443
```

## References ##
* [How to configure custom connection options for your ssh client][1]
* [SSH Tunnel - Local and remote port forwarding explained with example][2]

[1]: https://www.digitalocean.com/community/tutorials/how-to-configure-custom-connection-options-for-your-ssh-client
[2]: https://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html
