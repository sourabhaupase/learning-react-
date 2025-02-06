import React, { useState } from "react";
import MemoComp from "./MemoComp";

function ParentComp() {
  const [state, setState] = useState("");
  return (
    <div>
      Parent Comp
      <MemoComp />
    </div>
  );
}

export default ParentComp;
