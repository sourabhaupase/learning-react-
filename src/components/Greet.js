import React from "react";

const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <h1>
        {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
