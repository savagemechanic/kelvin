
function Counter1() {
  const x = 50;
  const range = [...Array(10).keys()];
  return (
    <>
    <h1>Hello </h1>
      {
      range.map((i) => {
        return <h1 key={i}>{i}</h1>
      })
        }
    </>
  )
}

export default Counter1;
