import React, { useState } from "react";

function Form() {
  const [state, setState] = useState("");
  const [comment, setComment] = useState("");
  const [topic, setTopic] = useState("react");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleComments = (event) => {
    console.log(event);
    setComment(event.target.value);
  };
  const handleTopic = (event) => {
    console.log(event);

    setTopic(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log(event);

    event.preventDefault();
    console.log("4");
    alert(`${state} ${comment} ${topic}`);
    // setSubmit(event.preventDefault());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={state} onChange={handleChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comment} onChange={handleComments}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={handleTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit1</button>
      </form>
    </div>
  );
}

export default Form;
