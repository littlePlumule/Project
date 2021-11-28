const express = require("express"); //引入express
const bodyParser = require('body-parser'); //引入body-parser
const session = require('express-session'); //引入express-session
const flash = require('connect-flash'); //引入connect-flash
const db = require('./db'); //引入mysql
const app = express();
const port = 5001; //設定port
const todoController = require("./controllers/todo");
const userController = require("./controllers/user");
const commentController = require("./controllers/comment");

app.set("view engine", "ejs"); //要使用甚麼引擎
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use((req, res, next) => {
        res.locals.username = req.session.username;
        res.locals.errorMessage = req.flash("errorMessage");
        next();
    })
    // app.use((req, res, next) => {
    //     res.locals.isLogin = req.session.isLogin;
    //     res.locals.errorMessage = req.flash("errorMessage");
    //     next();
    // })
function redirectBack(req, res) {
    res.redirect("back");
}

// app.get("/", (req, res) => { //app.method("網址", callback)
//     res.send("index"); //輸出
// })
// app.get("/", todoController.addTodo);
app.get("/", commentController.index);
app.post("/todos", todoController.newTodo);
app.get("/todos", todoController.getAll);
app.get("/todos/:id", todoController.get);
app.get("/login", userController.login);
app.post("/login", userController.handleLogin, redirectBack);
app.get("/logout", userController.logout);
app.get("/register", userController.register);
app.post("/register", userController.handleRegister, redirectBack);
app.post("/comment", commentController.add);
app.get("/delete_comments/:id", commentController.delete);
app.get("/update_comments/:id", commentController.update);
app.post("/update_comments/:id", commentController.handleUpdate);
// app.get("/login", (req, res) => {
//     res.render("login");
// })
// app.post("/login", (req, res) => {
//     if (req.body.password === "abc") {
//         req.session.isLogin = true;
//         res.redirect("/");
//     } else {
//         req.flash("errorMessage", "Please input the correct password");
//         res.redirect("login");
//     }
// })
// app.get("/logout", (req, res) => {
//     req.session.isLogin = false;
//     res.redirect("/");
// })


app.listen(port, () => { //app.listen(port, callback)
    db.connect()
    console.log(`Example app listening on port ${port}`);
})