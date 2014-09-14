define(['module'], function (module) {
  'use strict';
  return {
    config : module.config(),

    github: function() {
      var githubConfig = this.config.github;
      if(githubConfig) {
        requirejs(['github'], function(github) {
          github.showRepos({
              user: githubConfig.user,
              count: githubConfig.count,
              skip_forks: githubConfig.skip_forks,
              target: githubConfig.target
          });
        });
      }
    }
  }
});
