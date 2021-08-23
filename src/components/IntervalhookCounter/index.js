import React, { useState, useEffect } from "react";
import "../index.css";
function IntervalhookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h1>
        Timer using useEffect and useState Hook with clear Interval at Component
        will unMount phase
      </h1>
      {count}
    </div>
  );
}
export default IntervalhookCounter;
