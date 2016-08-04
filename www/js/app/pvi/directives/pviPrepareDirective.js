/**
 *
 * Directive for Preparation block of the PVI
 *
 */
domapp.directive("pviPrepare", ['CONSTANTS', 'TEXT', '$timeout', '$anchorScroll', '$location', '$rootScope', 'validationService', 'pviLocalService', 'routingService',
        'pviCommunicationService', 'persistenceService', 'blockModel', 'ionicDatePicker', '$ionicScrollDelegate', 'helperService', 'alertService',
    function(CONSTANTS, TEXT, $timeout, $anchorScroll, $location, $rootScope, validationService, pviLocalService, routingService,
             pviCommunicationService, persistenceService, blockModel, ionicDatePicker, $ionicScrollDelegate, helperService, alertService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviPrepare.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Update a PVI time property
                scope.updateTime = function(property, newHour, newMinutes) {

                    if(newMinutes.length == 1) {
                        newMinutes = '0' + newMinutes;
                    }

                    if(newHour.length == 1) {
                        newHour = '0' + newHour;
                    }

                    scope.pvi[property] = newHour + ':' + newMinutes;

                    if(scope.pvi.blank && property == 'actual_start_time') {

                        scope.pvi.mission_start_time = newHour + ':' + newMinutes;
                    }
                };

                //Update a PVI date property
                scope.updateDate = function(property, dateObj) {

                    var month = null;
                    var day = null;

                    //Pad month
                    if(String(dateObj.getMonth() + 1).length == 1) {
                        month = '0' + String(dateObj.getMonth() + 1);
                    } else {
                        month = String(dateObj.getMonth() + 1);
                    }

                    //Pad day
                    if(String(dateObj.getDate()).length == 1) {
                        day = '0' + String(dateObj.getDate());
                    } else {
                        day = String(dateObj.getDate());
                    }

                    scope.pvi[property] = day + '/' + month + '/' + dateObj.getFullYear();

                    if(scope.pvi.blank && property == 'actual_start_date') {

                        scope.pvi.mission_start_date = day + '/' + month + '/' + dateObj.getFullYear();
                    }
                };

                //Check if a PVI block is open
                scope.isBlockDisplayed = function(blockId) {

                    for (var key in blockModel.block) {

                        if(key == blockId) {
                            return blockModel.block[key];
                        }
                    }
                };

                //Toggle a PVI block
                scope.toggleBlock = function(blockId) {

                    //Toggle clicked block
                    blockModel.block[blockId] = !blockModel.block[blockId];

                    var location = $location.hash(blockId);
                    $ionicScrollDelegate.$getByHandle('mainScroll').anchorScroll("#"+ location);

                    //Close all other blocks
                    for (var key in blockModel.block) {

                        if(key != blockId) {
                            blockModel.block[key] = false;
                        }
                    }
                };

                //Validate PVI
                scope.validatePreparePvi = function(event) {

                    //re-initialize validation
                    validationService.initializeValidation();

                    //Perform individual block validation
                    var avantValidationCheck = validationService.validateAvant(scope.pvi);
                    var teteValidationCheck = validationService.validateTete(scope.pvi);
                    var mainValidationCheck = validationService.validateMain(scope.pvi);
                    var anomaliesValidationCheck = validationService.validateAnomalies(scope.pvi);
                    var materielValidationCheck = validationService.validateMateriel(scope.pvi);
                    var detailValidationCheck = validationService.validateDetail(scope.pvi);

                    //If all blocks of the PVI validate successfully
                    if(avantValidationCheck && teteValidationCheck && mainValidationCheck &&
                        anomaliesValidationCheck && materielValidationCheck && detailValidationCheck) {

                        //Attempt to update PVI. If successful we need to update certain properties of a 'vierge' PVI
                        pviCommunicationService.updatePvi(scope.pvi, function(responseData) {

                            //If the PVI was successfully updated and it was of type 'vierge' we need to set its Id and other properties
                            if(scope.pvi.blank == true) {

                                //Set properties - New Id passed from WS
                                scope.pvi.id = responseData.id;
                                scope.pvi.blank = false;
                                scope.pvi.state_code = CONSTANTS.TO_SIGN;

                                //Set PVI model in local storage
                                persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI);

                                //Navigate to new id
                                routingService.navigate(CONSTANTS.INT_RT_PVI + scope.pvi.id);
                            }
                        });

                        $timeout(function() {
                            //If PVI is valid - change state
                            scope.pvi.state_code = CONSTANTS.TO_SIGN;

                            //Set PVI model in local storage
                            persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI);
                        }, 500);
                    }
                };

                //Add/Deduct 15 minutes to Time control
                scope.editTime = function(property, type) {

                    var timeSplit = scope.pvi[property].split(':');

                    var newHour = timeSplit[0];
                    var newMinutes = timeSplit[1];

                    switch(type) {

                        case 'add':
                            if(newMinutes == '55') {

                                newMinutes = '00';

                                if(newHour == '23') {

                                    newHour = '00';
                                } else {

                                    newHour = parseInt(newHour) + 1;
                                }
                            } else {

                                newMinutes = parseInt(newMinutes) + 5;
                            }
                            break;
                        case 'deduct':
                            if(newMinutes == '00') {

                                newMinutes = '55';

                                if(newHour == '00') {

                                    newHour = '23';
                                } else {

                                    newHour = parseInt(newHour) - 1;
                                }
                            } else {

                                newMinutes = parseInt(newMinutes) - 5;
                            }
                            break;
                    }

                    newMinutes = String(newMinutes);
                    newHour = String(newHour);

                    scope.updateTime(property, newHour, newMinutes);
                };

                //Show the digit keypad
                scope.showKeypad = function(id) {

                    var location = $location.hash(id + '_label');
                    $ionicScrollDelegate.$getByHandle('mainScroll').anchorScroll("#"+ location);

                    //Prep null/undefined fields
                    if(scope.pvi[id] === null || typeof scope.pvi[id] == 'undefined') {

                        scope.pvi[id] = "";
                    }

                    $rootScope.keyboardVisible = true;
                    $rootScope.editingInput = id;
                };

                //Add/Deduct 1 day to/from Day control
                scope.editDay = function(property, type) {

                    var dateSplit = scope.pvi[property].split('/');
                    var tempDate = new Date(dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0]);

                    if(type == 'add') {
                        tempDate.setDate(tempDate.getDate() + 1);
                    } else if (type == 'deduct') {
                        tempDate.setDate(tempDate.getDate() - 1);
                    }

                    scope.updateDate(property, tempDate);
                };

                //Open the datepicker
                scope.openDatePicker = function(property){

                    var dateSplit = null;

                    if(scope.pvi[property] != "" && scope.pvi[property] != null) {

                        dateSplit = scope.pvi[property].split('/');
                    } else {

                        dateSplit = helperService.getCurrentDate().split('/');
                    }

                    var dateConfigObj = {
                        callback: function (val) {

                            var dateObj = new Date(val);

                            scope.updateDate(property, dateObj);
                        },
                        inputDate: new Date(dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0])
                    };

                    ionicDatePicker.openDatePicker(dateConfigObj);
                };

                //Remove a PVI
                scope.removePvi = function(event) {

                    alertService.displayAlert(
                        TEXT.UA_REMOVE_PVI_DATA_DELETION_TITLE,
                        TEXT.UA_REMOVE_PVI_DATA_DELETION_TEXT,
                        true,
                        function() {
                            pviLocalService.removeUserPviById(scope.pvi.id);
                            routingService.navigate(CONSTANTS.INT_RT_PVI_USER_LIST);
                        }
                    );
                }
            }
        };
    }]);