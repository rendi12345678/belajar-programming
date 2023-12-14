import React from 'react'

export const ChildFour = ({name, person}) => {
  const date = new Date()
  console.log("ChildFour Render")
  return (
    <div>
        Helo {name}. It is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
    </div>
  )
}

export const MemoizedChildFour = React.memo(ChildFour)
