import React, { useState, useEffect } from "react";
import "../index.css";
function HookMouse() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  const logMouse = (e) => {
    setx(e.clientX);
    sety(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", logMouse);
    return () => {
      window.removeEventListener("mousemove", logMouse);
    };
  }, []);
  return (
    <div>
      <h1>Mouse Cordinates on Screen using useState and useEffect hook</h1>
      Hooks X-{x} Y-{y}
    </div>
  );
}
export default HookMouse;
