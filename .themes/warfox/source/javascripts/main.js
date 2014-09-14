// `main.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
  'use strict';

  requirejs.config({
      "baseUrl": "/tech/javascripts",
      "shim": {
        "octopress": {
          deps: ['jquery'],
          exports: 'octopress'
        },
        "github": {
          deps: ['jquery'],
          exports: 'github'
        }
      },
      "paths": {
        "modernizer": "//cdn.jsdelivr.net/modernizr/2.8.3/modernizr.min",
        "jquery": "//cdn.jsdelivr.net/jquery/1.9.1/jquery-1.9.1.min",
        "octopress": "octopress",
        "github": "github"
      }
  });

  requirejs(["jquery", 'app', "modernizer", 'octopress'], function ($, app) {
    app.github();
  });

})(requirejs);
