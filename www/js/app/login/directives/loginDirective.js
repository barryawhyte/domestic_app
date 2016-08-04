/**
 *
 * Directive for Login
 *
 * Behaviour Handlers: tap
 */
domapp.directive('login', ['CONSTANTS', 'loginCommunicationService',
    function(CONSTANTS, loginCommunicationService) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap login button
                scope.loginButtonTap = function(event) {

                    loginCommunicationService.loginUser(scope.user);
                };
            }
        };
    }]);