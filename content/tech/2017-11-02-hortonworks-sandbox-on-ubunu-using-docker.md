---
title: "Hortonworks Sandbox on Ubuntu using docker"
date: 2017-11-02 16:11:53
tags:
- Hortonworks
- Ubuntu
---

In a [previous post][3], I talked about installing Hortonworks Sandbox on a Mac machine. That was straight forward.

In this blog 'm going to talk about installing the Hortonworks Sandbox manually on a Linux VM.

## A little background about Docker base device size ##

The first time docker is started, it sets up a base device with a default size of **10GB**. All future images and containers would be a snapshot of this base device.

Base size is the maximum size that a container/image can grow to. By default docker limit containers to 10G. In Devicemapper, new container/images take zero size and grow up to the maximum size. Changing the base size will not actually change the physical usage of containers unless they grow larger than 10 GB.

You can view this information with the following command

``` sh
sudo docker info
```

Since Hortonworks image is greater than 10GB, we need to increase the storage base size. We can do this by changing the storage-driver to overlay and increasing the dm.bazesize.

## Increase the docker base device size on Ubuntu ##

For this we need to set `storag-opt=dm.basesize` and change `storage-diver` to `overlay`.

Assuming we have `Systemd` based setup

* First create directory for customising docker service

``` sh Make systemd directory for customising docker
sudo mkdir /etc/systemd/system/docker.service.d/
```

* Edit `/etc/systemd/system/docker.service.d/docker.conf`

```
sudo vi /etc/systemd/system/docker.service.d/docker.conf
```

``` sh /etc/systemd/system/docker.service.d/docker.conf
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd --graph="/mnt/docker-data" --storage-driver=overlay --storage-opt=dm.basesize=30G
```

Here the first line with empty `ExecStart` is necessary to clear previous configurations.
Also note that we are increasing the `dm.basesize` to 30G

IMPORTANT: Make sure there is enough space in /mnt/docker-data

## Reload systemd daemon and restart docker ##

After editing docker service definition for systemd we need to releoad systemd daemon and restart docker, for the new settings to take effect.

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

If you check `sudo docker info`, Storage Driver should be `overlay` and Docker Root Dir should be `/mnt/docker-data`

{% img /downloads/images/hdp-docker-image/docker-info.png 400 500 "Docker info "%}

Now we have setup docker to work with Hortonworks Sandbox.

## Download the Hortonworks Sandbox Docker image ##

Download the docker image. It's a huge one 12GB, use high bandwidth network :)

```sh
wget https://downloads-hortonworks.akamaized.net/sandbox-hdp-2.6.1/HDP_2_6_1_docker_image_28_07_2017_14_42_40.tar
```

## Download the Hortonworks Script ##

```sh
wget https://raw.githubusercontent.com/hortonworks/data-tutorials/master/tutorials/hdp/sandbox-port-forwarding-guide/assets/start-sandbox-hdp.sh
```

## Load the sandbox image ##

```
docker load -i HDP_2_6_1_docker_image_28_07_2017_14_42_40.tar
```

![Docker load Hortonworks Sandbox image][3]

This is a heavy task. Go get your coffee now because it will take some time to load the `docker` image.

This step would fail if you did not increase the base device size.

{% img /downloads/images/hdp-docker-image/no-space-left-on-device.png "No space left on the device" %}

After it is loaded you should see `sandbox-hdp` in your `docker images` list.

{% img img-responsive /downloads/images/hdp-docker-image/docker-images-sandbox-hdp.png "docker images - sandbox-hdp" %}

## Update /etc/hosts file ##

Add the following to `/etc/hosts`

```sh
127.0.0.1   localhost   sandbox.hortonworks.com

```

## Run the Hortonworks Sandbox startup script ##

```sh
chmod +x ./start-sandbox-hdp.sh
./start-sandbox-hdp.sh
```

{% img img-responsive /downloads/images/hdp-docker-image/start-sandbox-hdp-2-6-container.png 450 600 "Start Hortonworks Data Platform Sandbox" %}

Again this will take some time

## Access Hortonworks Sandbox ##

Go to http://sandbox.hortonworks.com:8888/

This Sandbox comes with a lot of components like Ambari, Ranger, Hive, Spark etc. installed and configured.

## References ##
* [How to modify the default docker configuration on Linux][1]
* [Hortonworks Sandbox and install guide][2]

[1]: https://community.hortonworks.com/content/kbentry/65714/how-to-modify-the-default-docker-configuration-on.html
[2]: https://hortonworks.com/tutorial/sandbox-deployment-and-install-guide/section/3/
[3]: /tech/hortonworks-sandbox-mac-using-docker/
