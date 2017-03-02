angular.module('userServices', [])
  .factory('User', function($http) {
    userFactory = {};

    // User.create(addUdata)
    userFactory.create = function(addUdata) {
      return $http.post('/api/addusers', addUdata);
    }
    return userFactory;
  });
