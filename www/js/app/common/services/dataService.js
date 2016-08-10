/**
 *
 * Data Service
 * Service handling communication with Firebase realtime data api
 *
 */
domapp.factory("dataService", ['taskModel',
    function(taskModel) {

    return {

        setData: function(ref, data) {

            firebase.database().ref(ref).set(data);
        },

        getDataSnapshot: function(ref, callback) {

            firebase.database().ref(ref).once('value').then(function(snapshot) {

                callback(snapshot);
            });

        },

        activateDataValueRead:function(ref, model) {

            firebase.database().ref(ref).on('value', function(snapshot) {

                taskModel.task = snapshot.val();
            });
        }
    }
}]);
