const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libraryappfiles.xc9ec.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

//Schema Definition
const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;