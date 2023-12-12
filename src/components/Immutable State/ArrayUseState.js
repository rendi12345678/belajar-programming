import React, { useState } from "react";

const initialState = ["Bruce", "Wayne"];

function ArrayUseState() {
  const [persons, setPersons] = useState(initialState);

  const handleClick = () => {
    setPersons((oldpersons) => [...oldpersons, "Fajar", "Tono"]);
  };

  console.log("ArrayUseState Render")

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
}

export default ArrayUseState;
