const jwt=require("jsonwebtoken");

module.exports=(request,response,next)=>{
    let token,decodedToken;
    try{
       token= request.headers["authorization"] //.split(" ")[1]
       if (!token) {
        response.redirect("/login.html")
       }
       else{
         console.log(token)
       }
       //decodedToken= jwt.verify(token, process.env.SECRETKEY);
  
    }
    catch(error)
    {
      
        next(new Error("Not Authenticated"));
    }

  //request.role =  decodedToken.role;
    next();
}