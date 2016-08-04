/**
 *
 * Controller for PVI User List
 *
 */
domapp.controller('pviUserListController', ['$scope', 'CONSTANTS', 'TEXT', 'pviModel', 'pviListService', 'userModel',
    function ($scope, CONSTANTS, TEXT, pviModel, pviListService, userModel) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.user = userModel.user;
        $scope.pvi = pviModel.pvi;
        $scope.showDataLoader = true;

        //Populate the PVI User List
        pviListService.identifyPviUserList(function() {

            $scope.showDataLoader = false;
        });

    }]);