import { useState,useEffect } from 'react'
import ToDo from './components/ToDo.jsx'
import {getAllToDos,addToDo,updateToDo} from './utils/HandleAPI.js'

export default function App() {

  const [toDos, setToDos] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  useEffect(()=>{
    getAllToDos(setToDos)
  },[])

  const updateMode = (_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className='container'>
      <h1>To Do App</h1>
      <div className="top">
        <input  type='text' 
                placeholder='Add To Do...' 
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        { isUpdating ? <span onClick={()=>updateToDo(toDoId,text,setToDos,setText,setIsUpdating)} id='update-button'><i className="fa-regular fa-pen-to-square"></i> UPDATE</span> 
                     : <span onClick={()=>addToDo(text,setText,setToDos)} id='add-button'>+ ADD</span> }
        
        
        
      
      </div>

      <div className="list">
        {toDos.map(item => <ToDo  key={item._id} 
                                  text={item.text}
                                  updateMode={()=>updateMode(item._id,item.text)}
                            />)}
      </div>
    </div>
  )
}