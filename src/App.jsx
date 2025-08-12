import { useState } from "react";
import "./style.css"

function App() {

  const[value , setValue] = useState(" ")
  const[display , setDisplay] = useState(" ")

 function handleClick(){
 setDisplay(value)
 }
  
function handleInputChange(event){
setValue(event.target.value)
}


  return (
    <>
      <center>
        <h1> Welcome {display} </h1>

        <input type="text" value = {value} onChange = {handleInputChange} />

        <br /><br />

        <button onClick = {handleClick} > click me </button>
      </center>
    </>
  );
}
export default App;
