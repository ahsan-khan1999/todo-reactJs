import React ,{useContext} from 'react'
import {TodoContext} from './TodoContext'
import Todo from './Todo'

export default function ListTodos() {
    const {todos} = useContext(TodoContext)
    console.log(todos)
    return (
        <div>
         {todos.length > 0 ? (
        <ul className="list">
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}

        </div>
    )
}
