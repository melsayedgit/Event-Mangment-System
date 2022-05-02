const jwt=require("jsonwebtoken");

module.exports=(request,response,next)=>{
    let token,decodedToken;
    try{
       token=request.headers["authorization"]
      // decodedToken= jwt.verify(token, process.env.SECRETKEY);
     
     console.log(token);
    }
    catch(error)
    {
      response.redirect("/login")
        next(new Error("Not Authenticated"));
    }

  //request.role =  decodedToken.role;
    next();
}