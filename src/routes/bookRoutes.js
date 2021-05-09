

const express = require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');



function router(nav){
    // var books=[
    //     {
    //         title:'Oliver Twist',
    //         author:'Charles Dickens',
    //         genre:'Serial Novel',
    //         img:"charlesdickens.jpg",
    //         para:'The novel follows the journey of the titular character, Oliver Twist. Oliver, an orphan since birth, spends much of his childhood at a “child farm” (orphanage) with too many children and too little food. The farm is located roughly 70 miles outside London. One night, after being served his portion of gruel, Oliver asks for a second helping. This is unacceptable, and Oliver is sent to work as an apprentice to an undertaker. Eventually, after suffering repeated mistreatment, Oliver runs away and heads for London. He soon finds himself in the presence of the Artful Dodger, who tells him to stay at the house of an “old gentleman” (named Fagin) with a number of other boys. Oliver learns that these boys are trained pickpockets. On an outing, Oliver witnesses the boys take a handkerchief from Mr. Brownlow, an elderly man, which prompts Oliver to run away in fear and confusion. The elderly man mistakes Oliver’s behaviour for guilt and has him arrested. However, after learning more about Oliver, Mr. Brownlow realizes his mistake and offers to take care of him at his home.'
    //     },
    //     {
    //         title:'Wings of Fire',
    //         author:'A. P. J. Abdul Kalam',
    //         genre:'Autobiography',
    //         img:"kalam.jpg",
    //         para:'Wings of Fire is an autography of APJ Abdul Kalam covering his early life and his work in Indian space research and missile programs. It is the story of a boy from a humble background who went on to become a key player in Indian space research/Indian missile programs and later became the president of India.'
    //     },
    //     {
    //         title:'The Alchemist',
    //         author:'Paulo Coelho',
    //         genre:'Quest, Adventure, Fantasy',
    //         img:"paulo.jpg",
    //         para:'The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.'
    //     },
    //     {
    //         title:'Sherlock Holmes',
    //         author:'Sir Arthur Conan Doyle',
    //         genre:'Detective Fiction,Science Fiction',
    //         img:"conandoyle.jpg",
    //         para:'Sherlock Holmes is a private detective who has keen powers of observation. He lives at 221b Baker Street in London. He notices things that others simply dont and then he draws accurate conclusions about what he sees. He experiences strong mood swings, plays the violin, and is a master of deductive reasoning.'
    //     },
    // ];
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
        {
            nav,
            title:'Library',
            books
    
        });

        })
        
    
    });
    
    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });

        })
        
    });

return booksRouter;

}



module.exports=router;

