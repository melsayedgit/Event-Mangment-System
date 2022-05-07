/**
 * @type {import("express").RequestHandler}
 */

module.exports = (error,request,response,next)=>{
    if (error.code = 11000) {
      response.status(500).json({
          msg:"exist",
          filed:error.keyValue

      }   );  
    
    }
   
}