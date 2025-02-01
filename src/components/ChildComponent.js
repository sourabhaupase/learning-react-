import React from "react";
import { useState } from "react";

function ChildComponent() {
  const [loggedIn, setLoggedIn] = useState("true");

  //   setIsloggedIn(false);

  if (loggedIn) {
    return <div>Welcome Vishwas</div>;
  } else {
    return <div>Welcome Guest</div>;
  }
}
export default ChildComponent;
