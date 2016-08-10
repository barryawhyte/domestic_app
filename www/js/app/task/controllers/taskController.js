/**
 *
 * Controller for Task
 *
 */
domapp.controller('taskController', ['CONSTANTS', 'TEXT', '$scope', '$state', 'taskLocalService',
    function (CONSTANTS, TEXT, $scope, $state, taskLocalService) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.task = taskLocalService.getTaskById(parseInt($state.params.id));

    }]);