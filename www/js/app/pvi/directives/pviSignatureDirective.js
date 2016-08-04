/**
 *
 * Directive for Signature block of the PVI
 *
 */
domapp.directive("pviSignature", ['CONSTANTS', '$timeout', '$location', 'validationService',
        'pviCommunicationService', 'persistenceService', '$ionicScrollDelegate', 'helperService', 'routingService',
    function(CONSTANTS, $timeout, $location, validationService,
             pviCommunicationService, persistenceService, $ionicScrollDelegate, helperService, routingService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviSignature.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                scope.changeState = function(block) {

                    //Set PVI state back to IN_PREPARATION
                    scope.pvi.state_code = CONSTANTS.IN_PREPARATION;

                    //Close all block headers
                    for (var key in scope.blockModel.block) {

                        scope.blockModel.block[key] = false;
                    }

                    //Open the relevant block header
                    scope.blockModel.block[block] = true;

                    //Autoscroll to the header
                    var location = $location.hash(block);
                    $ionicScrollDelegate.$getByHandle('mainScroll').anchorScroll("#"+ location);

                };

                scope.addSignature = function(type) {

                    scope.blockModel.block.signature_pad = true;
                    scope.currentSignatureType = type;

                    $timeout(function() {

                        scope.signaturePad.clear();
                    }, 100)
                };

                //Tap Validate Signature button
                scope.validateSignaturePvi = function(event) {

                    //If signatures validate successfully
                    if(validationService.validateSignatures(scope.pvi)) {

                        //If signatures are valid store signature date & time
                        scope.pvi.signature_datetime = helperService.getCurrentDate() + ' ' + helperService.getCurrentTime(false);

                        //Attempt to update PVI if network connection is present
                        pviCommunicationService.updatePvi(scope.pvi, function(responseData){

                            //If the PVI was successfully updated and it was of type 'vierge' we need to set its Id and other properties
                            if(scope.pvi.blank == true) {

                                //Set properties
                                scope.pvi.id = responseData.id;
                                scope.pvi.blank = false;
                                scope.pvi.state_code = CONSTANTS.TO_CLOSE;

                                //Set PVI model in local storage
                                persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI);

                                //Navigate to new id
                                routingService.navigate(CONSTANTS.INT_RT_PVI + scope.pvi.id);
                            }
                        });

                        $timeout(function() {

                            //Change state
                            scope.pvi.state_code = CONSTANTS.TO_CLOSE;

                            //Set close date and time
                            scope.pvi.actual_end_date = helperService.getCurrentDate();
                            scope.pvi.actual_end_time = helperService.getCurrentTime(true);

                            //Set PVI model in local storage
                            persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI);
                        }, 500);
                    }
                };
            }
        };
    }]);