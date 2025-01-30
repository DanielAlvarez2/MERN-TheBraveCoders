const ToDoModel = require('../models/ToDoModel.js')

module.exports = {
    getToDos: async (req,res)=>{
        await ToDoModel.find()
            .then((result)=>res.send(result))
            .catch(err=>console.log(err))
        
    },
    addToDo: async (req,res)=>{
        const {text} = req.body
        await ToDoModel.create({text})
            .then(result=>{
                console.log('Added New Entry: ')
                console.log(result)
                res.send(result)
            })
            .catch(err=>console.log(err))
    },
    updateToDo: async(req,res)=>{
        const {text,id} = req.body
        await ToDoModel.findByIdAndUpdate({_id:id},{text:text})
                    .then(result=>res.send(`UPDATED: ${result}`))
                    .catch(err=>console.log(err))
    },
    deleteToDo: async (req,res)=>{
        const {id} = req.body
        await ToDoModel.findByIdAndDelete({_id:id})
                    .then(result=>res.send(`DELETED: ${result}`))
                    .catch(err=>console.log(err))
    }
}