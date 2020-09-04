import React,{useState ,useContext} from 'react'
import {TodoContext} from './TodoContext'

export default function Todos() {
    let [val,setVal] = useState('')
    let {addTodo} = useContext(TodoContext);


    function handleSubmit(event){
        event.preventDefault();
        addTodo({
            name:val,
            id:Math.random()
        })
        setVal('')
    }

    console.log(val)
    return (
        <div>
            <form className='transaction-form' onSubmit={handleSubmit}>
                <label>
                    Enter Item : 
                    <input type='text' placeholder='any thing' value={val} onChange = {(e) => setVal(e.target.value)}></input>

                    </label>
                    <br />
                    <input type='submit' value='Add Transaction' style={{backgroundColor:'lightblue'}}/>
            </form>
            
            
        </div>
    )
}
