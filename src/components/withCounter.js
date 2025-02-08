import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent({ name }) {
    const [count, setCount] = useState(0);

    function incrementCount() {
      setCount((prev) => prev + 1);
    }
    return (
      <div>
        <OriginalComponent
          name="Vishwas"
          incrementCount={incrementCount}
          count={count}
        />
      </div>
    );
  }
  return NewComponent;
};

export default UpdatedComponent;
