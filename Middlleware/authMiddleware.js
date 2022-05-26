const jwt=require("jsonwebtoken");

module.exports=(request,response,next)=>{
    let token,decodedToken;
    try{
      if(request.headers["authorization"]){
       token = request.headers["authorization"].split(" ")[1]
       decodedToken= jwt.verify(token, process.env.SECRETKEY);
       console.log(decodedToken)
       request.role =  decodedToken.role;
       request.username =  decodedToken.username;
      }
    }
    catch(error)
    {
      console.log(error);
        next(new Error("NotAuthenticated"));
    }

    next();
}