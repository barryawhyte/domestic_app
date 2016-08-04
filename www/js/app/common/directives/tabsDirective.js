/**
 *
 * Directive for Nav tabs
 *
 * Behaviour Handlers: tap
 */
domapp.directive('tabs', ['CONSTANTS', '$location',
    function(CONSTANTS, $location) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Nav tab show/hide
                scope.showTabs = function() {

                    //Don't show navtabs if on login
                    return ($location.$$path != CONSTANTS.INT_RT_LOGIN);
                };

                scope.taskNavTabIsActive = function() {

                    return ($location.$$path == CONSTANTS.INT_RT_TASK_LIST ||
                    $location.$$path == CONSTANTS.INT_RT_TASK);
                };

                scope.employeeNavTabIsActive = function() {

                    return ($location.$$path == CONSTANTS.INT_RT_EMPLOYEE_LIST ||
                    $location.$$path == CONSTANTS.INT_RT_EMPLOYEE);
                };

                scope.roomNavTabIsActive = function() {

                    return ($location.$$path == CONSTANTS.INT_RT_ROOM_LIST ||
                    $location.$$path == CONSTANTS.INT_RT_ROOM);
                };
            }
        };
    }]);