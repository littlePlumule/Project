// const todos = [
//     "first todo", "second todo", "third todo"
// ];
const db = require('../db')

const todoModel = {
    getAll: (cb) => {

        db.query('SELECT * FROM todos', (err, results) => {
            if (err) return cb(err);
            cb(null, results)
        });

    },

    get: (id, cb) => {
        db.query('SELECT * FROM todos WHERE id = ?', [id], (err, results) => {
            if (err) return cb(err);
            cb(null, results)
        });
    },

    add: (content, cb) => {
        db.query('INSERT INTO todos(content) values(?)', [content], (err, results) => {
            if (err) return cb(err);
            cb(null)
        })
    }
}

module.exports = todoModel;