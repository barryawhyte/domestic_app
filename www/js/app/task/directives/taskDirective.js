/**
 *
 * Directive for task
 *
 */
domapp.directive("task", ['CONSTANTS',
    function(CONSTANTS) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

            }
        };
    }]);