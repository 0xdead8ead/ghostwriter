//Imports
var ghostwriterApp = angular.module('ghostwriter', [
        'ui.router',
        'ui.bootstrap'
    ]);

//Main Controller
ghostwriterApp.controller('main', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('test/phones.json').success(function(data) {
		$scope.phones = data;
	});
	//More For the Main Controller
}]);

ghostwriterApp.controller('SearchController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('test/phones.json').success(function(data) {
        $scope.phones = data;
    });
    //More For the Main Controller
}]);


//Findings Search Form Controller
ghostwriterApp.controller('FindingsController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('assets/data/findings.json').success(function(data) {
        $scope.findings = data;
    });
    //More For the Main Controller
}]);


//AngularJS Router
ghostwriterApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/about");
  //
  // Now set up the states
  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html"
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "templates/blog.html"
    })
    .state('findings', {
      url: "/findings",
      templateUrl: "templates/findings.html",
      controller: "FindingsController"
    })
    .state('search', {
      url: "/search",
      templateUrl: "templates/search.html",
      controller: "SearchController"
    });
});
