const todoModel = require("../models/todo");
const todoController = {
    getAll: (req, res) => {
        const todos = todoModel.getAll();
        res.render("todos", { //res.render(去view裡面找甚麼資料, {要帶的資料})
            todos: todos
        });
    },

    get: (req, res) => {
        const id = req.params.id;
        const todo = todoModel.get(id);
        res.render("todo", {
            todo: todo
        });
    }
}
module.exports = todoController;