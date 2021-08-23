import { useState, useEffect } from "react";
import "../index.css";
function Testuseeffect() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `You Clicked ${count}times`;
  }, [count]);
  return (
    <div>
      <h1>Change in Name of Docuement displaying increasing Count</h1>
      count:{count}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Testuseeffect;
