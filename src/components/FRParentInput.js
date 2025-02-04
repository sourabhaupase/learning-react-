import React, { createRef, useEffect, useState } from "react";
import FRInput from "./FRInput";

function FRParentInput() {
  const [state, setState] = useState("");
  const inputRef = createRef();
  useEffect(() => {
    // inputRef.current.focus();
  }, [inputRef]);

  function handleClick() {
    inputRef.current.focus();
  }
  git;

  return (
    <div>
      <FRInput ref={inputRef} />
      <button value={state} onClick={handleClick}>
        Focus Input
      </button>
    </div>
  );
}

export default FRParentInput;
