/**
 *
 * Directive for Room List
 *
 * Behaviour Handlers: tap
 */
domapp.directive('roomList', ['$state', 'CONSTANTS', 'roomLocalService',
    function($state, CONSTANTS, roomLocalService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Add task
                scope.addRoom = function(event) {

                    //var pviId = roomLocalService.createBlankPVI();
                    //
                    //$state.go('task');
                }
            }
        };
    }]);