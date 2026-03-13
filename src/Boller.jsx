import { useState } from "react"

export default function Boller (){
    const [sakibover, setSakibOver] = useState(0);
    const [fizover, setFizOver] = useState(0);
    const [nahidover, setNahidOver] = useState(0);

    // const bowlerList = ["sakib","fiz","nahid"];

    // const [overs, setOvers] = useState({
    //     sakib : 0,
    //     fiz : 0,
    //     nahid : 0,

    // });

    // const updateOver =(bowlers)=>{
    //     const newOver = overs[bowlers]+1;
        

    //     if(newOver === 6){
    //         alert(`${bowlers}Over Completed`);
    //     }
    //     // setOvers([...overs, [bowlers]]) : newOver;
    //     setOvers({
    //         ...overs, [bowlers]:newOver
    //     })

    // }

    // const totalOver = overs.sakib+overs.nahid+overs.fiz;

    const sakibOver = ()=>{
        const updateOver = sakibover+1;
        setSakibOver(updateOver);
         if(updateOver === 10){
        alert("Sakib Over Completed");
    }
    }
    const mostafizOver = ()=>{
        const updateOver = fizover+1;
        setFizOver(updateOver);
        if(updateOver === 10){
        alert("Mostafiz Over Completed");
    }
    }
    const nahidOver = ()=>{
        const updateOver = nahidover+1;
        setNahidOver(updateOver);
         if(updateOver === 10){
        alert("Nahid Over Completed");
    }
    }

    

    const bollerStyle = {
        border : "2px solid Yellow",
        margin: "15px",
        padding: "15px",
    }
    return(
        <div style={bollerStyle}> 
            <h2 style={{color:'red', fontSize:"40px"}}>Bowling Count</h2>
            <h1>Total Over Completed: {sakibover+fizover+nahidover}</h1>
            {/* <h1>Total Over Completed: {totalOver}</h1> */}


 {/* {
                bowlersList.map((bowler)=>(
                    <div key={bowler}>
                        <p>{bowler}: {overs[bowler]} Over</p>

                        {
                            overs[bowler] === 6 && 
                            <h3>{bowler} Over Completed</h3>
                        }

                        <button 
                            onClick={()=>updateOver(bowler)}
                            disabled={overs[bowler] === 6}
                        >
                            Over
                        </button>
                    </div>
                ))
            } */}


            <p>Sakib Al Hasan: {sakibover} Over</p>
            {
                sakibover === 10 && <h3>Sakib Over Completed</h3>
            }
       
            <button onClick={sakibOver} disabled={sakibover===10}>Over</button>
            <p>MostaFizz: {fizover} Over</p>
            {
                fizover === 10 && <h3>Mostafiz Over Completed</h3>
            }
            <button onClick={mostafizOver} disabled={fizover===10}>Over</button>
            <p>Nahid Rana: {nahidover} Over</p>
            {
                nahidover === 10 && <h3>Nahid Rana Over Completed</h3>
            }
            <button onClick={nahidOver} disabled={nahidover===10}>Over</button>
        </div>
    )
}