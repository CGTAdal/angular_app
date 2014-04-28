'use strict';

ngApp.controller('DashboardCtrl', function($scope, Company, $rootScope) {
  $rootScope.companies = Company.all();
});
