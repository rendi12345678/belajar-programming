import React, { useState } from "react";

const initialState = {
  fName: "Bruce",
  lName: "Wayne",
};

function ObjectUseState() {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    setPerson((oldperson) => ({
      ...oldperson,
      fName: "Clark",
      lName: "kent",
    }));
  };

  console.log("ObjectUseState Render");

  return (
    <div>
      <button onClick={changeName}>
        {person.fName} {person.lName}
      </button>
    </div>
  );
}

export default ObjectUseState;
