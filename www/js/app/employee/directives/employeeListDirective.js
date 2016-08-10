/**
 *
 * Directive for Employee List
 *
 * Behaviour Handlers: tap
 */
domapp.directive('employeeList', ['$state', 'CONSTANTS', 'employeeLocalService',
    function($state, CONSTANTS, employeeLocalService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Add task
                scope.addEmployee = function(event) {

                    //var pviId = employeeLocalService.createBlankPVI();
                    //
                    //$state.go('task');
                }
            }
        };
    }]);