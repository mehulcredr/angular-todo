var app = angular.module("todo", []);

app.controller("c1", ["$http", "tasks", "$scope", function($http, tasks, $scope) {

	console.log("Controller init");

	tasks.getTasks().then(function(success) {
		$scope.tasks = success.data;
	}, function(failure) {
		console.log(failure);
	});

}]);


// Factories
app.factory("tasks", ["$http", "$q", function($http, $q) {
	return {

		getTasks: function() {

			return $http({
				method: "GET",
				url: "http://localhost:2000/tasks/"
			}).then(function success(data) {
				return data;				
			}, function fail(error) {
				$q.reject(error);
			});

		}

	}
}]);