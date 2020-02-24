const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Tweet = require('./models/tweet.js')


// attempt to connect to db
mongoose.connect("mongodb+srv://fwitter:fwitter@cluster0-bnvrf.mongodb.net/test?retryWrites=true&w=majority")

app.listen(8000, () => console.log("Running express!"));

app.get('/', (req, res) => {
   let newTweet = new Tweet({
     content: "My first tweet ever!"
   })

   newTweet.save((err) => {
       if (err) {
         res.send(err)
       } else {
         res.send({ newTweet })
       }
     })
})
