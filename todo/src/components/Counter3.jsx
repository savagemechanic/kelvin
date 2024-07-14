import { useState, useEffect } from "react";

function Counter3() {
  const [range, setRange] = useState([])
  const [count, setCount] = useState(0)

  function handleClick() {
    let list = []
    for (let i = 0; i<=count; i++) {
      list.push(i)
    }
    setRange(list)
  }
  useEffect(() => {
    handleClick();
  }, [count]);
  return (
    <>
    <h1>Hello </h1>
    <input placeholder="Enter counter number" 
      type="number"
      value={count}
      onChange={(e) => setCount(e.target.value)}/>
      {
      range.map((i) => {
        return <h1 key={i}>{i}</h1>
      })
        }
    </>
  )
}

export default Counter3;
