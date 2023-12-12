import React, {useState} from 'react'

function UseState() {
  const [count, setCount] = useState(0)
  
  console.log('UseState Renderss')
  return (
    <div>
        <button onClick={() => setCount(C => C + 1)}>Count {count}</button>
    </div>
  )
}

export default UseState