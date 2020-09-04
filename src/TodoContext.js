import React ,{createContext,useReducer} from 'react'
import todoReducer from './todoReducer'

var todos = [
    {name:'hello0',id:1},
    {name:'hello1',id:2},
    {name:'hello2',id:3},
]

export const TodoContext = createContext(todos);

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, todos);

    const addTodo = (obj) => {
        dispatch({
            type:'ADD_TODO',
            payload:{
                name:obj.name
            },
        })
    }

    return (
        <TodoContext.Provider value={{
            todos:state,
            addTodo
        }}>
            {children}
            </TodoContext.Provider>
    )
}