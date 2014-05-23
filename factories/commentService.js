angular.module('comments')
        .factory('CommentsFactory', function($resource) {
            return $resource('comments/:id',{'id': '@id'},
                    {
                        'query': { method: 'GET', isArray: true }
//                        'update': {method: 'PUT'},
//                        'saveAll': { method: 'PUT', isArray: true }
                    }
            );
        });