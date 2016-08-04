/**
 *
 * Controller for Login
 *
 */
domapp.controller('loginController', ['$scope', '$state', 'CONSTANTS', 'TEXT', 'userModel',
    function ($scope, $state, CONSTANTS, TEXT, userModel) {

        //Initialise scope
        $scope.constants = CONSTANTS;
        $scope.text = TEXT;
        $scope.user = userModel.user;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {

                console.log('logged in');
                console.log(user);

                $state.go('taskList');
            }
        });

    }]);