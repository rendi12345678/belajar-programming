import React, { Children, useState } from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

function GrantParent({children}) {
  const [newCount, setNewCount] = useState(0);

  console.log("GrantParent Render")

  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrantParent Count - {newCount}
      </button>
      {children}
    </div>
  );
}

export default GrantParent;
