---
layout: post
title: "How to set environment variable in Ubuntu "
date: 2012-12-22T20:52:00+05:30
categories: linux
tags:
 - linux
 - ubuntu
---
If you just need to set an environment variable for the current session you can always use `export ENV_VAR=VALUE` command. But most of the cases you will need to persist that variable.

Ubuntu no longer recommends setting environment variables in `~/.profile` file. Instead you have to set it in `~/.pam_environment`. You need to re-login for this to take effect.

The environment variables are read from `~/.pam_environment` file and is set when a user logs in. Read Ubuntu documentation on [Environment Variables][1] [here][1].
The file `~./pam_environment` might not be already available depending upon your configuration. In that case you need to create a new file. Make sure you create it in the home directory.

```sh
touch ~/.pam_environment
```

This command will create a new empty `.pam_environment` file in your home directory. Note that this is a hidden file and won't be visible in the file browser unless you have selected to show hidden files.
Next thing you will do is to open the file and just write your environment variables as a key-value pair, like this `NAME=VALUE`, one per line. `NAME` should not have any spaces.


``` sh ~/.pam_environment
vi ~/.pam_environment
```

A sample `.pam_environment` file:

``` sh
#the hash(#) sign at the beginning of the line makes it a comment line.
PATH=$PATH:~/bin
DATABASE_URL=postgres://heroku:heroku@localhost/herokuappdb
```

## Advanced configuration
There are two possible options for each of the environment variables - `DEFAULT` and `OVERRIDE`. The `DEFAULT` option, if provided, sets the default value of an environment variable, else "" is assumed. And this DEFAULT value can be overridden by using the `OVERRIDE`. Again if `OVERRIDE` is not given "" value is assumed.

``` sh
    PATH    DEFAULT=$PATH    OVERRIDE=$PATH:~/bin
```

You can read more and view some examples on your system by typing the following command on your terminal.

``` sh
cat /etc/security/pam_env.conf

```

## References
* [Environment variables in Ubuntu][1]

[1]:https://help.ubuntu.com/community/EnvironmentVariables "Environment variables in Ubuntu"
