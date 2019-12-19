/** Put common requirejs configurations here **/
define([''], function () {
    'use strict';

    return {
        packages: [
            {
                name: 'common-directives',
                location: '/apps/common/directives/'
            },
            {
                name: 'common-filters',
                location: '/apps/common/filters'
            },
            {
                name: 'common-interceptors',
                location: '/apps/common/interceptors'
            }
        ],
        shim: {
            'angular': {
                deps: ['jquery'],
                exports: 'angular'
            },
            'angular-cookies': ['angular'],
            'ui-router': ['angular'],
            'ui-utils': ['angular'],
            'ui-utils-ieshiv': ['angular'],
            'bootstrap': ['jquery'],
            'ui-bootstrap-tpls': ['angular'],
            'ui-bootstrap': ['angular', 'ui-bootstrap-tpls'],
        },
        paths: {
            'jquery': ['/lib/jquery-2.1.1.min'],
            'angular': ['/lib/angular.min'],
            'angular-cookies': ['/lib/angular-cookies'],
            'ui-router': ['/lib/angular-ui/angular-ui-router.min'],
            'ui-utils': ['/lib/angular-ui/ui-utils.min'],
            'ui-utils-ieshiv': ['/lib/angular-ui/ui-utils-ieshiv.min'],
            'bootstrap': ['/lib/bootstrap.min'],
            'ui-bootstrap': ['/lib/angular-ui/ui-bootstrap.min'],
            'ui-bootstrap-tpls': ['/lib/angular-ui/ui-bootstrap-tpls.min'],
            'lodash': ['/lib/lodash.min'],
            'constants': ['/apps/common/constants']
        }
    }
});
