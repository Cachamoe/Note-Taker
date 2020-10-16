// Dependencies
let express = require("express");
let path = require("path");


// Sets up Express 
let app = express();
let PORT = process.env.PORT || 3000;


// Create a unique ID
function createID(){
    let time = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (time + Math.random()*16)%16 | 0;
        time = Math.floor(time/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

console.log(createID());

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Server Listener 
app.listen(PORT, function () {
    console.log("App Listening" + PORT)
})

