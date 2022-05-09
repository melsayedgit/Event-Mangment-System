const jwt=require("jsonwebtoken");

module.exports=(request,response,next)=>{
    let token,decodedToken;
    try{
       token= request.headers["authorization"].split(" ")[1]
       decodedToken= jwt.verify(token, process.env.SECRETKEY);
       console.log(decodedToken)
    }
    catch(error)
    {
      console.log(error);
        next(new Error("NotAuthenticated"));
    }

  request.role =  decodedToken.role;
    next();
}