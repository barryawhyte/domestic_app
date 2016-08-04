/**
 *
 * Directive for Preparation block of the PVI
 *
 */
domapp.directive("pviPrepareAvant", ['CONSTANTS',
    function(CONSTANTS) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviPrepareAvant.html",
            restrict: 'C',
            replace: true,
            priority: 0,
            scope: false,

            link: function postLink(scope, element, iAttrs, ctrl) {

                $('.clockpicker_arrival_time').clockpicker({
                    donetext: 'Done',
                    afterDone: function(data) {

                        var dataString = String(data);
                        var dataSplit = dataString.split(' ');
                        var timeSplit = dataSplit[4].split(':');

                        $('#arrival_time').attr("value", timeSplit[0] + ':' + timeSplit[1]).trigger('input');
                        scope.updateTime('arrival_time', timeSplit[0], timeSplit[1]);
                        scope.$apply();
                    }
                });

            }
        };
    }]);