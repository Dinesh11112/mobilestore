var express = require('express');
var router = express.Router();
var ctrlMobile = require('../controllers/mobile');

router.get('/mobile', ctrlMobile.getMobiles)
router.post('/mobile', ctrlMobile.createMobile)

router.get('/mobile/:mobileid',ctrlMobile.getSingleMobile)
router.put('/mobile/:mobileid',ctrlMobile.updateMobile)
router.delete('/mobile/:mobileid', ctrlMobile.deleteMobile)

module.exports = router;
