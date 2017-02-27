angular.module('userServices', [])
  .factory('User', function($http) {
    userFactory = {};

    // User.create(addUdata)
    userFactory.create = function(addUdata) {
      return $http.post('/api/users', addUdata);
    }
    return userFactory;
  });
