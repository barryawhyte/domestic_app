/**
 *
 * Controller for Task List
 *
 */
domapp.controller('taskListController', ['CONSTANTS', 'TEXT', '$scope', '$rootScope', '$stateParams', 'taskModel', 'dataService',
    function (CONSTANTS, TEXT, $scope, $rootScope, $stateParams, taskModel, dataService) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.task = taskModel.task;

        dataService.getDataSnapshot('/tasks', function(snapshot) {

            taskModel.task = snapshot.val();
            $scope.task = taskModel.task;
            $scope.$apply();
        });

    }]);