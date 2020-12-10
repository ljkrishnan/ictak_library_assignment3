const express = require("express");
const signinRouter = express.Router();


function router(nav){
    
    signinRouter.get("/",function(req,res){
        res.render("signin",
        {
            nav,
            title:"Sign In",
            email:"email"            
        });
    });
 
    signinRouter.get("/signup",function(req,res){
        res.render("signup",
        {
            nav,
            title:"Sign Up",
            
        });
    });

    
    return signinRouter; 
}



module.exports = router;