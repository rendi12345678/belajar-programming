import React, {useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo'

function ParentTwo({children}) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vishwas")
  
  console.log('ParentTwo Render')
  return (
    <div>
        <button onClick={() => setCount(C => C + 1)}>Count - {count}</button>
        <button onClick={() => setName("Codevolution")}>Change Name</button>
        <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo