/**
 *
 * Controller for Task
 *
 */
domapp.controller('taskController', ['CONSTANTS', 'TEXT', '$scope', '$stateParams', 'taskModel',
    function (CONSTANTS, TEXT, $scope, $stateParams, taskModel) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.currentTaskId = parseInt($stateParams.taskId.substring(1));
        $scope.task = taskModel.task;

        $scope.checkId = function(task) {

            return (task.id == $scope.currentTaskId);
        };
    }]);