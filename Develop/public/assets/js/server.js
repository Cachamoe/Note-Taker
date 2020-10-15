// Dependencies
const express = require("express");
const path = require("path");
const uuidv4 = require("uuid/v4");

// Sets up Express 
let app = express();
let id = uuidv4();
let PORT = process.env.PORT || 3000;


// Create Server
let server = app.createServer(handleRequest);
    function handleRequest(req, res) {
        res.end("Server Created" + req.url);
    }


// Server Listener 
app.listen(PORT, function () {
    console.log("App Listening" + PORT)
})
