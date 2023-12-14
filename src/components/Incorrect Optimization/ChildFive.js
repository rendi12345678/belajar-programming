import React from 'react'

export const ChildFive = ({name, person, handleClick}) => {
    console.log("ChildFive Render")
  return (
    <div>
       Hello {name} {person.fName} {person.lName}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)