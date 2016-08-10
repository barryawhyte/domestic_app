/**
 *
 * Controller for Room List
 *
 */
domapp.controller('roomListController', ['CONSTANTS', 'TEXT', '$scope', 'roomModel', 'dataService',
    function (CONSTANTS, TEXT, $scope, roomModel, dataService) {

        $scope.text = TEXT;
        $scope.constants = CONSTANTS;

        $scope.room = roomModel.room;

        dataService.getDataSnapshot('/rooms', function(snapshot) {

            roomModel.room = snapshot.val();
            $scope.room = roomModel.room;
            $scope.$apply();
        });

    }]);