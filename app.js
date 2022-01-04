const express = require("express");
const path = require ("path");
const publicPath = path.resolve(__dirname, "./public");
const app = express();

app.use(express.static(publicPath));

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log("levantando servidor en el puerto" + app.get('port')));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"))
})