/**
 * Created by manga_000 on 25/11/2015.
 */
var db = require('../db');

module.exports = db.model('Asiento', {
    fec: db.Schema.Types.Date,
    items: [
        {
            cue: db.Schema.Types.String,
            deb: db.Schema.Types.Number,
            hab: db.Schema.Types.Number
        }
    ]
});