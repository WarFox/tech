---
title: Setting up Apache Airflow on AWS EC2 instance
date: 2017-01-20 15:53:45
categories:
 - help
tags:
 - aws
 - Airflow
---

Setting up Airflow on AWS Linux was not direct, because of outdated default packages. For example I had trouble using `setuid` in Upstart config, because AWS Linux AMI came with `0.6.5` version of Upstart.

AMI Version: amzn-ami-hvm-2016.09.1.20161221-x86_64-gp2 (ami-c51e3eb6)

## Install gcc, python-devel, and python-setuptools

``` sh
sudo yum install gcc-c++ python-devel python-setuptools
```

## Upgrade pip

``` sh
sudo pip install --upgrade pip
```

## Install airflow using pip

``` sh
sudo /usr/local/bin/pip install airflow[s3, hive, python]
```

## Create User and Group

``` sh
sudo groupadd airflow
sudo useradd airflow -g airflow
sudo passwd -d airflow
```

This will create a password less user `airflow`

## Initialize Airflow

``` sh
su airflow
cd ~
airflow initdb
```

## Test run

``` sh
su airflow
cd ~
airflow webserver
```

You should be able to view Airflow ui at port 8080

## Upstart Config for Airflow Webserver

Now let's use upstart to manage Airflow process and respawning

This Amazon Linux AMI comes with Upstart `0.6.5`, which is very sad. So `setuid` and `setgid` doesnot work.

{{< include_code file="/etc/init/airflow-webserver.conf" lang="SYSTEMD" >}}

You should be able to view `airflow-webserver` in `initctl list`

``` sh
sudo initctl list
```

## Start Airflow with upstart

``` sh
sudo initctl start airflow-webserver
```

You can find the process id at `/home/airflow/airflow/airflow-webserver.pid`

## Upstart Config for Airflow Scheduler

{{< include_code file="/etc/init/airflow-scheduler.conf" lang="SYSTEMD" >}}

## Start Airflow Scheduler with upstart

```
sudo initctl start airflow-scheduler
```

This should keep Airflow Scheduler running in the background and respawn it in case of failures.

## References

- https://github.com/apache/incubator-airflow/tree/master/scripts/upstart
- https://upstart.ubuntu.com/cookbook/
- https://airflow.incubator.apache.org/
- https://superuser.com/questions/213416/running-upstart-jobs-as-unprivileged-users
- https://serverfault.com/questions/357060/how-should-i-use-sudo-from-an-upstart-script
- https://unix.stackexchange.com/questions/192945/user-without-a-password-how-can-one-login-into-that-account-from-a-non-root-ac
