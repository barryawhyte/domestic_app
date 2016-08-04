/**
 *
 * Directive for Preparation block of the PVI
 *
 */
domapp.directive("pviPrepareTete", ['CONSTANTS',
    function(CONSTANTS) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviPrepareTete.html",
            restrict: 'C',
            replace: true,
            priority: 0,
            scope: false,

            link: function postLink(scope, element, iAttrs, ctrl) {

                $('.clockpicker_actual_start_time').clockpicker({
                    donetext: 'Done',
                    afterDone: function(data) {

                        var dataString = String(data);
                        var dataSplit = dataString.split(' ');
                        var timeSplit = dataSplit[4].split(':');

                        $('#actual_start_time').attr("value", timeSplit[0] + ':' + timeSplit[1]).trigger('input');
                        scope.updateTime('actual_start_time', timeSplit[0], timeSplit[1]);
                        scope.$apply();
                    }
                });

            }
        };
    }]);