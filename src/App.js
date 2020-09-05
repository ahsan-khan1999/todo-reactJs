import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import ListTodos from './ListTodos';
import {TodoProvider} from './TodoContext'
function App() {
  return (
<TodoProvider>    
    <div className="App">

     <Todos />
     <ListTodos />

    </div>
     </TodoProvider >     
  );
}

export default App;
