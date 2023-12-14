import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

function ParentFour({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");

  const person = {
    fName: "Rendi",
    lName: "Vir",
  };

  const memoizedPerson = useMemo(() => person, []);

  const memoizedHandleClick = useCallback(() => {}, []);

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((C) => C + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>Change Name</button>
      <MemoizedChildFive name={name} person={memoizedPerson} handleClick={memoizedHandleClick}/>
    </div>
  );
}

export default ParentFour;
