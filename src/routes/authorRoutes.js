const express = require("express");
const authorRouter = express.Router();
function router(nav){
    var authors = [
        {
            author: "Joseph Barbera",
            genre: "Cartoon",
            img: "JosephBarbera.jpg",
            title1: "Tom and Jerry",
            title2: "My Life in Toons",
        },
        {
            author: "J.K Rowling",
            genre: "Fantasy",
            img: "JKrowling.jpg",
            title1: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
            title2: "Harry Potter and the Chamber of Secrets (Harry Potter, #2)"
        },
        {
            author: "Basheer",
            genre: "Drama",
            img: "Basheer.jpg",
            title1: "Paathumayude Aadu",
            title2: "Balyakalasakhi"
        }
    ]
    
    authorRouter.get("/",function(req,res){
        res.render("authors",
        {
            nav,
            title:"Authors",
            authors
        });
    });
    
    authorRouter.get("/:id",function(req,res){
        const id=req.params.id;
        res.render("author",{
            nav,
            title:"Author",
            author: authors[id]
        });
    });
    return authorRouter; 
}



module.exports = router;