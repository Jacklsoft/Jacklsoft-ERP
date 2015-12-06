/**
 * Created by manga_000 on 06/12/2015.
 */
var router = require('express').Router();
var client = require('../db');

router.get('/index', function(req, res){
    return res.render('units/planCuentas');
});

module.exports = router;