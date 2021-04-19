const pool = require("./database");

exports.courseList = function (req, sql, args) {
    return new Promise((resolve, reject) => {
        pool.query(sql, args, (err, rows) => {
            if (err)
                return reject(err);
            rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
        });
    });
}

exports.courseInfo = function (req, sql, args) {
    return new Promise((resolve, reject) => {
        pool.query(sql, args, (err, rows) => {
            if (err)
                return reject(err);
            rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
        });
    });
}

exports.createCourse = function (req, sql, args) {
    return new Promise((resolve, reject) => {
        pool.query(sql, args, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
            }
        })
    })
}
