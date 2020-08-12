var express = require('express');
var router = express.Router();
var cntrl = require('../controller/about')
var dat = require('../controller/data')



/* GET home page. */
router.get('/',cntrl.TitlePag);
router.get('/list',cntrl.homelist);
//router.get('/update',cntrl.mobileUpdate);
router.get('/about',cntrl.AboutPage);
//router.get('/list',dat.ListMob);
//router.get('/display',cntrl.Display);
router.get('/mobile/:mobileid',cntrl.mobileinfo);
router.route('/new')
    .get(cntrl.addNewMobile)
    .post(cntrl.doAddNewMobile)

module.exports = router;