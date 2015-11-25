/**
 * Created by manga_000 on 24/11/2015.
 */
var router = require('express').Router();
var client = require('../db');

router.get('/index', function(req, res){
    return res.render('units/libroMayor');
});

router.get('/', function(req, res){
    client.execute("SELECT asiento, cuenta, debe, haber FROM asiento", function(err, result){
        if(!err){
            res.json(result.rows);
        } else {
            console.log(JSON.stringify(err));
            res.json();
        }
    });
});

module.exports = router;