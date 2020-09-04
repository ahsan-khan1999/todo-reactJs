import React,{useState ,useContext} from 'react'


export default function Todos() {
    let [val,setVal] = useState('')

    console.log(val)
    return (
        <div>
            <form>
                <label>
                    Enter Item : 
                    <input type='text' placeholder='any thing' value={val} onChange = {(e) => setVal(e.target.value)}></input>

                    </label>
            </form>
            
        </div>
    )
}
