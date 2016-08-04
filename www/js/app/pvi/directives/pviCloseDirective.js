/**
 *
 * Directive for Close block of the PVI
 *
 */
domapp.directive("pviClose", ['CONSTANTS', 'TEXT', 'validationService', 'persistenceService', 'pviCommunicationService',
        'pviLocalService', 'alertService', '$timeout', 'routingService',
    function(CONSTANTS, TEXT, validationService, persistenceService, pviCommunicationService,
             pviLocalService, alertService, $timeout, routingService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviClose.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                $('.clockpicker_actual_end_time').clockpicker({
                    donetext: 'Done',
                    afterDone: function(data) {

                        var dataString = String(data);
                        var dataSplit = dataString.split(' ');
                        var timeSplit = dataSplit[4].split(':');

                        $('#actual_end_time').attr("value", timeSplit[0] + ':' + timeSplit[1]).trigger('input');
                        scope.updateTime('actual_end_time', timeSplit[0], timeSplit[1]);
                        scope.$apply();
                    }
                });

                //Tap close PVI button
                scope.validateClosePvi = function(event) {

                    //If close section of task validates successfully
                    if(validationService.validateClose(scope.pvi)) {

                        //Attempt to update PVI if network connection is present
                        pviCommunicationService.updatePvi(scope.pvi, function() {

                            //Only on a successful update (webservice) do we set the task to closed
                            scope.pvi.state_code = CONSTANTS.CLOSED;

                            //Set PVI model in local storage
                            persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI);

                            //We remove the task permanently
                            $timeout(function() {

                                pviLocalService.removeUserPviById(scope.pvi.id);
                                routingService.navigate(CONSTANTS.INT_RT_PVI_USER_LIST);
                            }, 500)

                        }, function() {

                            alertService.displayAlert(
                                TEXT.UA_CANNOT_CLOSE_PVI_TITLE,
                                TEXT.UA_CANNOT_CLOSE_PVI_TEXT,
                                false
                            );
                        });
                    }
                };
            }
        };
    }]);