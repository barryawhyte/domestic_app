/**
 *
 * Directive for entire PVI block
 *
 */
domapp.directive("pvi", ['CONSTANTS', '$rootScope', 'pviModel', 'routingService',
    function(CONSTANTS, $rootScope, pviModel, routingService) {

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