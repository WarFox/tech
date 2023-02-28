---
layout: post
author: "Deepu Mohan Puthrote"
title: "A pattern to use RequireJS config in a separate file"
date: 2014-12-23T11:48:47+00:00
comments: true
categories:
 - Programming
---

If you have used RequireJS, you most definitely have come across this: Repeatation of requirejs configuration.

You end up repeating the shims and paths in multiple locations. We can minimise this by using `requirejs.config(config)` method.

requirejs.config() will help you define or override your dependencies configuration.

``` js
requirejs.config({'baseUrl': '/my/app/url/'});
```

Here is an examlpe on how I use `requirejs.config` method for minimising repeatation.

First let us define the reusable configuration file. Lets name it `rconfig.js`.

{{< include_code "js/requirejs-common-config/common/rconfig.js" >}}

Here we have defined the paths for all the common dependencies.

Now let us use it in two different places.

{{< include_code "js/requirejs-common-config/home/main.js" "1. main.js for home app" >}}

{{< include_code "js/requirejs-common-config/dashboard/main.js" "2. main.js for dashboard app" >}}

The file-layout here is like the following.

{{< img  "requirejs-common-config/file-layout.png" "Requirejs common config file layout" "Requirejs common config file layout" >}}

Hope it helps!
