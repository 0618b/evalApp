angular.module('addEvalFormServices', [])
  .factory('EvalForm', function($http) {
    evalFormFactory = {};

    // EvalForm.create(addEfdata)
    evalFormFactory.create = function(addEfdata) {
      return $http.post('/api/addevalforms', addEfdata);
    }
    return evalFormFactory;
  });
