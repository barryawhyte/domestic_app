/**
 *
 * Directive for Signature block of the PVI
 *
 */
domapp.directive("pviSignaturePad", ['CONSTANTS', 'TEXT', 'alertService', '$timeout', '$location', '$ionicScrollDelegate',
    function(CONSTANTS, TEXT, alertService, $timeout, $location, $ionicScrollDelegate) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviSignaturePad.html",
            restrict: 'E',
            replace: true,
            priority: 0,

            link: function postLink(scope, element, iAttrs, ctrl) {

                $timeout(function () {

                    var wrapper = document.getElementById("signature-pad"),
                        clearButton = wrapper.querySelector("[data-action=clear]"),
                        cancelButton = wrapper.querySelector("[data-action=cancel]"),
                        saveButton = wrapper.querySelector("[data-action=save]"),
                        canvas = wrapper.querySelector("canvas");

                    function resizeCanvas() {

                        canvas.style.width ='100%';
                        canvas.style.height = '100%';

                        canvas.width = window.innerWidth;
                        canvas.height = window.innerWidth > window.innerHeight?210:480;
                    }

                    window.onresize = resizeCanvas;
                    resizeCanvas();

                    scope.signaturePad = new SignaturePad(canvas);

                    clearButton.addEventListener("click", function (event) {

                        scope.signaturePad.clear();
                    });

                    cancelButton.addEventListener("click", function (event) {

                        scope.signaturePad.clear();
                        scope.blockModel.block.signature_pad = false;
                        scope.$apply();
                    });

                    saveButton.addEventListener("click", function (event) {

                        if (scope.signaturePad.isEmpty()) {

                            alertService.displayAlert(
                                TEXT.UA_NO_SIGNATURE_TITLE,
                                TEXT.UA_NO_SIGNATURE_TEXT,
                                false
                            );

                        } else {

                            switch(scope.currentSignatureType) {

                                case CONSTANTS.SIGNATURE_CLIENT:

                                    scope.pvi.client_signature_data = scope.signaturePad.toDataURL();
                                    break;
                                case CONSTANTS.SIGNATURE_TI:

                                    scope.pvi.ti_signature_data = scope.signaturePad.toDataURL();
                                    break;
                            }

                            scope.signaturePad.clear();

                            scope.blockModel.block.signature_pad = false;
                            scope.$apply();

                            //Autoscroll to the correct signature button
                            var location = $location.hash(scope.currentSignatureType);
                            $ionicScrollDelegate.$getByHandle('mainScroll').anchorScroll("#"+ location);
                        }
                    });
                });
            }
        };
    }]);