angular.module('core.employee').
    factory('Employee', ['$resource',
        function($resource){
            return $resource('api/daisy.json', {}, {
                query: {
                    method: 'GET',
                    params: {employee: 'daisy'},
                    isArray: false
                }
            })
        }]);