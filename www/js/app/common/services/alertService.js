/**
 *
 * Alert Service
 * Service handling application alerts
 *
 */
domapp.factory("alertService", [function() {

        return {

            //displays a popup alert
            displayAlert: function (title, text, showCancelButton, confirmCallback, cancelCallback) {

                swal({
                        title: title,
                        text: text,
                        animation: false,
                        showCancelButton: showCancelButton,
                        confirmButtonColor: "#a5d6a7",
                        confirmButtonText: "Oui",
                        cancelButtonText: "Non",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    },
                    function (isConfirm) {
                        if (isConfirm) {

                            if(typeof confirmCallback != 'undefined') {

                                confirmCallback();
                            }
                        } else {
                            if(typeof cancelCallback != 'undefined') {

                                cancelCallback();
                            }
                        }
                    });
            }
        }
    }]);