import React, { useEffect, useRef } from "react";
import "../index.css";
function FocusInputuserefHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>Focused Input using useRef Hook</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInputuserefHook;
