const { request } = require('express');
const express = require('express');

const nav=
[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    }
];


const booksRouter=require('./src/routes/bookRoutes')(nav);
const addbookRouter=require('./src/routes/addbookRouter')(nav);
const authorRouter=require('./src/routes/authorroutes');

const loginRouter=express.Router();

const signupRouter=express.Router();






const addauthorRouter=express.Router();

const app = new express();
const port = process.env.PORT || 5000;

app.use(express.static('./public'));

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library Login Page'
    });
});

signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library Signup Page'
    });
});



addauthorRouter.get('/',function(req,res){
    res.render("addauthor",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Add Authors'
    });
});



app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library'
    });

});


app.listen(port,()=>{console.log("Server ready at " + port)});





// the addbook,addauthor,login,signup routers are in this main page
// booksRouter.get('/single', function(req,res){
//     res.send("Hey i am a single Book");

// });