/**
 *
 * Directive for Task List
 *
 * Behaviour Handlers: tap
 */
domapp.directive('taskList', ['$state', 'CONSTANTS', 'taskLocalService',
    function($state, CONSTANTS, taskLocalService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Add task
                scope.addTask = function(event) {

                    //var pviId = taskLocalService.createBlankPVI();
                    //
                    //$state.go('task');
                }
            }
        };
    }]);