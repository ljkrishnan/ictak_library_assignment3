const express = require("express");
const adminRouter = express.Router();
function router(nav){

    
    adminRouter.get("/",function(req,res){
        res.render("addbook",
        {
            nav,
            title:"Add Book",
            
        });
    });
    adminRouter.get("/addauthor",function(req,res){
        res.render("addauthor",
        {
            nav,
            title:"Add Author"
            
        });
    });
     
    return adminRouter; 
}

module.exports = router;