/**
 *
 * Helper Service
 * Service providing common helper functions
 *
 */
domapp.factory("helperService", [function() {

    return {

        //Returns correctly formatted current date
        getCurrentDate: function() {

            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();

            //Pad months and days with a leading 0
            if(month < 10){
                month = '0' + month;
            }

            if(day < 10){
                day = '0' + day;
            }

            return day + '/' + month + '/' + year;
        },

        //Returns correctly formatted current time
        getCurrentTime: function(round) {

            var today = new Date();
            var hours = today.getHours();
            var minutes = today.getMinutes();

            if(round) {
                //Round minutes to nearest 5 so as not to break the time controls
                if (minutes <= 57) {
                    minutes = String((minutes % 5) >= 2.5 ? parseInt(minutes / 5) * 5 + 5 : parseInt(minutes / 5) * 5);
                } else {
                    minutes = '00';
                }
            }

            //Pad hours and minutes with a leading 0
            if(hours.toString().length == 1){
                hours = '0' + hours;
            }

            if(minutes.toString().length == 1){
                minutes = '0' + minutes;
            }

            return hours + ":" + minutes;
        },

        //Case insensitive email validation
        checkEmail: function(email) {

            var filter=/^[a-zA-Z0-9!#$%&'*+/=?^_`{~-]+((\.[a-zA-Z0-9!#$%&'*+/=?^_`{~-]+)?)+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/;

            return filter.test(email);
        },

        //Converts duration (i.e. {hours}h{minutes} into decimal for the WS
        convertToDecimal: function(property) {

            if(typeof property != 'undefined' && property != null) {

                var hours = 0;
                var minutes = 0;

                if (property.indexOf('h') > -1) {

                    //Split duration property and limit each to 2 chars
                    var splitProperty = property.split('h');
                    hours = splitProperty[0].toString().substring(0, 2);
                    minutes = splitProperty[1].toString().substring(0, 2);

                    //If either are empty we substitute 0
                    if(hours == '') {
                        hours = 0;
                    }

                    if(minutes == '') {
                        minutes = 0;
                    }
                } else {

                    //If there is no 'h' char in the string then we consider the duration to only be in minutes
                    minutes = property.toString().substring(0, 2);
                }

                minutes = parseInt(minutes);
                hours = parseInt(hours);

                //Minute rounding
                if (minutes >= 0 && minutes <= 7.5) {
                    minutes = 0;
                } else if (minutes > 7.5 && minutes <= 22.5) {
                    minutes = 25;
                } else if (minutes > 22.5 && minutes <= 37.5) {
                    minutes = 50;
                } else if (minutes > 37.5 && minutes <= 52.5) {
                    minutes = 75;
                } else {
                    minutes = 0;
                }

                //Rebuild as string (in decimal form)
                property = hours + '.' + minutes;
            }

            return property;
        },

        convertToHoursMinutes: function(property) {

            if(typeof property != 'undefined' && property !== null && property !== "") {

                var hours = 0;
                var minutes = 0;

                property = property.toString();

                if (property.indexOf('.') > -1) {

                    //Split duration property and limit each to 2 chars
                    var splitProperty = property.split('.');
                    hours = splitProperty[0];
                    minutes = splitProperty[1];

                    //If either are empty we substitute 0/00 - This should never be the case
                    if(hours == '') {
                        hours = 0;
                    }

                    if(minutes == '') {
                        minutes = 0;
                    }
                }

                minutes = parseInt(minutes);
                hours = parseInt(hours);

                //Minute conversion
                if (minutes >= 0 && minutes <= 12) {
                    minutes = '00';
                } else if (minutes > 12 && minutes <= 37) {
                    minutes = '15';
                } else if (minutes > 37 && minutes <= 62) {
                    minutes = '30';
                } else if (minutes > 62 && minutes <= 87) {
                    minutes = '45';
                } else {
                    minutes = '00';
                }

                //Rebuild as string (in decimal form)
                property = hours + 'h' + minutes;
            }

            return property;
        }

    }
}]);