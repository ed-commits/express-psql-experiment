const { Pool, Client } = require('pg');
const pool = new Pool();

pool.query('DROP TABLE IF EXISTS experimentTable;', (error, results) => {
    if (error) {
        throw error
    }
})

pool.query('CREATE TABLE experimentTable ();', (error, results) => {
    if (error) {
        throw error
    }
})
