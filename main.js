function Main($scope, $http) {
	$http({url: '/users'})
			.success(function(users) {
				$scope.users = users;
			});
}