const { urlencoded } = require('express');
const express=require('express');
require('dotenv').config();//for importing the environment variables of .env file
const routes=require('./routes/route.js');
const app=express();
//middleware for parsing the incoming json data
app.use(express.json());
//middleware for parsing the incoming form data
app.use(express.urlencoded({extended:true}));
//seting the view engine 
app.set('view engine',"ejs");
// calling  all routes which are written in route.js
app.use(routes);
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on port ${port}`));
