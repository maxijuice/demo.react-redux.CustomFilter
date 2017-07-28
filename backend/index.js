var express = require("express");
var app = express();
var serverData = require("./index.json");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/data", function (req, res) {
    res.json(serverData);
});

app.listen(3000, function () {
    console.log("Started");
});
