import { useState } from "react";

function Counter2() {
  const [range, setRange] = useState([])
  const [count, setCount] = useState(0)

  function handleClick() {
    let list = []
    for (let i = 0; i<=count; i++) {
      list.push(i)
      console.log(i,list)
    }
    setRange(list)
  }
  return (
    <>
    <h1>Hello </h1>
    <input placeholder="Enter counter number" 
      type="number"
      value={count}
      onChange={(e) => setCount(e.target.value)}/>
    <button onClick={handleClick}>Render</button>
      {
      range.map((i) => {
        return <h1 key={i}>{i}</h1>
      })
        }
    </>
  )
}

export default Counter2;
