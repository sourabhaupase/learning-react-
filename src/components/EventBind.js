import React, { useState } from "react";

function EventBind() {
  const [message, setMessage] = useState("helloo");

  return (
    <div>
      {message}
      <button onClick={() => setMessage("hi")}>Click</button>
    </div>
  );
}

export default EventBind;
