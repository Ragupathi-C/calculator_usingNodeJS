const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1 = req.body.number1;
    var num2 = req.body.number2;

    var result = num1 + num2;

    res.send(result);
})

app.listen(3000, function () {
    console.log("server started");
});