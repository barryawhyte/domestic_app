/**
 *
 * Directive for the User's PVI List
 *
 * Behaviour Handlers: tap
 */
domapp.directive('pviUserList', ['CONSTANTS', 'routingService', 'pviLocalService',
    function(CONSTANTS, routingService, pviLocalService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                scope.loadOtherList = function(event) {

                    routingService.navigate(CONSTANTS.INT_RT_PVI_OTHER_LIST);
                };

                //Create blank PVI
                scope.createBlankPVI = function(event) {

                    var pviId = pviLocalService.createBlankPVI();

                    routingService.navigate(CONSTANTS.INT_RT_PVI + pviId);
                }
            }
        };
    }]);