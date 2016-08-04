/**
 *
 * Controller for PVI Other List
 *
 */
domapp.controller('pviOtherListController', ['$scope', 'TEXT', 'pviListService', 'pviOtherModel', 'userModel',
    function ($scope, TEXT, pviListService, pviOtherModel, userModel) {

        $scope.text = TEXT;

        $scope.user = userModel.user;
        $scope.pvi = pviOtherModel.pvi;
        $scope.showDataLoader = true;

        //Populate the PVI User List
        pviListService.identifyPviOtherList(function() {

            $scope.showDataLoader = false;
        });

    }]);