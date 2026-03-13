import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixs, setSixs] = useState(0);
    const [single, setSingle] = useState(0);
    const [four, setFour] = useState(0);

    const countSixes =()=>{
        const updatedSixs = sixs+1;
        setSixs(updatedSixs);
    }

    const handleSingle=()=>{
        const singleRun = runs+1;
        const updateSingle = single+1;
        setRuns(singleRun);
        setSingle(updateSingle);
    }
    const handleSixRun=()=>{
        const sixRun = runs+6;
        setRuns(sixRun);
        countSixes();
    }
    const handleFourRun=()=>{
        const fourRun = runs+4;
        const updateFour = four+1;
        setRuns(fourRun);
        setFour(updateFour);
    }
    const styleColor={
        color:"red",
        fontWeight: "bold",
        fontSize:"25px"

    }
    const batsmanBorder ={
        border : "2px solid Green",
        margin: "15px",
        padding: "15px",
    }

    return (
        <div style={batsmanBorder}>
            <h3>Player: Bangla Batsman</h3>
            {
                runs >= 50 && <p style={styleColor}>Your Score is Half Century</p>
            }
            <h1>Score: {runs}</h1>
            <h3>Total Sixes:{sixs}</h3>
            <h3>Total Single:{single}</h3>
            <h3>Total Four:{four}</h3>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleSixRun}>Six</button>
            <button onClick={handleFourRun}>Four</button>
        </div>
    )
}