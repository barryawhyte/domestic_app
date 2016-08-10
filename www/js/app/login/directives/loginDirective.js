/**
 *
 * Directive for Login
 *
 * Behaviour Handlers: tap
 */
domapp.directive('login', ['CONSTANTS', 'authService',
    function(CONSTANTS, authService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap login button
                scope.loginButtonTap = function(event) {

                    authService.loginUser(scope.user);
                };
            }
        };
    }]);