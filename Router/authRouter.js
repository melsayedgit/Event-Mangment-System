const express=require("express");

const router=express.Router();
const controller=require("../Controller/authController")


router.post("/api/login",controller.login);
router.get("/login",(req,res)=>{
    res.redirect("/login.html")
});
module.exports=router;  