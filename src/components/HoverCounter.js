import React, { useState } from "react";
import UpdatedComponent from "./withCounter";
function HoverCounter({ name, incrementCount, count }) {
  //   const [count, setCount] = useState(0);

  //   function incrementCount() {
  //     setCount(count + 1);
  //   }

  return (
    <div>
      <h2 onMouseOver={incrementCount}>
        {name} Hovered {count} times
      </h2>
    </div>
  );
}

export default UpdatedComponent(HoverCounter);
