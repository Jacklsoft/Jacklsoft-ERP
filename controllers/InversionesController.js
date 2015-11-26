/**
 * Created by manga_000 on 25/11/2015.
 */
var router = require('express').Router();
var client = require('../db');

router.get('/index', function(req, res){
    return res.render('units/inversiones');
});

router.post('/', function(req, res){
    var doc = res.body;
});

module.exports = router;