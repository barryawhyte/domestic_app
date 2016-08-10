/**
 *
 * Directive for Nav tabs
 *
 * Behaviour Handlers: tap
 */
domapp.directive('tabs', ['CONSTANTS', '$state',
    function(CONSTANTS, $state) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Nav tab show/hide
                scope.showTabs = function() {

                    //Don't show navtabs if on login
                    return ($state.current.name != CONSTANTS.INT_RT_LOGIN);
                };

                scope.taskNavTabIsActive = function() {

                    return ($state.current.name == CONSTANTS.INT_RT_TASK_LIST ||
                    $state.current.name == CONSTANTS.INT_RT_TASK);
                };

                scope.employeeNavTabIsActive = function() {

                    return ($state.current.name == CONSTANTS.INT_RT_EMPLOYEE_LIST ||
                    $state.current.name == CONSTANTS.INT_RT_EMPLOYEE);
                };

                scope.roomNavTabIsActive = function() {

                    return ($state.current.name == CONSTANTS.INT_RT_ROOM_LIST ||
                    $state.current.name == CONSTANTS.INT_RT_ROOM);
                };

                scope.loadTaskList = function() {

                    $state.go(CONSTANTS.INT_RT_TASK_LIST);
                };

                scope.loadEmployeeList = function() {

                    $state.go(CONSTANTS.INT_RT_EMPLOYEE_LIST);
                };

                scope.loadRoomList = function() {

                    $state.go(CONSTANTS.INT_RT_ROOM_LIST);
                }
            }
        };
    }]);