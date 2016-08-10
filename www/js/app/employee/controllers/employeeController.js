/**
 *
 * Controller for Employee
 *
 */
domapp.controller('employeeController', ['CONSTANTS', 'TEXT', '$scope', '$state', 'employeeLocalService',
    function (CONSTANTS, TEXT, $scope, $state, employeeLocalService) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.employee = employeeLocalService.getEmployeeById(parseInt($state.params.id));

    }]);