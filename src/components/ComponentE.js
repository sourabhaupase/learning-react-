import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

function ComponentE() {
  return (
    <div>
      {/* Compnent E context {context} */}

      <ComponentF />
    </div>
  );
}

ComponentE.contextType = UserContext;

export default ComponentE;
