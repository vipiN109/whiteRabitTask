const userModel=require('../models/user')

// user created
exports.create=async (req,res)=>{
    const existingUser=await userModel.findOne({email:req.body.email})
    
    if(existingUser){ 
        res.json({user:true,message:"user is exist"})
    }
    else{
        const data={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            introduction:req.body.introduction,
            email:req.body.email,
            phone:req.body.mobile,
            experience:req.body.experience,
            achievements:req.body.achievements
        }
        if(!data.firstName||!data.lastName||!phone){
            res.json({result:false,message:"put all the fields"})
        }else{
            const user=new userModel(data)
            await user.save().then((user)=>{
            res.json({result:false,message:"user created"})
            })
        }
    }
}

// get list of Users
exports.getListOfUsers=async (req,res)=>{
    const data=await userModel.aggregate([
        {$match:{status:"1"}},
        {
            $project:{
                firstName:1,
                email:1
            }
        }
    ])

    return res.render('user/user',{
        status:"7400",
        message:"list of users",
        response:data
    })
}

// get one user details
exports.onUser=async(req,res)=>{
    const id=req.params.id;
    const data=await userModel.findById({_id:id});
    return res.json({
        status:"7400",
        message:"details of this user",
        response:data
    })
}