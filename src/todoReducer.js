const todoReducer = ((state,action) => {
    switch (action.type){
        case 'ADD_TODO':
            return []
        case 'DELETE_TODO':
            return []
        case 'default':
            return state;
    }
})