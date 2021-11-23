const express = require("express");
const app = express();
const port = 5001;

app.set("view engine", "ejs"); //要使用甚麼引擎

app.get("/", (req, res) => { //app.method("網址", callback)
    res.send("index"); //輸出
})

app.get("/todos", (req, res) => {
    res.render("todos", { //res.render(去view裡面找甚麼資料, {要帶的資料})
        todos
    });
})

app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos[id];
    res.render("todo", {
        todo
    });
})
app.get("/hello", (req, res) => {
    res.render("hello");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})