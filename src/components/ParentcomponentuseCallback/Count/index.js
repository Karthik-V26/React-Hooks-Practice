import React from "react";
import "../../index.css";
function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text}-{count}
    </div>
  );
}

export default React.memo(Count);
