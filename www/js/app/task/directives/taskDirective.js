/**
 *
 * Directive for task
 *
 */
domapp.directive("task", ['CONSTANTS', '$rootScope', '$state', 'taskModel',
    function(CONSTANTS, $rootScope, $state, taskModel) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

            }
        };
    }]);