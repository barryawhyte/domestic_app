/**
 *
 * Directive for room
 *
 */
domapp.directive("room", ['CONSTANTS',
    function(CONSTANTS) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

            }
        };
    }]);