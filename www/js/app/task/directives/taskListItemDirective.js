/**
 *
 * Directive for items in the task list
 *
 * Behaviour Handlers: tap
 */
domapp.directive('taskListItem', ['$state', 'CONSTANTS',
    function($state, CONSTANTS) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/taskListItem.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap task div
                scope.taskTap = function(event) {

                    $state.go(CONSTANTS.INT_RT_TASK, {id: scope.task.id});
                };
            }
        };
    }]);