angular.module('addEvalFormControllers', ['addEvalFormServices'])

  .controller('addEvalFormCtrl', function($http, $location, $timeout, $scope, EvalForm) {

    var app = this;

    this.addEvalForm = function(addEfdata) {
      app.loading = true;
      app.errorMsg = false;

      EvalForm.create(app.addEfdata).then(function(data) {
        if (data.data.success) {
          app.loading = false;
          // Create Success Message
          app.successMsg = data.data.message;
        } else {
          app.loading = false;
          app.errorMsg = data.data.message;
        }
      });
    };
});
