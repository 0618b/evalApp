var User        = require('../models/user');
var EvalForm    = require('../models/evalForm');

module.exports = function(router) {
        // http://localhost:3000/api/users
        router.post('/addusers', function(req, res) {
            var user = new User();
            user.username = req.body.username;
            user.password = req.body.password;
            user.firstName = req.body.firstName;
            if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.firstName == null || req.body.firstName == '') {
                res.json({
                  success: false,
                  message: 'Ensure username, email, and password were provided'
                });
            } else {
                user.save(function(err) {
                    if(err) {
                        res.json({
                          success: false,
                          message: 'Username or Email is already exitsts!'
                        });
                    } else {
                        res.json({
                          success: true,
                          message: 'User created!'
                        });
                    }
                });
            }
        });
       
      // http://localhost:3000/api/addevalforms
      router.post('/addevalforms', function(req, res) {
          var ef = new EvalForm();
          ef.evalFormType = req.body.evalFormType;
          ef.evalFormYear = req.body.evalFormYear;
          ef.evalTopic = req.body.evalTopic;
          ef.evalWeight = req.body.evalWeight;
          ef.evalCriteria = req.body.evalCriteria;
          if (req.body.evalFormType == null || req.body.evalFormType == '' || req.body.evalFormYear == null || req.body.evalFormYear == '' || req.body.evalTopic == null || req.body.evalTopic == ''
          || req.body.evalWeight == null || req.body.evalWeight == '' || req.body.evalCriteria == null || req.body.evalCriteria == '') {
            res.json({
              success: false,
              message: 'โปรดกรอกข้อมูลให้ครบถ้วน :('
            });
        } else {
          ef.save(function(err) {
            if(err) {
              res.json({
                success: false,
                message: 'มีบางอย่างผิดพลาด!',
              });
            } else {
              res.json({
                success: true,
                message: 'บันทึกคำถามเรียบร้อยแล้ว'
              });
            }
          });
        }
    });

    router.get('/listevalforms', function(req, res) {
        res.send('Hello world');
    });

    

      
  return router;
}