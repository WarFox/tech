---
layout: post
title: "HTTP Caching explained"
date: 2012-08-29T04:28:00+05:30
categories:
tags:
 - HTTP
 - Cache
 - Caching
---
HTTP caching is an important technique that can be utilized in modern web applications. Caching reduces latency and improves page load speed there by improving user experience.
Proper use of caching mechanisms can bring in serious performance gains. Caching reduces load on servers by bringing the resources close to client. It also reduces the latency of requests and amount traffic in the network, there by improving the performance for all network users and allows network to scale.

Both client and server can control what is being cached and when to enable caching and on what conditions to update the available cache. Caching becomes really effective in large organizations since users typically access common web addresses.

<i>The goal of caching in HTTP/1.1 is to eliminate the need to send requests in many cases, and to eliminate the need to send full responses in many other cases</i><sup><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html#sec13">1</a></sup>.

Caches serves as an intermediary between clients and server, by holding a copy of resources belonging to server. When a cache receives a request from a client, it can reply back directly without needing to contact the server. As the cache is "nearer" to the client than the server, client receives the response much faster. However, the before replying to the client, cache must be able to guarantee that server would provide identical response for that request. Cache must be able to check whether its copy of resource is valid or not.

### How does it work?
An expiry mechanism is implemented to avoid sending requests for valid resources, thus avoiding round trip delays. Similarly a validation mechanism is used to avoid sending full responses, which saves the network bandwidth.

The server can associate an expiry time with each resource, and guarantee that the resource won't change before that time. Thus the cache knows, the expiry time of its copy of resources, and doesn't need to send the request to server.

To avoid sending full responses, cache can check validity of its copy by sending a conditional request to the server. The server only sends a full response, only if the resource has changed.

Web browsers like Firefox and Google Chrome often caches static resources like Cascading Style Sheets and Javascript files. Web developers utilize HTTP caching advantages by delivering content through popular Content Delivery Networks (CDN). For example Google hosts a number of common web development libraries like jQuery, Mootools and Dojo through their <a href="https://developers.google.com/speed/libraries/devguide">CDN</a>. A typical CDN will have multiple copies of resources residing on servers spread across the globe. A request to a resource is served by the nearest server. But that is not caching, I'll explain this in the following section.

Advantages of caching comes when many web sites point to the same CDN. For example if 10 websites use jQuery delivered through Google's CDN, then the browser will send request for the resource file only once, as the identical resource will be already available in the cache in consecutive requests. This is serious network traffic gain when considering millions of websites. If the CDN implements expiry mechanisms, then the browser cache may serve the resource for a month or may be a year!
