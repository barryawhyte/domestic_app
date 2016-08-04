/**
 *
 * Directive for Preparation block of the PVI
 *
 */
domapp.directive("pviPrepareMain", ['CONSTANTS', 'TEXT', 'alertService',
    function(CONSTANTS, TEXT, alertService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviPrepareMain.html",
            restrict: 'C',
            replace: true,
            priority: 0,
            scope: false,

            link: function postLink(scope, element, iAttrs, ctrl) {

                scope.toggleMinorBlock = function(minorBlock) {

                    if (scope.pvi[minorBlock]) {


                        if ((scope.pvi[minorBlock + "_mileage"] != "" && scope.pvi[minorBlock + "_mileage"] != null) ||
                            (scope.pvi[minorBlock + "_trip_duration"] != "" && scope.pvi[minorBlock + "_trip_duration"] != null) ||
                            (scope.pvi[minorBlock + "_tolls"] != "" && scope.pvi[minorBlock + "_tolls"] != null) ||
                            (scope.pvi[minorBlock + "_expenses"] != "" && scope.pvi[minorBlock + "_expenses"] != null) ||
                            (scope.pvi[minorBlock + "_work_duration_day"] != "" && scope.pvi[minorBlock + "_work_duration_day"] != null) ||
                            (scope.pvi[minorBlock + "_work_duration_evening_morning"] != "" && scope.pvi[minorBlock + "_work_duration_evening_morning"] != null) ||
                            (scope.pvi[minorBlock + "_work_duration_night"] != "" && scope.pvi[minorBlock + "_work_duration_night"] != null)) {

                            alertService.displayAlert(
                                TEXT.UA_CLOSE_TAB_DATA_DELETION_TITLE,
                                TEXT.UA_CLOSE_TAB_DATA_DELETION_TEXT,
                                true,
                                function() {
                                    scope.pvi[minorBlock + "_mileage"] = "";
                                    scope.pvi[minorBlock + "_trip_duration"] = "";
                                    scope.pvi[minorBlock + "_tolls"] = "";
                                    scope.pvi[minorBlock + "_expenses"] = "";
                                    scope.pvi[minorBlock + "_work_duration_day"] = "";
                                    scope.pvi[minorBlock + "_work_duration_evening_morning"] = "";
                                    scope.pvi[minorBlock + "_work_duration_night"] = "";
                                },
                                function() {
                                    scope.pvi[minorBlock] = true;
                                    scope.$apply();
                                }
                            );
                        }
                    }
                }
            }
        };
    }]);