
import Counter from './Counter';
import Batsman from './batsman';
import './App.css'
import Boller from './Boller';

function App() {

 function handleClick(){
  alert("I am Clicked");
 }
  const handleClick3 = () =>{
    alert("I am clicked for Arrow function") ;
  }

  const handleAdd5 = (num) =>{
    let newNum = num +5;
    alert(newNum++);
  }

  return (
    <>
      
      <h3>Vite + React</h3>

         <Counter></Counter>
         <Batsman></Batsman>
         <Boller></Boller>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("I am Clicked for 2")
      }}>Click Me</button>

      <button onClick = {handleClick3}>Click me 3</button>
      <button onClick={()=>{
        alert("I am arrow function into button")
      }}>Click Me Arrow Function</button>
      
    <button onClick={()=>handleAdd5(15)}>Add into 5</button>

 
      
    </>
  )
}

export default App
