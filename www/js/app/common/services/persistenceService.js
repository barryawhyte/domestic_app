/**
 *
 * Persistence Service
 * Service handling persistence of models in localStorage
 *
 */
domapp.factory("persistenceService", ['CONSTANTS', 'localStorageService', 'userModel', 'pviModel', 'pviOtherModel',
    function(CONSTANTS, localStorageService, userModel, pviModel, pviOtherModel) {

        return {

            setLocalStorage: function(lsKey) {

                switch(lsKey) {

                    case CONSTANTS.LS_KEY_USER:
                        //Set userModel
                        localStorageService.set(CONSTANTS.LS_KEY_USER, angular.toJson(userModel.user));
                        break;
                    case CONSTANTS.LS_KEY_PVI:
                        //Set pviModel
                        localStorageService.set(CONSTANTS.LS_KEY_PVI, angular.toJson(pviModel.pvi));
                        break;
                    case CONSTANTS.LS_KEY_PVI_OTHER:
                        //Set pviOtherModel
                        localStorageService.set(CONSTANTS.LS_KEY_PVI_OTHER, angular.toJson(pviOtherModel.pvi));
                        break;
                }
            },

            restoreLocalStorage: function(lsKey) {

                switch(lsKey) {

                    case CONSTANTS.LS_KEY_USER:
                        //Get userModel
                        var retrievedUserModel = localStorageService.get(CONSTANTS.LS_KEY_USER);
                        userModel.user = JSON.parse(retrievedUserModel);
                        break;
                    case CONSTANTS.LS_KEY_PVI:
                        //Get pviModel
                        var retrievedPviModel = localStorageService.get(CONSTANTS.LS_KEY_PVI);
                        pviModel.pvi = JSON.parse(retrievedPviModel);
                        break;
                    case CONSTANTS.LS_KEY_PVI_OTHER:
                        //Get pviOtherModel
                        var retrievedPviOtherModel = localStorageService.get(CONSTANTS.LS_KEY_PVI_OTHER);
                        pviOtherModel.pvi = JSON.parse(retrievedPviOtherModel);
                        break;
                }
            },

            checkExistsLocalStorage: function(lsKey) {

                var lsKeys = localStorageService.keys();

                return lsKeys.indexOf(lsKey) > -1;
            }
        }
    }]);