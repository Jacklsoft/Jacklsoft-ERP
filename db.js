/**
 * Created by manga_000 on 21/11/2015.
 */
var db = require('cassandra-driver');
var client = new db.Client({contactPoints: ['127.0.0.1:9042'], keyspace: 'JacklsoftERP'});

module.exports = client;