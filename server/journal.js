const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
var ObjectId = require('mongodb').ObjectId;
const path = require('path');
const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors()); 

// EXPRESS
// app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// MONGOOSE
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://ramd2054:Mongo@123456@cluster0.bouhclr.mongodb.net/prac?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

//Schema
var journalSchema = new mongoose.Schema({
  content: String
});

//Model
var Journal = mongoose.model('Journal', journalSchema);

var id;

app.get('/journal', (req, res)=>{
    Journal.find(), (err, docs)=>{
        if(docs){
            console.log(docs);
        }
    }
})

app.post('/journal', (req, res)=>{
    var content = req.body;
    console.log(content);
    // if(id){
    //     Journal.updateOne({"_id": ObjectId(`${id}`)}, {$set: {"text": `${content}`}})
    // }
    // else{
    //     var myData = new Journal(content)
    //     myData.save().then(()=>{
    //         console.log('done');
    //         res.send('This data has been saved to the database')
    //     }).catch(()=>{
    //         console.log('not done');
    //         res.status(400).send('Item was not saved to the database')
    //     });
    // }
})

app.listen(port, () => console.log("Server started on port " + port));
