/**
 * Created by manga_000 on 24/11/2015.
 */
var router = require('express').Router();

router.get('/index', function(req, res){
    return res.render('units/asientos', {mainController: 'asientos'});
});

router.get('/', function(req, res){

});

module.exports = router;