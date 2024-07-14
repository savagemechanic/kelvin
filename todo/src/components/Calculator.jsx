import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [val, setVal] = useState(0)
  function handleAdd(){
    setVal(num1+num2)
  }
  function handleSubtract(){
    setVal(num1-num2)
  }
  function handleDivide(){
    setVal(num1/num2)
  }
  function handleMultiply(){
    setVal(num1*num2)
  }
  return (
    <>
    <h1>Result: {val}</h1>
    <input type="number" 
      placeholder="num1"
      value={num1}
      onChange={(e) => setNum1(parseInt(e.target.value))}/>
    <input type="number" 
      placeholder="num2" 
      value={num2}
      onChange={(e) => setNum2(parseInt(e.target.value))}/>
    <button onClick={handleAdd} >+</button> 
    <button onClick={handleSubtract} >-</button> 
    <button onClick={handleDivide} >/</button> 
    <button onClick={handleMultiply} >*</button> 
    </>
  )
}

export default Calculator;
