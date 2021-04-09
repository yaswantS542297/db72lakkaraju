var smartphone = require('../models/smartphone');
// List of all Smartphone
//exports.smartphone_list = function(req, res) {
// res.send('NOT IMPLEMENTED: smartphone list');
//};

// List of all Costumes
exports.smartphone_list = async function(req, res) {
    try{
    thesmartphones = await smartphone.find();
    res.send(thesmartphones);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific Smartphone.
exports.smartphone_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone detail: ' + req.params.id);
};
// Handle Smartphone create on POST.
//exports.smartphone_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: smartphone create POST');
//};


exports.smartphone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new smartphone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.cost = req.body.cost;
    document.brand = req.body.brand;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };


// Handle Smartphone delete form on DELETE.
exports.smartphone_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone delete DELETE ' + req.params.id);
};
// Handle Smartphone update form on PUT.
exports.smartphone_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: smartphone update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.smartphone_view_all_Page = async function(req, res) {
    try{
    smartphone = await smartphone.find();
    res.render('smartphone', { title: 'smartphone Search Results', results: smartphones });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };