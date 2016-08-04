/**
 *
 * PVI List Service
 * Calls Identify functions to populate both PVI lists (User & Other)
 *
 */
domapp.factory("pviListService", ['CONSTANTS', 'communicationService', 'pviCommunicationService', 'pviLocalService',
    function(CONSTANTS, communicationService, pviCommunicationService, pviLocalService) {

        return {

            //IDENTIFY_PVI_UL
            identifyPviUserList: function (callback) {

                communicationService.request(
                    null,
                    CONSTANTS.API_URL_IDENTIFY_PVI_UL,
                    'GET',
                    function(responseData) {

                        //Store PVI's
                        for (var i = 0,  length = responseData.length; i < length; i++) {

                            //Only download if not already stored locally
                            if(!pviLocalService.checkPviExistsById(responseData[i].id)) {

                                pviCommunicationService.downloadPvi(responseData[i]);
                            }
                        }

                        if (typeof callback != 'undefined'){
                            callback();
                        }
                    },
                    function(responseData) {

                    }
                )
            },

            //IDENTIFY_PVI_OL
            identifyPviOtherList: function (callback) {

                communicationService.request(
                    null,
                    CONSTANTS.API_URL_IDENTIFY_PVI_OL,
                    'GET',
                    function(responseData) {

                        //Store PVI's
                        for (var i = 0,  length = responseData.length; i < length; i++) {

                            //Only download if not already stored locally in either list
                            if(!pviLocalService.checkPviOtherExistsById(responseData[i].id) &&
                               !pviLocalService.checkPviExistsById(responseData[i].id)) {

                                pviLocalService.setOtherPvi(responseData[i]);
                            }
                        }

                        if (typeof callback != 'undefined'){
                            callback();
                        }
                    },
                    function(responseData) {

                    }
                )
            }
        }
    }]);