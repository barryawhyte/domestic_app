/**
 *
 * Directive for employee
 *
 */
domapp.directive("employee", ['CONSTANTS',
    function(CONSTANTS) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

            }
        };
    }]);