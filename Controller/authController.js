const jwt=require('jsonwebtoken');
const Student=require("../Model/student");
const Speaker=require("../Model/speaker");


module.exports.login = (request,response,next)=>{
        let token;
       
    if(request.body.username == process.env.adminUsername && request.body.password==process.env.adminPassWord)
    {
        
        token=jwt.sign({_id:1,
                    email:request.body.email,
                    role:"admin"},
                    process.env.SECRETKEY,
                    {expiresIn:"1h"});
        response.status(200).json({msg:"logged in",token,role:"admin"});
        
    }
    else
    {
        Speaker.findOne({username:request.body.username,password:request.body.password})
            .then(data=>{
                if(data == null){
                    Student.findOne({username:request.body.username,password:request.body.password})
                    .then(data=>{
                        if(data==null){
                       response.status(401).json({msg:"wrong Password or Username"})
                        }
                        else{
                        token=jwt.sign({_id:data._id,
                            email:data.email,
                            role:"student"},
                            process.env.SECRETKEY,
                            {expiresIn:"1h"});
                            response.status(200).json({msg:"logged in",token,role:"student"});
                        }  
                             
                    });
                }
           else{
                token=jwt.sign({_id:data._id,
                    email:data.email,
                    role:"speaker"},
                    process.env.SECRETKEY,
                    {expiresIn:"1h"});
                    response.status(200).json({msg:"logged in",token,role:"speaker"});
                }
                
            })
          
      
    }

    
}