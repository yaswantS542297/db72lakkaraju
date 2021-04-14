var express = require('express');
const smartphone_controlers= require('../controllers/smartphone');


var router = express.Router();

/* GET smartphones */
router.get('/', smartphone_controlers.smartphone_view_all_Page);
module.exports = router;

/* GET detail smartphone page */
router.get('/detail', smartphone_controlers.smartphone_view_one_Page);

/* GET create smartphone page */
router.get('/create', smartphone_controlers.smartphone_create_Page);

/* GET create update page */
router.get('/update', smartphone_controlers.smartphone_update_Page);

/* GET create smartphone page */
router.get('/delete', smartphone_controlers.smartphone_delete_Page);

