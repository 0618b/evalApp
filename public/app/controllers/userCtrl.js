angular.module('userControllers', ['userServices'])

  .controller('addUserControllers', function($http, $location, $timeout, User) {

    var app = this;

    this.addUser = function(addUdata) {
      app.loading = true;
      app.errorMsg = false;

      User.create(app.addUdata).then(function(data) {
        if (data.data.success) {
          app.loading = false;
          // Create Success Message
          app.successMsg = data.data.message + '...Redirecting';
          // Redirect to home page
          $timeout(function() {
            $location.path('/');
          }, 2000);
        } else {
          app.loading = false;
          app.errorMsg = data.data.message;
        }
      });
    };
});
