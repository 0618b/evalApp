angular.module('evalFormControllers', ['evalFormServices'])
  .controller('evalFormControllers', function ($http, $scope) {
      console.log("Hello World from controller");

      var refresh = function() {
        $http.get('/ngevalform').then(function(success, response) {
          console.log("I got the data that I requested");
          $scope.evalforms = response;
          $scope.evalformlist = {};
        }, function(err) {
          console.log(err);
        });
      };

      refresh();

      $scope.addEvalForm = function() {
        console.log($scope.evalform);
        $http.post('/ngevalform', $scope.evalform).then(function (success, response) {
          refresh();
        }, function(err) {
          console.log(err);
        });
      };

      $scope.remove = function(id) {
        console.log(id);
        $http.delete('/ngevalform/' + id).then(function (success, response) {
          refresh();
        }, function(err) {
          console.log(err);
        });
      };

      $scope.edit = function(id) {
        console.log(id);
        $http.get('/ngevalform/' + id).then(function (success, response) {
          $scope.evalform = response;
        }, function(err) {
          console.log(err);
        });
      };

      $scope.update = function() {
        console.log('/ngevalform/' + $scope.evalform._id, $scope.evalform).then(function (success, response) {
          refresh();
        }, function(err) {
          console.log(err);
        })
      };

      $scope.deselect = function() {
        $scope.evalform = "";
      }
  });

 
