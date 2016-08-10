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

            setUser: function(user) {

                userModel.user = user;
            }
        }
    }]);