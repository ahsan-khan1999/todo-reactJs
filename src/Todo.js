import React,{useContext} from 'react'
import {TodoContext} from './TodoContext'
export default function Todo({todo}) {
    let {deleteTodo} = useContext(TodoContext);
    return (
        <li>
            {todo.name}
            
            <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>X</button>
            

        </li>
    )
}
