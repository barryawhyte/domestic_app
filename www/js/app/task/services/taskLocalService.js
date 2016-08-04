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

            removeOtherPviById: function(pviId) {

                for(var i = pviOtherModel.pvi.length-1; i >= 0; i--) {

                    if( pviOtherModel.pvi[i].id == pviId) {

                        pviOtherModel.pvi.splice(i,1);
                    }
                }

                //update task model in local storage
                persistenceService.setLocalStorage(CONSTANTS.LS_KEY_PVI_OTHER);
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