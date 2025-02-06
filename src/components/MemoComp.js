import React, { useState } from "react";

function MemoComp({ name }) {
  const [state, useState] = useState("");
  console.log("rendering memo components");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
