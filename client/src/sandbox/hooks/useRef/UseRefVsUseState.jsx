import React, { useRef, useEffect } from "react";

const UseRefVsUseState = () => {
  const refEl = useRef();

  useEffect(() => {
    console.log(refEl.current);
  }, []);

  return <div ref={refEl}>UseRefVsUseState</div>;
};

export default UseRefVsUseState;
