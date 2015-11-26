/**
 * Created by manga_000 on 24/11/2015.
 */
var router = require('express').Router();
var Asiento = require('../models/Asiento');

router.get('/index', function(req, res){
    return res.render('units/libroMayor');
});

router.get('/', function(req, res){
    Asiento.find(function(err, result){
        if(!err){
            res.json(result);
        } else {
            console.log(JSON.stringify(err));
            res.json();
        }
    });
});

module.exports = router;