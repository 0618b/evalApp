var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvalFormSchema = new Schema ({
    evalFormType: { type: String, required: true },
    evalFormYear: { type: String, required: true },
    evalTopic: { type: String, required: true },
    evalWeight: { type: String, required: true },
    evalCriteria: { type: String, required: true },
    //evalFormCategory: { type: String, required: true}
});

module.exports = mongoose.model('EvalForm', EvalFormSchema);
