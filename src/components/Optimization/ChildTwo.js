import React from 'react'

export function ChildTwo() {

  console.log("ChildTwo Render")
  return (
    <div>
        ChildTwo Component
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)