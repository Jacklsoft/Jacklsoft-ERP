/**
 * Created by manga_000 on 21/11/2015.
 */
var db = require('mongoose');
db.connect('localhost', 'jacklsoft-erp', 27017, {
    user: 'admin',
    pass: 'entrar',
    auth: {
        authdb: 'admin'
    }
});

module.exports = db;