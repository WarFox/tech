---
title: "Install additional Python packages on Azure HDInsights cluster"
Date: 2017-11-14 12:51:35
tags:
- Python
- Azure
- HDInsights
---
An HDInsights cluster consists of several nodes. A PySpark script may run on any one of those nodes.

In order to install a package on HDInsights we need to use Script Actions

# Use Script Action
Script Action allows you to run a shell script on all nodes of an Azure cluster. You may run the script action when you create the cluster or while the cluster is running.

You may also persist a Script Action in the cluster, so that it is run on every new node that is added to the cluster.

# Pip install script action

``` sh pip-install-upgrade-packages.sh
#!/usr/bin/env bash

/usr/bin/anaconda/bin/pip install --upgrade pip $@
```

This script will install and update the given packages in the parameters section.

For example, you may install a new version of `Plotly` to use in your `Jupyterhub` notebooks.

# Upload your Script Action
Your script action must be in a location accessible to the cluster. It could be anywhere, but let's upload it to storage account.

Upload your Script Action to a Storage Account that your chosen HDInsights have access to.

Bash script URI https://<my-storage-account>.blob.core.windows.net/script-actions/pip-install-upgrade-packages.sh

# Steps
* Select the cluster that you want to run the Script action in Azure portal
* On the blade under Configuration, you can find Script Actions
* Select that and then click Submit New
* Select custom
* Give a name
* Select nodes to install
* In the parameters section give list of packages to install separated by spaces

# ARM Template
We can also add this script to HDInsights ARM template in the `computeProfile` as `scriptActions`.

``` json
  "computeProfile": {
    "roles": [
      {
        "name": "headnode",
        "scriptActions": [
          {
            "name": "pip-install-upgrade-packages",
            "uri": "https://<my-storage-account>.blob.core.windows.net/script-actions/pip-install-upgrade-packages.sh",
            "parameters": "plotly"
          }
        ]
      },
      {
        "name": "workernode",
        "scriptActions": [
          {
          "name": "pip-install-upgrade-packages",
            "uri": "https://<my-storage-account>.blob.core.windows.net/script-actions/pip-install-upgrade-packages.sh",
            "parameters": "plotly"
          }
        ]
      }
    ]
  }
```

__NB: You may create other Script Actions to do any kind of customisations on your HDInsights Cluster_

# References:
* https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-apache-spark-python-package-installation
* https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-apache-spark-jupyter-notebook-use-external-packages
* https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux
