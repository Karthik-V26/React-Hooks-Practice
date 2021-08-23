import React, { useState, useEffect, useRef } from "react";
import "../index.css";
function HookTimeruseRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>Timer using useState, useEffect, useRef Hooks</h1>
      Hook Timer -{timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default HookTimeruseRef;
