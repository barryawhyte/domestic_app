/**
 *
 * Controller for Room
 *
 */
domapp.controller('roomController', ['CONSTANTS', 'TEXT', '$scope', '$state', 'roomLocalService',
    function (CONSTANTS, TEXT, $scope, $state, roomLocalService) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.room = roomLocalService.getRoomById(parseInt($state.params.id));

    }]);