const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// .all() is the method in the app that implements routing
app.all("/home", (request, response) =>{
    response.render("home");
})

app.all("/about", (request, response) => {
    response.render("about")
})

app.all("/works", (request, response) => {
    response.render("works")
})

app.all("/Gallery", (request, response) => {
    response.render("gallery")
})

app.listen(4000, () => {
    console.log("Yey APP running")
})