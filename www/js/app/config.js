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
                url: '/tasklist',
                views: {
                    'taskList': {
                        templateUrl: CONSTANTS.BASE_PATH + 'task/directives/taskList.html',
                        controller: 'taskListController'
                    }
                }
            })
            .state('task', {
                url: '/task/:id',
                views: {
                    'task': {
                        templateUrl: CONSTANTS.BASE_PATH + 'task/directives/task.html',
                        controller: 'taskController'
                    }
                }
            })
            .state('employeeList', {
                url: '/employee',
                views: {
                    'employeeList': {
                        templateUrl: CONSTANTS.BASE_PATH + 'employee/directives/employeeList.html',
                        controller: 'employeeListController'
                    }
                }
            })
            .state('employee', {
                url: '/employee/:id',
                views: {
                    'employee': {
                        templateUrl: CONSTANTS.BASE_PATH + 'employee/directives/employee.html',
                        controller: 'employeeController'
                    }
                }
            })
            .state('roomList', {
                url: '/room',
                views: {
                    'roomList': {
                        templateUrl: CONSTANTS.BASE_PATH + 'room/directives/roomList.html',
                        controller: 'roomListController'
                    }
                }
            })
            .state('room', {
                url: '/room/:id',
                views: {
                    'room': {
                        templateUrl: CONSTANTS.BASE_PATH + 'room/directives/room.html',
                        controller: 'roomController'
                    }
                }
            });

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
