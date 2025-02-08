import React, { Component, createRef, useEffect } from "react";
function RefExample() {
  const inputRef = createRef();
  useEffect(() => {
    console.log("hey");

    inputRef.current.focus();
  }, [inputRef]);
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => alert(inputRef.current.value)}>click here </button>
    </div>
  );
}

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export { RefExample };

export default RefsDemo;
