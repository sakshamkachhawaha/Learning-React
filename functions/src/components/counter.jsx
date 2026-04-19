import { useEffect, useState } from 'react'
const Counter = () => {
  const [count, setCount] = useState(0)

  function increaseNum(){
    setCount(count + 1)
    console.log("increasing")
  }
  function decreaseNum(){
    setCount(count - 1)
    console.log("decreasing")
  }
  function increaseNum5(){
    setCount(count + 5)
    console.log("increasing by 5")
  }
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={increaseNum5}>Increase 5</button>

    </div>
  )
}

export default Counter
