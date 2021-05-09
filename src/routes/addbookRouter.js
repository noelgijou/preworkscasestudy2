
const express = require('express');

const addbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav){
    addbookRouter.get('/',function(req,res){
        res.render("addbooks",{
            nav,
            title:'Add Books'
        });
    });
    addbookRouter.post('/add',function(req,res){

        var item=
        {
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
    }
        var book= Bookdata(item);
        book.save();//saving to the database
        res.redirect('/books');
        
    });
    
    return addbookRouter;    
}

module.exports=router;