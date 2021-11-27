const todoModel = require("../models/todo");
const todoController = {
    getAll: (req, res) => {
        todoModel.getAll((err, results) => {
            if (err) return console.log(err);
            res.render("todos", { //res.render(去view裡面找甚麼資料, {要帶的資料})
                todos: results
            });
        });
    },

    get: (req, res) => {
        const id = req.params.id;
        todoModel.get(id, (err, results) => {
            if (err) return console.log(err);
            res.render("todo", {
                todo: results[0]
            });
        });
    },

    newTodo: (req, res) => {
        const content = req.body.content;
        todoModel.add(content, err => {
            if (err) return console.log(err);
            res.redirect('/todos');
        })
    },

    addTodo: (req, res) => {
        res.render('addTodo');
    }
}
module.exports = todoController;