/**
 *
 * Directive for PVI's in the User's List
 *
 * Behaviour Handlers: tap
 */
domapp.directive('pviUserListItem', ['CONSTANTS', 'routingService',
    function(CONSTANTS, routingService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "pviList/directives/employeeListItem.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap task div
                scope.pviUserTap = function(event) {

                    routingService.navigate(CONSTANTS.INT_RT_PVI + scope.pvi.id);
                };
            }
        };
    }]);