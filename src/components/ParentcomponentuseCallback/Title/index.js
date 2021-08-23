import React from "react";
import "../../index.css";
function Title() {
  console.log("Rendering Title");
  return <h1>useCallback Hook</h1>;
}

export default React.memo(Title);
