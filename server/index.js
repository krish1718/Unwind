const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const path = require('path');
const cors = require("cors");
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://unwind-ruby.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// EXPRESS
app.use('/static', express.static('static'));
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
var authSchema = new mongoose.Schema({
  username: String,
  password: String
});

//Model
var Log = mongoose.model('Log', authSchema);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  var myData = new Log(req.body)
  myData.save().then(()=>{
    console.log('done');
    res.send('This data has been saved to the database')
  }).catch(()=>{
    console.log('not done');
      res.status(400).send('Item was not saved to the database')
  });
});

app.post('/login', (req, res)=>{
  var username = req.body.username;
  var password = req.body.password;

  console.log(req.body);

  Log.find({username: `${username}`}, {password: `${password}`}, (err, docs)=>{
      if(docs.length == 0){
          console.log('acc not found');
          res.status(400).send('Invalid credentials')
      }
      else{
          console.log('acc found');
          console.log(username);
          const data = true;
          res.json(data);
      }
  });
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

app.use(session({
    secret: 'thisisasecretkey',
    resave: false,
    saveUninitialized: false,
    username: '',
    type: ''
}))

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

//Schema
var commSchema = new mongoose.Schema({
  username: String,
  message: String
});

//Model
var Group1 = mongoose.model('Group1', commSchema);
var Group2 = mongoose.model('Group2', commSchema);

app.post("/community", (req, res) => {
    var groupname = req.query.chat;
    console.log("hiiii");

    // if(groupname == 'TSEC students'){
    if(groupname == 'ConvoCare'){
        var myData = new Group1(req.body)
        myData.save().then(()=>{
            console.log('done');
            res.send('This data has been saved to the database')
        }).catch(()=>{
            console.log('not done');
            res.status(400).send('Item was not saved to the database')
        });
    }
    else{
        var myData = new Group2(req.body)
        myData.save().then(()=>{
            console.log('done');
            res.send('This data has been saved to the database')
        }).catch(()=>{
            console.log('not done');
            res.status(400).send('Item was not saved to the database')
        });
    }
});

app.get("/community", (req, res)=>{
    var dummyname = req.query.chat;
    console.log(dummyname);

    if(dummyname == 'Group1'){
        // dummyname = dummyname.toLowerCase();
        let view;
        async function viewMessages(){
            view = await db.collection('group1').find().toArray();
            console.log(view);
            res.json(view);
        }
        viewMessages();
    }
    else{
        // dummyname = group2;
        let view;
        async function viewMessages(){
            view = await db.collection('group2').find().toArray();
            res.json(view);
        }
        viewMessages();
    }
})

// listen to server
app.listen(port, () => console.log("Server started on port " + port));