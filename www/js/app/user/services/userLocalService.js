/**
 *
 * User Service
 *
 */
domapp.factory("userLocalService", ['CONSTANTS', 'userModel',
    function(CONSTANTS, userModel) {

        return {

            getUser: function () {

                return userModel.user;
            },

            activateUser: function() {

                userModel.user.activationState = CONSTANTS.ACTIVATED;
            },

            setUserAPIKey: function(APIKey) {

                userModel.user.APIKey = APIKey;
            }
        }
    }]);