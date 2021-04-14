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
// for a specific Costume.
exports.smartphone_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await smartphone.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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


// Handle Smartphone delete on DELETE.
exports.smartphone_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await smartphone.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Costume update form on PUT.
exports.smartphone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await smartphone.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.brand) toUpdate.brand = req.body.brand;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

    // Handle a show one view with id specified by query
exports.smartphone_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await smartphone.findById( req.query.id)
        res.render('smartphonedetail', 
{ title: 'smartphone Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.smartphone_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('smartphonecreate', { title: 'smartphone Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.smartphone_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await smartphone.findById(req.query.id)
        res.render('smartphoneupdate', { title: 'Smartphone Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.smartphone_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await smartphone.findById(req.query.id)
        res.render('smartphonedelete', { title: 'Smartphone Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

