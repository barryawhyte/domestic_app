/**
 *
 * Directive for header
 *
 * Behaviour Handlers: tap
 */
domapp.directive('header', ['$state',
    function($state) {

        return {
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Nav tab show/hide
                scope.signOut = function() {

                    console.log('sign out');

                    firebase.auth().signOut().then(function() {
                        console.log('Sign-out successful.');
                        $state.go('login');
                    }, function(error) {
                        console.log(error);
                    });
                };
            }
        };
    }]);
