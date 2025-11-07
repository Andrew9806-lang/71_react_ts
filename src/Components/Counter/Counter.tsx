// import huka razobrat
import { useState } from "react";


import "./styles.css";
import Button from "Components/Button/Button";
function Counter() {

// cherez generiki
const[counter,setCounter] = useState<number>(0);



const OnMinusClick = ():void=>{

    setCounter((prevState)=>prevState-1)

};

const onPlusClick = ():void=>{
    setCounter((prevState)=> prevState + 1)
}
   
  return (
    <div className="counter-wrapper">
      <div className="button-wraper">
        <Button name="-" onClick={() => {OnMinusClick}} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wraper">
        <Button name="+" onClick={() => {onPlusClick}} />
      </div>
    </div>
  );
}
export default Counter;
