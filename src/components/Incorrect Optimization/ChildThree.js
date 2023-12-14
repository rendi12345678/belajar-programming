import React from 'react'

export function ChildThree() {

  console.log("ChildThree Render")
  return (
    <div>
        ChildThree Component
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)