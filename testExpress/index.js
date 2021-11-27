const express = require("express");
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const port = 5001;
const todoController = require("./controllers/todo");

app.set("view engine", "ejs"); //要使用甚麼引擎
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get("/", (req, res) => { //app.method("網址", callback)
//     res.send("index"); //輸出
// })
app.get("/", todoController.addTodo);
app.get("/todos", todoController.getAll);
app.get("/todos/:id", todoController.get);
app.post("/todos", todoController.newTodo);


app.listen(port, () => { //app.listen(port, callback)
    db.connect()
    console.log(`Example app listening on port ${port}`);
})