import { useState } from "react"



export default function Counter(){
    const [count, setCount]= useState(0);

    const  handleAdd =()=>{
        const newCount = count + 1;
        setCount(newCount);
    }
    
    const counterStyle = {
        border: '2px solid yellow',
        padding: '20px'
    }
    return(
        <div style={counterStyle}>
            <h3 style={counterStyle}>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    
    )
}