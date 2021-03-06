/**
 *
 * Directive for Preparation block of the PVI
 *
 */
domapp.directive("pviPrepareDetail", ['CONSTANTS', '$anchorScroll', '$location', '$rootScope', 'validationService', 'pviCommunicationService', 'persistenceService', 'blockModel',
    function(CONSTANTS, $anchorScroll, $location, $rootScope, validationService, pviCommunicationService, persistenceService, blockModel) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviPrepareDetail.html",
            restrict: 'C',
            replace: true,
            priority: 0,
            scope: false,

            link: function postLink(scope, element, iAttrs, ctrl) {

            }
        };
    }]);