define([
  'angular',
  'underscore',
  'did-io',
  './idp/register',
  './issuer/issuer'
], function(
  angular, _, didio
) {

'use strict';

var module = angular.module('authio.idpconsumer', [
  'authio.login', 'authio.register', 'authio.issuer', 'bedrock.alert']);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.
    when('/idp/register', {
      title: 'Identity Provider',
      templateUrl: requirejs.toUrl('authiodev-components/idp/register.html')
    })
    .when('/idp/credentials', {
      title: 'Credential Composer',
      templateUrl: requirejs.toUrl('authiodev-components/idp/credentials.html')
    })
    .when('/issuer', {
      title: 'Issuer Login',
      templateUrl: requirejs.toUrl('authiodev-components/issuer/login.html')
    })
    .when('/issuer/dashboard', {
      title: 'Issuer Dashboard',
      templateUrl: requirejs.toUrl('authiodev-components/issuer/dashboard.html')
    })
    .when('/issuer/acknowledgements', {
      title: 'Issuer Dashboard',
      templateUrl: requirejs.toUrl('authiodev-components/issuer/acknowledgements.html')
    })
    .when('/consumer/requestor', {
      title: 'Credential Requestor',
      templateUrl: requirejs.toUrl('authiodev-components/consumer/requestor.html')
    }).
    when('/consumer/credentials', {
      title: 'Credential Consumer',
      templateUrl: requirejs.toUrl('authiodev-components/consumer/credentials.html')
    });
});

return module.name;
});
