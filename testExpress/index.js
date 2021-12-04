const express = require("express"); //引入express
const bodyParser = require('body-parser'); //引入body-parser
const session = require('express-session'); //引入express-session
const flash = require('connect-flash'); //引入connect-flash
const app = express();
const port = 5001; //設定port
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

function redirectBack(req, res) {
    res.redirect("back");
}

app.get("/", commentController.index);

app.get("/login", userController.login);
app.post("/login", userController.handleLogin, redirectBack);
app.get("/logout", userController.logout);
app.get("/register", userController.register);
app.post("/register", userController.handleRegister, redirectBack);

app.post("/comment", commentController.add);
app.get("/delete_comments/:id", commentController.delete);
app.get("/update_comments/:id", commentController.update);
app.post("/update_comments/:id", commentController.handleUpdate);

app.listen(port, () => { //app.listen(port, callback)

    console.log(`Example app listening on port ${port}`);
})