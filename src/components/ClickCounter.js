import React, { useState } from "react";
import UpdatedComponent from "./withCounter";
function ClickCounter({ name, incrementCount, count }) {
  //   const [count, setCount] = useState(0);

  //   function incrementCount() {
  //     setCount(count + 1);
  //   }

  return (
    <div>
      <button onClick={incrementCount}>
        {name} Clicked {count} times
      </button>
    </div>
  );
}

export default UpdatedComponent(ClickCounter);
