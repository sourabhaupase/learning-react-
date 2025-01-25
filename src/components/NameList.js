import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Bruce", age: 25, skill: "Protection" },
    { id: 2, name: "Clerk", age: 30, skill: "Justice" },
    { id: 3, name: "Diana", age: 35, skill: "Freedom" },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}
export default NameList;
