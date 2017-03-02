angular.module('evalFormControllers', ['evalFormServices'])
  .controller('evalFormControllers', function ($http, $scope) {
      console.log("Hello World from controller");


      var refresh = function() {
        $http.get('/ngevalform').then(function(data) {
          console.log("I got the data that I requested");
          $scope.evalform = data;
          //$scope.evalform = {};
          console.log(data);
        }, function(err) {
          console.log(err);
        });
      };

      refresh();

      $scope.addEvalForm = function() {
        console.log($scope.evalform);
        $http.post('/ngevalform', $scope.evalform).then(function (data) {
          refresh();
        }, function(err) {
          console.log(err);
        });
      };

      $scope.remove = function(id) {
        console.log(id);
        $http.delete('/ngevalform/' + id).then(function (data) {
          refresh();
        }, function(err) {
          console.log(err);
        });
      };

      $scope.edit = function(id) {
        console.log(id);
        $http.get('/ngevalform/' + id).then(function (data) {
          $scope.evalform = data;
        }, function(err) {
          console.log(err);
        });
      };

      $scope.update = function() {
        console.log('/ngevalform/' + $scope.evalform.data_id, $scope.evalform.data).then(function (data) {
          refresh();
        }, function(err) {
          console.log(err);
        })
      };

      $scope.deselect = function() {
        $scope.evalform = "";
      }
  });

 
