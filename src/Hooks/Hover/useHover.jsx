import { useState } from "react";

const useHover = () => {
  const [hover, setHover] = useState(false);
  function onMouseOver() {
    setHover(true);
  }

  function onMouseLeave() {
    setHover(false);
  }
  return {
    hover: hover,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  };
};

export default useHover;
