/**
 *
 * Communication Service
 * Service handling communication with remote webservice
 *
 */
domapp.factory("communicationService", ['$http', 'CONSTANTS', 'TEXT', 'connectionService', 'userLocalService', 'alertService',
    function($http, CONSTANTS, TEXT, connectionService, userLocalService, alertService) {

    return {

        //Handles AJAX request & response
        request: function (data, url, method, successCallback, errorCallback) {

            //If there is a network connection we build and send the request
            if(connectionService.testConnection()) {

                var APIKeyURL = "";

                //Check if API Key is stored for the user
                var APIKey = userLocalService.getUser().APIKey;

                //If it is we add it to the URL
                if(APIKey != null && APIKey != "") {

                    APIKeyURL = "?token=" + APIKey + "";
                }

                //Send AJAX request
                $http({
                    method: method,
                    url: window.config.apiUrl + url + APIKeyURL,
                    data: data
                }).then(
                    function success(response) {

                        if(typeof errorCallback != 'undefined') {

                            successCallback(response.data);
                        }
                }, function error(response) {

                    if(typeof errorCallback != 'undefined') {

                        errorCallback(response.status);
                    }
                });
            } else {

                //No connection warning
                alertService.displayAlert(
                    TEXT.UA_NO_CONNECTION_TITLE,
                    TEXT.UA_NO_CONNECTION_TEXT,
                    false
                );
            }
        }
    }
}]);
