/**
 *
 * Employee Local Service
 *
 */
domapp.factory("employeeLocalService", ['CONSTANTS', 'employeeModel',
    function(CONSTANTS, employeeModel) {

        return {

            setEmployee: function(task) {

                employeeModel.employee.push(task);
            },

            removeEmployeeById: function(id) {

                for(var i = employeeModel.employee.length-1; i >= 0; i--) {

                    if( employeeModel.employee[i].id == id) {

                        employeeModel.employee.splice(i,1);
                    }
                }
            },

            checkEmployeeExistsById: function(id) {

                for(var i = employeeModel.employee.length-1; i >= 0; i--) {

                    if( employeeModel.employee[i].id == id) {

                        return true;
                    }
                }

                return false;
            },

            getEmployeeById: function(id) {

                for(var i = employeeModel.employee.length-1; i >= 0; i--) {

                    if( employeeModel.employee[i].id == id) {

                        return employeeModel.employee[i];
                    }
                }

                return false;
            }
        }
    }]);