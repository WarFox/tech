---
title: Production ready Jenkins on AWS with ECS
date: 2017-12-14T00:08:23+00:00
draft: true
categories:
 - DevOps
tags:
- ansible
- terraform
---

By the end of this blog, you should have enough resources to build a Jenkins CI setup in your AWS account.

# Prerequisites
- You should have an AWS account, obviously

Setup ssh stuff in /var/lib/jenkins/.ssh. /var/lib/jenkins is the jenkins user home

TCP Port for JNLP Slave agents should NOT be disabled. Use random or fixed 50000.

If jenkins is unable to connect between jenkins master and slave https://wiki.jenkins.io/display/JENKINS/Remoting+issue

Autoscaling group instances can join a cluster by using ECS Agent config in /etc/ecs/ecs.config

Jenkins Agent to master security https://wiki.jenkins.io/display/JENKINS/Slave+To+Master+Access+Control

Connect Public load balancer to private subnet

Script Security:
```
17:16:15 Processing DSL script seedJobs.groovy
17:16:15 ERROR: script not yet approved for use
17:16:15 Finished: FAILURE
```

# References
- https://getintodevops.com/blog/using-ansible-with-terraform
- https://docs.aws.amazon.com/AWSGettingStartedContinuousDeliveryPipeline/latest/GettingStarted/CICD_Jenkins_Pipeline.html
- https://blog.nimbleci.com/2016/10/11/how-to-deploy-jenkins-completely-pre-configured/
- https://wiki.jenkins.io/display/JENKINS/Amazon+EC2+Container+Service+Plugin
- https://codeheaven.io/an-introduction-to-ansible/
- https://stelligent.com/2016/08/24/containerized-ci-solutions-in-aws-part-1-jenkins-in-ecs/
- https://opencredo.com/terraform-infrastructure-design-patterns/
- https://plugins.jenkins.io/scalable-amazon-ecs
- https://cloudway.io/post/jenkins-in-ec2-container-service/
- https://medium.com/comparethemarket/cloudformation-to-terraform-da31883e8345
- https://blog.nimbleci.com/2016/08/31/how-to-build-docker-images-automatically-with-jenkins-pipeline/
- https://medium.com/@pavelbely/deploying-dockerized-multi-container-application-to-aws-using-jenkins-833a998ce6ed
- https://stackoverflow.com/questions/38969044/jenkins-kubernetes-jenkins-slave-node-is-offline/38969094
- https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/
- https://github.com/aws/amazon-ecs-agent
- https://blog.dcycle.com/blog/51/connecting-jenkins-and-git/
- https://opencredo.com/kubernetes-aws-terraform-ansible-2/
- https://www.digitalocean.com/community/tutorials/how-to-manage-multistage-environments-with-ansible
- https://stackoverflow.com/questions/35202993/how-can-i-connect-my-autoscaling-group-to-my-ecs-cluster
- https://wiki.gentoo.org/wiki/SSH_jump_host
- https://raymii.org/s/tutorials/Ansible_-_Only-do-something-if-another-action-changed.html
- https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-ec2-instance.html
- https://support.cloudbees.com/hc/en-us/articles/236353968-How-to-setup-Amazon-Classic-ELB-as-the-load-balancer-of-CJOC-
- https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/

- https://github.com/jch254/terraform-ecs-autoscale-alb

- https://www.nginx.com/blog/tcp-load-balancing-udp-load-balancing-nginx-tips-tricks/
- https://looksok.wordpress.com/2016/02/28/automate-jenkins-job-creation-with-dsl/
- https://stackoverflow.com/questions/43699190/seed-job-asks-for-script-approval-in-jenkins
- https://medium.com/@YadavPrakshi/automate-zero-downtime-deployment-with-amazon-ecs-and-lambda-c4e49953273d
