var app = angular.module("redditApp", ['angularMoment']);


//submit controller
app.controller('submitController', function ($scope){
  $scope.submitList = []
  $scope.addSubmit = function(){
    $scope.submitList.push({title:$scope.title, author:$scope.author, imageUrl:$scope.imageUrl, description:$scope.description})
    $scope.title = ""
    $scope.author = ""
    $scope.imageUrl = ""
    $scope.description = ""
  }
});

// vote controller
  app.controller ('voteController', function($scope){
    $scope.votes = 0
    $scope.voteUp = function(){
      $scope.votes++;
    }
    $scope.voteDown = function(){
      $scope.votes--;
    }
  });

// toggle comments
app.controller ('commentController', function($scope){
  $scope.commentsList = []
  $scope.addComment = function(){
    $scope.commentsList.push({commentAuthor:$scope.commentAuthor, commentText:$scope.commentText})
    $scope.commentAuthor = ""
    $scope.commentText = ""
  }
})

// time
app.controller('mainController', function($scope) {
  $scope.vm = this;
  $scope.vm.time = new Date();
});
