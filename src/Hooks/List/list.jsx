import React, { useState } from "react";
import useList from "./useList";

const List = () => {
  const [addList, setAddList] = useState("");
  const { list, push, pull } = useList();

  const handleChange = (e) => {
    setAddList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(addList);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="Submit">Submit</button>
      </form>
      <ul>
        {list.map((val, key) => {
          return (
            <li key={key}>
              <div>{val}</div>
              <button onClick={() => pull(key)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
