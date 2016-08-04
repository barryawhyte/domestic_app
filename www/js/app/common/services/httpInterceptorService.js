/**
 *
 * HTTP Interceptor Service
 * Service handling HTTP status code errors
 *
 */
domapp.service('httpInterceptor', ['CONSTANTS', '$q', function(CONSTANTS, $q) {

    var service = this;

    service.responseError = function(response) {

        switch(response.status) {

            case 400:
                //alert('400 - Bad params');
                //routingService.navigate(CONSTANTS.INT_RT_LOGIN);
                break;
            case 401:
                //alert('401 - Not authorized');
                //routingService.navigate(CONSTANTS.INT_RT_LOGIN);
                break;
            case 403:
                //alert('403' - Forbidden');
                //routingService.navigate(CONSTANTS.INT_RT_LOGIN);
                break;
            case 404:
                //alert('404 - Not found');
                //routingService.navigate(CONSTANTS.INT_RT_LOGIN);
                break;
            case 500:
                //alert('500 - Server error');
                //routingService.navigate(CONSTANTS.INT_RT_LOGIN);
                break;
        }

        return $q.reject(response);
    };
}]);