---
title: AWS SNS error - Invalid parameter
date: 2016-05-12 11:31:15
categories: development
tags:
 - aws
 - sns
---

So I was playing with AWS Lambdas, and wanted to setup SNS notification for that.

```
aws sns publish --topic-arn arn:aws:sns:eu-west-1:22834709971:my-awesome-sns-topic --subject 'Subject' --message 'Hello, hello!'
```

<!-- more -->

However got stuck on the following error - it just says Invalid Parameter

```
An error occurred (InvalidParameter) when calling the Publish operation: Invalid parameter: TopicArn
```

Turns out this has to do with my region settings.

I'd created SNS in `eu-west-1` region (Ireland). But default region on my account was `us-west-1`
So, clearly that is a conflict.

Solution is easy, I just had to set region in `~/.aws/config`

```
[default]
output = text
region = eu-west-1
```

That's it!
