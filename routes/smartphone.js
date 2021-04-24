var express = require('express');
const smartphone_controlers= require('../controllers/smartphone');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET smartphones */
router.get('/', smartphone_controlers.smartphone_view_all_Page);

/* GET detail smartphone page */
router.get('/detail', smartphone_controlers.smartphone_view_one_Page);

/* GET create smartphone page */
router.get('/create', smartphone_controlers.smartphone_create_Page);

/* GET create update page */
router.get('/update', secured, smartphone_controlers.smartphone_update_Page);

/* GET create smartphone page */
router.get('/delete', smartphone_controlers.smartphone_delete_Page);

module.exports = router;