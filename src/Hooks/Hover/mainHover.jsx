import React from "react";
import useHover from "./useHover";

const MainHover = () => {
  const { hover, onMouseOver, onMouseLeave } = useHover();

  return (
    <div>
      <h1 onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        Hello
      </h1>
      <p>{hover ? "Hovering" : "Not hoverin"}</p>
    </div>
  );
};
export default MainHover;
