/**
 *
 * Room Local Service
 *
 */
domapp.factory("roomLocalService", ['CONSTANTS', 'roomModel',
    function(CONSTANTS, roomModel) {

        return {

            setRoom: function(task) {

                roomModel.room.push(task);
            },

            removeRoomById: function(id) {

                for(var i = roomModel.room.length-1; i >= 0; i--) {

                    if( roomModel.room[i].id == id) {

                        roomModel.room.splice(i,1);
                    }
                }
            },

            checkRoomExistsById: function(id) {

                for(var i = roomModel.room.length-1; i >= 0; i--) {

                    if( roomModel.room[i].id == id) {

                        return true;
                    }
                }

                return false;
            },

            getRoomById: function(id) {

                for(var i = roomModel.room.length-1; i >= 0; i--) {

                    if( roomModel.room[i].id == id) {

                        return roomModel.room[i];
                    }
                }

                return false;
            }
        }
    }]);