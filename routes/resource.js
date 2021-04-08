var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var smartphone_controller = require('../controllers/smartphone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Smartphone.
router.post('/smartphone', smartphone_controller.smartphone_create_post);
// DELETE request to delete Smartphone.
router.delete('/smartphone/:id', smartphone_controller.smartphone_delete);
// PUT request to update Smartphone.
router.put('/smartphone/:id', smartphone_controller.smartphone_update_put);
// GET request for one Smartphone.
router.get('/smartphone/:id', smartphone_controller.smartphone_detail);
// GET request for list of all Smartphone items.
router.get('/smartphone', smartphone_controller.smartphone_list);

module.exports = router;