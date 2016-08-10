/**
 *
 * Controller for Employee List
 *
 */
domapp.controller('employeeListController', ['CONSTANTS', 'TEXT', '$scope', 'employeeModel', 'dataService',
    function (CONSTANTS, TEXT, $scope, employeeModel, dataService) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.employee = employeeModel.employee;

        dataService.getDataSnapshot('/employees', function(snapshot) {

            employeeModel.employee = snapshot.val();
            $scope.employee = employeeModel.employee;
            $scope.$apply();
        });

    }]);