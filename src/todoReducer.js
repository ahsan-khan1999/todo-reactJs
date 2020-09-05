const todoReducer = ((state,action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [action.payload , ...state]
        case 'DELETE_TODO':
            return {
                
                todos:state.reduce(todo =>
                    todo.id !== action.payload),
                    ...state
                    
            }
        case 'default':
            return [...state];
    }
})

export default todoReducer;