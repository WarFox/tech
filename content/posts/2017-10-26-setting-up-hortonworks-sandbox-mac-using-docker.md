---
title: "Setting up Hortonworks Sandbox on Mac using Docker"
date: 2017-10-26 15:49:57
tags:
- Hortonworks
---

[Hortonworks][2] provides an official Data Platform Sandbox docker image that
can help you learn the Hortonworks stack. I recently setup a Hortonworks Sandbox
on my macOS.

## Increase Docker memory for macOS ##

Hortonworks Sandbox is a heavy container, with lots of components running on it.
They recommend at least 8GB of RAM.

Open Docker preferences and select the Advanced tab. Increase the dedicated
memory to at least 8GB of RAM or more.

{{< figure src="/tech/images/hdp-docker-image/docker-increase-memory-mac.png" width=300 height=600 alt="Increase Docker Memory on Mac" title="Configure Docker Memory" >}}

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

``` sh
docker load -i HDP_2_6_1_docker_image_28_07_2017_14_42_40.tar
```

![Docker load Hortonworks Sandbox image](/tech/images/hdp-docker-image/docker-load-hdp-docker-image.png "Docker Load Hortonworks Sandbox")

This is a heavy task. Go get your coffee now because it will take some time to load the `docker` image.

After it is loaded you should see `sandbox-hdp` in your `docker images` list.

![docker images - sandbox-hdp ](/tech/images/hdp-docker-image/docker-images-sandbox-hdp.png "docker images - sandbox-hdp")

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

{{< figure src="/tech/images/hdp-docker-image/start-sandbox-hdp-2-6-container.png" width="450" height="600" alt="Start Hortonworks Data Platform Sandbox" >}}

Again this will take some time... ⏲

## Access Hortonworks Sandbox ##

Go to https://sandbox.hortonworks.com:8888/

This Sandbox comes with a lot of components like Ambari, Ranger, Hive, Spark etc. installed and configured.

## References  ##
* [Hortonworks Sandbox and install guide][1]

[1]: https://hortonworks.com/tutorial/sandbox-deployment-and-install-guide/section/3/
[2]: https://hortonworks.com/
