const express = require('express');

const authorRouter=express.Router();

var authors=[
    {
        name:'J R R Tolkien',
        place:'British',
        more:'The Hobbit, The Lord of The Rings',
        img:"tolkien.jpg",
        para:'J.R.R. Tolkien, in full John Ronald Reuel Tolkien, (born January 3, 1892, Bloemfontein, South Africa—died September 2, 1973, Bournemouth, Hampshire, England), English writer and scholar who achieved fame with his children’s book The Hobbit (1937) and his richly inventive epic fantasy The Lord of the Rings (1954–55).'
    },
    {
        name:'J K Rowling',
        place:'British',
        more:'Harry Potter series, Cormoran Strike series',
        img:"rowling.jpg",
        para:'Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith.'
    },
    {
        name:'George R R Martin',
        place:'American',
        more:'A Song of Ice and Fire series',
        img:"rrmartin.jpg",
        para:'George Raymond Richard Martin, also known as GRRM, is an American novelist and short story writer, screenwriter, and television producer. He is the author of the series of epic fantasy novels A Song of Ice and Fire, which was adapted into the Emmy Award-winning HBO series Game of Thrones.'
    },
];



authorRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library',
        authors

    });

});

authorRouter.get('/:id',function(req,res){
    const id=req.params.id;
    res.render('author',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title:'Library',
        author: authors[id]
    });
});

module.exports=authorRouter;