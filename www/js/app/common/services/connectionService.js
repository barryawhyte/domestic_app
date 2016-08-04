/**
 *
 * Connection Service
 * Network related functions
 *
 */
domapp.factory("connectionService", [function() {

    return {

        testConnection: function() {

            try {
                if (typeof navigator.onLine != "undefined") {
                    return navigator.onLine;
                }
            } catch (e) {}
        }
    }
}]);