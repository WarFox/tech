(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({
        // Packages = top-level folders; loads a contained file named 'main.js"
        packages: ['home', 'dashboard',
        {
            'name': 'dashboard-settings',
            'location': '/apps/dashboard/settings'
        }
        ],
        paths: {
            'rconfig': ['/apps/common/rconfig']
        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    // here we are loading rconfig as dependency
    require(['rconfig'], function (rconfig) {
        // update config
        requirejs.config(rconfig);

        // Load the app. This is kept minimal so it doesn't need much updating.
        require(['angular', 'jquery', './home', 'ui-router', 'ui-utils', 'angular-cookies',
            'common-directives', 'common-filters', 'common-interceptors',
            'bootstrap', 'ui-bootstrap', 'ui-bootstrap-tpls'], function (angular, $) {
                angular.bootstrap(document, ['home']);
            });
    });

})(requirejs);
