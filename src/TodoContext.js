import React ,{createContext,useState} from 'react'
import todoReducer from './todoReducer'
import { v4 as uuidv4 } from 'uuid';



export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos,setTodos] = useState([
        {name:'hello0',id:1},
        {name:'hello1',id:2},
        {name:'hello2',id:3},
    ]);

    const addTodo = (title) => {
        setTodos([...todos,{name:title,id:uuidv4()}])
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = () => {

    }
    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo
        }}>
            {children}
            </TodoContext.Provider>
    )
}