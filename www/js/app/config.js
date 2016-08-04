/**
 *
 * Application Configuration
 *
 */
domapp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'ionicDatePickerProvider', 'CONSTANTS',
    function($stateProvider, $urlRouterProvider, $httpProvider, ionicDatePickerProvider, CONSTANTS) {

        $stateProvider
            .state('login', {
                url: '/',
                views: {
                    'login': {
                        templateUrl: CONSTANTS.BASE_PATH + 'login/directives/login.html',
                        controller: 'loginController'
                    }
                }
            })
            .state('taskList', {
                url: '/task',
                views: {
                    'pviUserList': {
                        templateUrl: CONSTANTS.BASE_PATH + 'task/directives/taskList.html',
                        controller: 'taskController'
                    }
                }
            })
            //.state('employeeList', {
            //    url: '/employee',
            //    views: {
            //        'pviOtherList': {
            //            templateUrl: CONSTANTS.BASE_PATH + 'employee/directives/employeeList.html',
            //            controller: 'employeeListController'
            //        }
            //    }
            //})
            //.state('roomList', {
            //    url: '/room',
            //    views: {
            //        'pviOtherList': {
            //            templateUrl: CONSTANTS.BASE_PATH + 'room/directives/roomList.html',
            //            controller: 'roomListController'
            //        }
            //    }
            //})
            .state('task', {
                url: '/task:taskId',
                views: {
                    'pvi': {
                        templateUrl: CONSTANTS.BASE_PATH + 'task/directives/task.html',
                        controller: 'taskController'
                    }
                }
            });
            //.state('employee', {
            //    url: '/employee:employeeId',
            //    views: {
            //        'pvi': {
            //            templateUrl: CONSTANTS.BASE_PATH + 'employee/directives/employee.html',
            //            controller: 'employeeController'
            //        }
            //    }
            //})
            //.state('room', {
            //    url: '/room:roomId',
            //    views: {
            //        'pvi': {
            //            templateUrl: CONSTANTS.BASE_PATH + 'room/directives/room.html',
            //            controller: 'roomController'
            //        }
            //    }
            //});

        $urlRouterProvider.otherwise('/');

        $httpProvider.interceptors.push('httpInterceptor');

        //Config of datepicker
        var datePickerObj = {
            closeLabel: 'Close',
            mondayFirst: false,
            weeksList: ["S", "M", "T", "W", "T", "F", "S"],
            monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            templateType: 'popup',
            showTodayButton: true,
            dateFormat: 'dd MM yyyy',
            closeOnSelect: true
        };

        ionicDatePickerProvider.configDatePicker(datePickerObj);

    }]);
