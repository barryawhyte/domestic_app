/**
 *
 * Directive for the Other PVI List
 *
 */
domapp.directive('pviOtherList', ['CONSTANTS', 'routingService',
    function(CONSTANTS, routingService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                scope.loadUserList = function(event) {

                    routingService.navigate(CONSTANTS.INT_RT_PVI_USER_LIST);
                };
            }
        };
    }]);