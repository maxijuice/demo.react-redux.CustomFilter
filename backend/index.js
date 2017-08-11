var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var serverData = require("./index.json");

var states = {};

app.use(bodyParser.json()); 

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/data", function (req, res) {
    res.json(serverData);
});

app.get("/state/:widgetId", function(req, res) {
    var response = {};
    var widgetId = req.params.widgetId;

    try {
        response.result = states[widgetId].pop();
        console.log(states);
    } catch (error) {
        response.error = error.name + ": " + error.message;
        delete response.message;
    }

    res.json(JSON.stringify(response));
});

app.post("/state/:widgetId", function (req, res) {
    var response = {};
    var widgetId = req.params.widgetId;

    try {
        if (states.hasOwnProperty(widgetId)) {
            states[widgetId].push(req.body);
        } else {
            states[widgetId] = [req.body];
        }
        
        console.log(states);
        
        response.message = "State was saved successfully";
    } catch (error) {
        response.error = error.name + ": " + error.message;
        delete response.message;
    }

    res.json(JSON.stringify(response));
})

app.listen(3000, function () {
    console.log("Started");
});
