import axios from 'axios'

const BASE_URL = 'http://localhost:2122'

function getAllToDos(setToDos){
    axios.get(BASE_URL)
        .then(({data})=>{
            console.log('data --->', data)
            setToDos(data)
        })
        .catch(err=>console.log(err))
}

function addToDo(text,setText,setToDos){
    axios.post(`${BASE_URL}/add`, {text})
        .then(result=>{
            console.log(result)
            setText('')
            getAllToDos(setToDos)
        })
        .catch(err=>console.log(err))
}

function updateToDo(toDoId,text,setToDo,setText,setIsUpdating){
    axios.put(`${BASE_URL}/update`, {_id:toDoId, text})
        .then(result=>{
            console.log(result)
            setText('')
            setIsUpdating(false)
            getAllToDos(setToDo)
        })
        .catch(err=>console.log(err))
}

export {getAllToDos, addToDo, updateToDo}