import React from 'react'

export default function ToDo({text,updateMode,deleteToDo}){
    return(
        <div className="todo">
            <div className="text">{text}</div>
            <div className='icons'>
                <i onClick={updateMode} className="fa-regular fa-pen-to-square"></i>
                <i onClick={deleteToDo} className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}
