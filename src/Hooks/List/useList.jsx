import { useState } from "react";

const useList = () => {
  const [list, setList] = useState(["React", "Angular"]);

  const push = (value) => {
    setList([...list, value]);
  };

  const pull = (index) => {
    const newList = list.filter((loop, listIndex) => {
      return listIndex !== index;
    });
    setList(newList);
  };
  return {
    list: list,
    push: push,
    pull: pull
  };
};

export default useList;
