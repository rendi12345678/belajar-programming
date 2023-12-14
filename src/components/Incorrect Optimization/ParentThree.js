import React, {useState} from 'react'
import { MemoizedChildFour } from './ChildFour'

function ParentThree({children}) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vishwas")
  
  console.log('ParentThree Render')
  return (
    <div>
        <button onClick={() => setCount(C => C + 1)}>Count - {count}</button>
        <button onClick={() => setName("Codevolution")}>Change Name</button>
        <MemoizedChildFour name={name}/>
    </div>
  )
}

export default ParentThree