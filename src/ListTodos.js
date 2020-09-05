import React ,{useContext} from 'react'
import {TodoContext} from './TodoContext'
import Todo from './Todo'

export default function ListTodos() {
    const {todos} = useContext(TodoContext)
    console.log(todos)
    return (
        <div>
            <h2>Here Are Todo</h2>
            
                <ul className='list-todos'>
                {todos.map(todo => 
                    <Todo key ={todo.id} todo={todo} />
    
                )}
                </ul>
            

        </div>
    )
}
