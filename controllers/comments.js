angular.module('comments', [])
        .controller('CommentsController',  function($scope, CommentFactory, $http, CommentsFactory) {
			var comments = $scope.comments = [];
//
//            $http.get('/comments').success(function(date) {
//            	date.comments.forEach(function(comment) {
//            		comments. push(comment);
//            	})
//            });
            comments = CommentsFactory.query();

			$scope.newComment = new CommentFactory();
			$scope.add = function(comment) {
				comment.date = new Date();
				comments.push(comment);
                $scope.newComment =  new CommentFactory();
                $http.post('/comments', comment).success(function(data ) {
                    comment._id = data._id;
                });

			}

			$scope.remove = function(comment) {
				var index = comments.indexOf(comment);
				comments.splice(index, 1);
                $http.delete('/comments/' + comment._id);
			}
		})
