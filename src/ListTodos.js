import React ,{useContext} from 'react'
import {TodoContext} from './TodoContext'

export default function ListTodos() {
    let {todos} = useContext(TodoContext)
    console.log(todos)
    return (
        <div>
            <h2>Here Are Todo</h2>
            {
                todos.map(todo => {
                    return (
                    <li key= {todo.id}>{todo.name}</li>
                    )
                })
            }
        </div>
    )
}
