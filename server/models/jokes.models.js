const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true, "setup IS REQUIRED"],
        minlength:10
    },
    punchline:{
        type:String,
        required:[true, "punchline IS REQUIRED"],
        minlength:3
    },
    
  
});

const Joke = mongoose.model('Student', JokeSchema);

module.exports = Joke;
