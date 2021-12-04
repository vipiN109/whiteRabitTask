const mongoose=require('mongoose')
const schema=mongoose.Schema;

const user=new schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    introduction:{type:String},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    experience:[{job:{type:String},company:{type:String}}],
    achievements:[{achievemnt:{type:String},companyName:{type:String}}],
    status:{type:String,default:"1"}
})

module.exports=mongoose.model('User',user)