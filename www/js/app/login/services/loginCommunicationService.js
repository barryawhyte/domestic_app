/**
 *
 * Login Service
 * Handles authentication
 *
 */
domapp.factory("loginCommunicationService", ['CONSTANTS', 'TEXT', 'communicationService', 'userLocalService', 'alertService',
    function(CONSTANTS, TEXT, communicationService, userLocalService, alertService) {

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
        }
    }
}]);