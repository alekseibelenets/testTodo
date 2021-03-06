const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));




mongoose.connect("mongodb+srv://Alex:36qYMpJ3Ocxzp3VH@cluster0.xyggr.mongodb.net/todos",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const notesSchema ={
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);




app.get("/", function (req, res,) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    let newNote = new Note({
        title: req.body.title,
        content:req.body.content
    })
    newNote.save();
    res.redirect('/');
})
app.listen(3000, function () {
    console.log("server is running on 3000")
})