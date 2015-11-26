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
            return res.json(result);
        } else {
            console.log(JSON.stringify(err));
        }
    });

    return res.json();
});

router.post('/', function(req, res){
    var doc = req.body;
    var debe = 0;
    var haber = 0;

    for(var item in doc.items){
        debe += item.deb;
        haber += item.hab;
    }

    if(debe == haber && debe > 0 && haber > 0){
        doc.val = false;
        new Asiento(doc, function(err, result){
            if(err) console.log(JSON.stringify(err));
            else return res.json(result);
        });
    } else {
        console.log("Asiento no válido.");
    }

    return res.json();
});

router.post('/validate/:id', function(req, res){
    Asiento.findOne({_id: req.params.id}, {val: true}, function(err, result){
        if(err) console.log(JSON.stringify(err));
        else return res.json(result);
    });

    return res.json();
});

module.exports = router;