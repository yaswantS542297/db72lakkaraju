var smartphone = require('../models/smartphone');
// List of all Smartphone
exports.smartphone_list = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone list');
};
// for a specific Smartphone.
exports.smartphone_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone detail: ' + req.params.id);
};
// Handle Smartphone create on POST.
exports.smartphone_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone create POST');
};
// Handle Smartphone delete form on DELETE.
exports.smartphone_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone delete DELETE ' + req.params.id);
};
// Handle Smartphone update form on PUT.
exports.smartphone_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone update PUT' + req.params.id);
};