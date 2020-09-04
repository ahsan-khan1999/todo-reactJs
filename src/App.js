import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import ListTodos from './ListTodos';
import {TodoProvider} from './TodoContext'
function App() {
  return (
    
    <div className="App">
<TodoProvider>
     <Todos />
     <ListTodos />
     </TodoProvider > 
    </div>
    
  );
}

export default App;
