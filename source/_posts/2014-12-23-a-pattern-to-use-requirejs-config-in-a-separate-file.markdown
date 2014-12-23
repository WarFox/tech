---
layout: post
title: "A pattern to use RequireJS config in a separate file"
date: 2014-12-23 11:48:47 +0000
comments: true
categories:
---
If you have used RequireJS, you most definitely have come across this: Repeatation of requirejs configuration.

You end up repeating the shims and paths in multiple locations. We can minimise this by using `requirejs.config(config)` method.

requirejs.config() will help you define or override configuration.

``` js
requirejs.config({'baseUrl': '/my/app/url/'});
```

Here is an examlpe on how I use `requirejs.config` method for minimising repeatation.

{% include_code js/requirejs-common-config/home/main.js %}

{% include_code js/requirejs-common-config/dashboard/main.js %}

{% include_code js/requirejs-common-config/common/rconfig.js %}
