/**
 *
 * Directive for Preparation block of the PVI
 *
 */
domapp.directive("pviPrepareMateriel", ['CONSTANTS', 'TEXT', 'alertService',
    function(CONSTANTS, TEXT, alertService) {

        return {
            templateUrl: CONSTANTS.BASE_PATH + "task/directives/pviPrepareMateriel.html",
            restrict: 'C',
            replace: true,
            priority: 0,
            scope: false,

            link: function postLink(scope, element, iAttrs, ctrl) {

                //add a material item to the material list
                scope.addMaterial = function() {

                    var material = {
                        "line": scope.pvi.materials.length + 1,
                        "elec_substation": "",
                        "elec_board": "",
                        "function": "",
                        "material_info": ""
                    };

                    scope.validationMateriel.elec_substation['line_' + material.line] = {"error": false};
                    scope.validationMateriel.elec_board['line_' + material.line] = {"error": false};
                    scope.validationMateriel.function['line_' + material.line] = {"error": false};
                    scope.validationMateriel.material_info['line_' + material.line] = {"error": false};

                    scope.pvi.materials.push(material);
                };

                //Remove a material item from the material list
                scope.removeMaterial = function(line) {

                    var removeItem = function() {

                        var found = false;

                        for(var i = scope.pvi.materials.length-1; i >= 0; i--) {

                            if(scope.pvi.materials[i].line == line) {

                                //Remove from the task model
                                scope.pvi.materials.splice(i,1);
                                found = true;
                            }
                        }

                        for (var i = 0,  length = scope.pvi.materials.length; i < length; i++) {

                            if(found && scope.pvi.materials[i].line > line && typeof scope.pvi.materials[i] != 'undefined') {

                                if(scope.pvi.materials[i].line > 1) {

                                    var newLine = parseInt(scope.pvi.materials[i].line) - 1;

                                    scope.validationMateriel.elec_substation['line_' + newLine] = scope.validationMateriel.elec_substation['line_' + scope.pvi.materials[i].line];
                                    scope.validationMateriel.elec_board['line_' + newLine] = scope.validationMateriel.elec_board['line_' + scope.pvi.materials[i].line];
                                    scope.validationMateriel.function['line_' + newLine] = scope.validationMateriel.function['line_' + scope.pvi.materials[i].line];
                                    scope.validationMateriel.material_info['line_' + newLine] = scope.validationMateriel.material_info['line_' + scope.pvi.materials[i].line];

                                    scope.pvi.materials[i].line = newLine;
                                }
                            }
                        }
                    };

                    for (var i = 0,  length = scope.pvi.materials.length; i < length; i++) {

                        if (scope.pvi.materials[i].line == line) {

                            if ((scope.pvi.materials[i].elec_substation != "" && scope.pvi.materials[i].elec_substation != null) ||
                                (scope.pvi.materials[i].elec_board != "" && scope.pvi.materials[i].elec_board != null) ||
                                (scope.pvi.materials[i].function != "" && scope.pvi.materials[i].function != null) ||
                                (scope.pvi.materials[i].material_info != "" && scope.pvi.materials[i].material_info != null)) {

                                alertService.displayAlert(
                                    TEXT.UA_REMOVE_ITEM_DATA_DELETION_TITLE,
                                    TEXT.UA_REMOVE_ITEM_DATA_DELETION_TEXT,
                                    true,
                                    function() {
                                        removeItem();
                                        scope.$apply();
                                    }
                                );

                            } else {

                                removeItem();
                            }
                        }
                    }
                };
            }
        };
    }]);