const express = require("express");


// Initializing express function
const app = new express();

const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    }
];
const navHome = [
    {
        link:"/signin",name:"Sign In"
    },
    {
        link:"/signin/signup",name:"Sign Up"
    }
];
const navBk = [
    {
        link:"/admin",name:"Add Book"
    },
    {
        link:"/authors",name:"Authors"
    }
];
const navAuth = [
    {
        link:"/admin/addauthor",name:"Add Author"
    },
    {
        link:"/books",name:"Books"
    }
];

const booksRouter = require("./src/routes/bookRoutes")(navBk);
const signinRouter = require("./src/routes/signinRoutes")(nav);
const authorRouter = require("./src/routes/authorRoutes")(navAuth);
const adminRouter = require("./src/routes/adminRoutes")(nav);

app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/signin",signinRouter);
app.use("/authors",authorRouter);
app.use("/admin",adminRouter);

app.get("/",function(req,res){
    res.render("index",
    {
        navHome,
        title:"Library App"
    });
});
app.get("/account",function(req,res){
    res.render("account",
    {
        nav,
        title:"Library"
    });
});
// Listen on a port
app.listen(5000);
