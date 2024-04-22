const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const path = require('path');
const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors()); 
app.use(session({
    secret: 'thisisasecretkey',
    resave: false,
    saveUninitialized: false,
    username: '',
    type: ''
}))

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
var surveySchema = new mongoose.Schema({
  username: String,
  dob: String,
  gender: String,
  med: String,
  type: String
});

//Model
var Survey = mongoose.model('Survey', surveySchema);

var stype;

app.get('/type', (req, res)=>{
    console.log(stype);
    res.json(stype);
})

app.post('/survey', (req, res)=>{
    var details = {};
    details.name = req.body.fname.username;
    details.dob = req.body.dob;
    details.gender = req.body.gender;
    details.med = req.body.med;
    details.type = req.body.type;

    req.session.username = req.body.fname.username;
    req.session.type = req.body.type;
    stype = req.body.type;
    console.log(req.session);

    var myData = new Survey(details);
    myData.save().then(()=>{
        console.log('done');
        res.send('This data has been saved to the database')
    }).catch(()=>{
        console.log('not done');
        res.status(400).send('Item was not saved to the database')
    });
})

app.listen(port, () => console.log("Server started on port " + port));
