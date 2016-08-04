/**
 *
 * Application Initialisation Logic
 *
 */
domapp.run(['$rootScope', '$location', 'CONSTANTS', '$ionicPlatform',
    function($rootScope, $location, CONSTANTS, $ionicPlatform) {

        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        var firebaseConfig = {
            apiKey: "AIzaSyA8U-6Er8GMbh8jn7ceyLc5fliWdWC0p88",
            authDomain: "domapp-eecc2.firebaseapp.com",
            databaseURL: "https://domapp-eecc2.firebaseio.com",
            storageBucket: ""
        };

        firebase.initializeApp(firebaseConfig);
    }]);