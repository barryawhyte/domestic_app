/**
 *
 * Task Local Service
 *
 */
domapp.factory("taskLocalService", ['CONSTANTS', 'taskModel', 'helperService',
    function(CONSTANTS, taskModel, helperService) {

        return {

            setTask: function(task) {

                taskModel.task.push(task);
            },

            removeTaskById: function(taskId) {

                for(var i = taskModel.task.length-1; i >= 0; i--) {

                    if( taskModel.task[i].id == taskId) {

                        taskModel.task.splice(i,1);
                    }
                }
            },

            checkTaskExistsById: function(taskId) {

                for(var i = taskModel.task.length-1; i >= 0; i--) {

                    if( taskModel.task[i].id == taskId) {

                        return true;
                    }
                }

                return false;
            },

            getTaskById: function(taskId) {

                for(var i = taskModel.task.length-1; i >= 0; i--) {

                    if( taskModel.task[i].id == taskId) {

                        return taskModel.task[i];
                    }
                }

                return false;
            }
        }
    }]);