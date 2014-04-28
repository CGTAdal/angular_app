'use strict';

var dashbord = ngApp.controller('DashboardCtrl', function($scope, Company, $rootScope, $routeParams, $modal) {
  $rootScope.companies = Company.all();

  // open modal
  $scope.deleteCompany = function (company) {
    Company.delete(company.id);
    $rootScope.companies.splice( $rootScope.companies.indexOf(company), 1 );
    // $rootScope.companies.pop(company);
  };

  $scope.editCompany = function modal(company) {
  	// var company = $rootScope.companies[$rootScope.companies.indexOf(company)];
  	// console.log($rootScope.companies);
	  var modalInstance = $modal.open({
	    backdrop: 'static',
	    // param: $routeParams,
	    templateUrl: '/templates/edit_company.html',
	    controller: 'DashboardCtrl',
      resolve: {
        company: function () {
          return $rootScope.companies[$rootScope.companies.indexOf(company)];
        }
      }
	  });
  };
});