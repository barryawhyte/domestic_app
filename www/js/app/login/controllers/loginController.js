/**
 *
 * Controller for Login
 *
 */
domapp.controller('loginController', ['$scope', '$state', 'CONSTANTS', 'TEXT', 'userLocalService', 'dataService',
    function ($scope, $state, CONSTANTS, TEXT, userLocalService, dataService) {

        //Initialise scope
        $scope.constants = CONSTANTS;
        $scope.text = TEXT;
        $scope.user = userLocalService.getUser();

    }]);