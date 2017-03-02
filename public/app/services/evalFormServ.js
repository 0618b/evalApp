angular.module('evalFormServices', [])
  .factory('EvalForm', function($http) {
    evalFormFactory = {};

    // EvalForm.create(addEfdata)
    evalFormFactory.create = function(addEfdata) {
      return $http.post('/api/addevalforms', addEfdata);
    }
    evalFormFactory.list = function(data) {
      return $http.get('/api/listevalforms', data);
    }
    return evalFormFactory;
  });
