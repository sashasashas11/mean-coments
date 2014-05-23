angular.module('comments')
        .factory('userFactory', function() {
            var user = {
                name: ""
            };

            setTimeout(function() {
            	user.name = "Sasha"
            }, 1000);

            return user;
        });
