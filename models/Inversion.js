/**
 * Created by manga_000 on 25/11/2015.
 */
var db = require('../db');

module.exports = db.model('Inversion', {
    fec: db.Schema.Types.Date,  // Fecha
    inv: db.Schema.Types.String,    // Inversor
    des: db.Schema.Types.String,    // Descripción
    mon: db.Schema.Types.Number,    // Monto
});