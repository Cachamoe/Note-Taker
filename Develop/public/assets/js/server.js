// Dependencies
let express = require("express");
let path = require("path");


// Sets up Express 
let app = express();
let PORT = process.env.PORT || 3000;


// Create a unique ID
function createID() {
    let time = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (time + Math.random() * 16) % 16 | 0;
        time = Math.floor(time / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

console.log(createID());

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Read the `db.json` file and return all saved notes as JSON.
app.get("/notes", function (req, res) {

});


// Receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function (req, res) {

});


// Receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique 
// `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, 
// remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("/api/notes/:id", function (req, res) {

});



// Server Listener 
app.listen(PORT, function () {
    console.log("App Listening" + PORT)
})

