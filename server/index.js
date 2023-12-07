const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require('./models/User');
const cors = require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://merntutorial:Kalaivani22@cluster0.sbdqnto.mongodb.net/merntuto?retryWrites=true&w=majority');


app.get('/getusers',(req,res)=>{
    User.find({}).exec()
  .then(results => {
   res.json(results)
  })
  .catch(err => {
    res.json(err)
  });
})

app.post('/createUser', async(req, res) => {
    const user = req.body;
    const newuser = new User(user);
    await newuser.save();

    res.json(user)
    
})
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("SERVER IS LISTENING");
})
