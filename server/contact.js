const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const port = 5002;

const app = express();
app.use(express.json());
app.use(cors()); 

// EXPRESS
// app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// MONGOOSE
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Rishab829:Kanchan%401@expresstry.wqhmyb0.mongodb.net/prac?retryWrites=true&w=majority", {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

//Schema
var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

//Model
var Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        console.log('done');
        res.send('This data has been saved to the database')
    }).catch(()=>{
        console.log('not done');
        res.status(400).send('Item was not saved to the database')
    });
})

app.listen(port, () => console.log("Server started on port " + port));
