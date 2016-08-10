/**
 *
 * Directive for items in the room list
 *
 * Behaviour Handlers: tap
 */
domapp.directive('roomListItem', ['$state', 'CONSTANTS',
    function($state, CONSTANTS) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "room/directives/roomListItem.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap room div
                scope.roomTap = function(event) {

                    $state.go(CONSTANTS.INT_RT_ROOM, {id: scope.room.id});
                };
            }
        };
    }]);