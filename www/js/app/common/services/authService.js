/**
 *
 * Auth Service
 * Service handling authorization
 *
 */
domapp.factory("authService", ['CONSTANTS', 'TEXT', 'userLocalService', '$state', 'alertService', 'dataService',
    function(CONSTANTS, TEXT, userLocalService, $state, alertService, dataService) {

    return {

        //LOGIN_USER
        loginUser: function (user) {

            //Build request data object
            var data = {
                "email": user.email,
                "password": user.password
            };

            firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                alertService.displayAlert('Error', errorMessage, false);

            });
        },

        activateAuthStateHandler: function() {

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {

                    var email, uid;

                    if (user != null) {
                        email = user.email;
                        uid = user.uid;
                    }

                    //dataService.writeUserData(uid, email);
                    userLocalService.setUser(user);
                    $state.go('taskList');
                }
            });
        }




    }
}]);
