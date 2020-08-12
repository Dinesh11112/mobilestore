var mongoose = require('mongoose');
var mobileSchema = new mongoose.Schema({
    name: {type: String, require:true},
    type:{type: String},
    latest: {type: String},
    cost: {type: Number},
    rating:{type: Number}
});
mongoose.model('mobile', mobileSchema, 'MobileData');