/**
 *
 * Directive for items in the employee list
 *
 * Behaviour Handlers: tap
 */
domapp.directive('employeeListItem', ['$state', 'CONSTANTS',
    function($state, CONSTANTS) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "employee/directives/employeeListItem.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap employee div
                scope.employeeTap = function(event) {

                    $state.go(CONSTANTS.INT_RT_EMPLOYEE, {id: scope.employee.id});
                };
            }
        };
    }]);