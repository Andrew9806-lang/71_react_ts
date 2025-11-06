// import huka razobrat
import { useState } from "react";


import "./styles.css";
import Button from "../Button/Button";
function Counter() {
    // shag - vizov huka 
    //  v vizove huka neobhodimo peredat znachenie po umolchaniyu (luboi tip dannih)
    // vizov huka vozvrashaet massiv iz 2 elementov
    // 1 - eto znachenie  state
    //2- funkciya kotoraya mozhet izmenit state (^tak kak tolko ona mozhet izmenyat sostoyanie)
//    const state = useState(0);
//    console.log(state);

const[counter,setCounter] = useState(0);
console.log(state);
// shag 3 sozdaem funkciyu kotorie budem peredavat knopkam , a vnutri etuh funkciy 
// mi dolzhni vizvat funkciyu SetCounter v kotori propishem logiku

const OnMinusClick = ()=>{
    // mi mozhem ispolzovat funkciyu setCounter 2 sposobami 1 proshe 2 bezopasnee
    // 1 - prosto peredavaya novoe znachenie 
    // 2 - peredavat funkciyu call back , vnutri kotori mi mozhem poluchit predidiushee sostoyanie 
    // 1 variant setCounter(counter++)
    setCounter((prevState)=>prevState-1)

};

const onPlusClick = ()=>{
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
