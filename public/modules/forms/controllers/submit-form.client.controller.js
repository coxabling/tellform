'use strict';

// SubmitForm controller
angular.module('forms').controller('SubmitFormController', ['$scope', '$rootScope', '$state', 'myForm', 'Auth',
	function($scope, $rootScope, $state, myForm, Auth) {
		$scope.authentication = Auth;
		$scope.myform = myForm;

		if(!$scope.myform.isLive){
			// Show navbar if form is not public AND user IS loggedin
			if($scope.authentication.isAuthenticated()){
				$scope.hideNav = $rootScope.hideNav = false;
			}
			// Redirect if  form is not public user IS NOT loggedin
			else {
				$scope.hideNav = $rootScope.hideNav = true;
				$state.go('access_denied');
			}
		}else{
			$scope.hideNav = $rootScope.hideNav = true;
		}

	}
]);