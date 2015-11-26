/**
 * Created by manga_000 on 25/11/2015.
 */
var db = require('../db');

module.exports = db.model('Asiento', {
    fec: db.Schema.Types.Date,  // Fecha
    val: db.Schema.Types.Boolean,   // Válido
    des: db.Schema.Types.String,    // Descripción
    items: [    // Estructura del asiento
        {
            cue: db.Schema.Types.String,    // Cuenta
            deb: db.Schema.Types.Number,    // Debe
            hab: db.Schema.Types.Number     // Haber
        }
    ]
});