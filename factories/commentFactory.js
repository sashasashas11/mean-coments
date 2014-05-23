angular.module('comments')
        .factory('CommentFactory', function(userFactory) {
            return function Comment() {
                this.text = '',
                this.user = userFactory;
                this.date = new Date()
            }
        });
