const { createPool } = require('mysql');

const pool = createPool({
    port: 3306,
    host: 'localhost',
    database: 'node_db_course',
    user: 'root',
    password: 'root',
    connectionLimit: 5
});

pool.getConnection(function (err, connection) {
    if (err) {
        console.log(err);
    } else {
        console.log('db connected!');
    }
});

module.exports = pool;
