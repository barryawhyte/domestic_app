/**
 *
 * Directive for PVI's in the Other List
 *
 * Behaviour Handlers: tap
 */
domapp.directive('pviOtherListItem', ['CONSTANTS', 'pviCommunicationService', 'pviLocalService', 'persistenceService',
    function(CONSTANTS, pviCommunicationService, pviLocalService, persistenceService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "pviList/directives/pviOtherListItem.html",
            restrict: 'C',
            replace: false,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //Tap task div
                scope.pviOtherTap = function(event) {

                    //Download PVI (Adds to pviModel)
                    pviCommunicationService.downloadPvi(scope.pvi);

                    //Remove PVI from otherPviModel
                    pviLocalService.removeOtherPviById(scope.pvi.id);

                    //Set PVI Other model in local storage
                    persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI_OTHER);
                };
            }
        };
    }]);