const express=require('express');
var path = require('path');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();
const bodyParser=require('body-parser');
const app=express();
const expressHbs=require('hbs')

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
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'))

app.use('/',indexRouter)

app.listen(port,console.log(`started the server ${port}`))