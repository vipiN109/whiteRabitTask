const express=require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();
const bodyParser=require('body-parser')
const app=express();

const indexRouter=require('./routers/index');

const port=process.env.PORT || 5000
const url=process.env.DB_HOST

mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if (err){
        throw err
    }
    else {
        console.log('done')
    }
})

app.use(bodyParser.urlencoded(
    {extended:true}
))    
app.use(bodyParser.json())
app.use('/',indexRouter)

app.listen(5000,console.log(`started the server ${port}`))