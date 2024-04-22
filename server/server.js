const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const port = 5003;

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
var authSchema = new mongoose.Schema({
  username: String,
  password: String
});

//Model
var Log = mongoose.model('Log', authSchema);

app.get("/", (req, res) => {
  
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

// listen to server
app.listen(port, () => console.log("Server started on port " + port));
