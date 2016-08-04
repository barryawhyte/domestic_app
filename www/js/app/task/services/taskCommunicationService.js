/**
 *
 * PVI Service
 *
 */
domapp.factory("pviCommunicationService", ['CONSTANTS', 'taskLocalService', 'communicationService', 'helperService', '$timeout',
    function(CONSTANTS, taskLocalService, communicationService, helperService, $timeout) {

        return {

            updateTask: function(task, successCallback, errorCallback) {

                var method = null;
                var url = null;

                //The http method and url for the request vary according to whether or not the PVI was blank or not
                switch(task.blank) {

                    case true:
                        method = 'POST';
                        url = CONSTANTS.API_URL_UPDATE_PVI;
                        break;

                    case false:
                        method = 'PUT';
                        url = CONSTANTS.API_URL_UPDATE_PVI + '/' + pvi.id;
                        break;
                }

                communicationService.request(
                    pvi,
                    url,
                    method,
                    function(responseData) {

                        if(typeof successCallback != 'undefined') {

                            successCallback(responseData);
                        }
                    },
                    function(responseData) {

                        if(typeof errorCallback != 'undefined') {

                            errorCallback(responseData);
                        }
                    }
                );

            },

            getTask: function(listTask) {

                communicationService.request(
                    null,
                    CONSTANTS.API_URL_DOWNLOAD_PVI + '/' + listTask.id,
                    'GET',
                    function(responseData) {

                        //Store task data
                        taskLocalService.setTask(responseData, listTask);
                    },
                    function(responseData) {

                    }
                )
            }
        }
    }]);