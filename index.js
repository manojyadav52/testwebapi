const express = require('express');
const mongoose = require('mongoose');
const router = require('./Auth/Router/userController');
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


// connect the database mongoose 
mongoose.connect('mongodb://localhost:27017/frontend1',
{useNewUrlParser: true, useUnifiedTopology:true})

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server will be listen on the ${PORT}`);
});

module.exports = app;
