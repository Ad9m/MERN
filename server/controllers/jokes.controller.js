const Joke = require("../models/student.model")

module.exports.findAllStudents = (req,res) =>{
    Joke.find().then(allStudents=>{
        console.log("All Students From DB", allStudents)
        res.json(allStudents)
    }).catch(err=>console.log(err))
}

module.exports.findOne = (req,res) =>{
    Joke.findOne({_id:req.params.id}).then(Joke=>{
        console.log("This Joke", Joke)
        res.json(student)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

module.exports.createStudent = (req,res) =>{
    Joke.create(req.body).then(newJoke=>{
        console.log("New Joke", newJoke)
        res.json(newStudent)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

module.exports.updateStudent = (req,res) =>{
    Joke.findByIdAndUpdate(
        {_id:req.params.id}, req.body ,{new:true, runValidators:true}
    ).
    then(newStudent=>{
        console.log("New Joke", newJoke)
        res.json(newJoke)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

module.exports.deleteStudent = (req,res) =>{
    Joke.deleteOne(
        {_id:req.params.id}
    ).
    then(result=>{
        console.log("DELETE RESULT == ", result)
        res.json(result)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}