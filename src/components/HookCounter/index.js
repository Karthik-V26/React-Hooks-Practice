import { useState } from "react";
import "../index.css";
function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <h1>Counter using useSate Hook</h1>
      count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <h1>Form</h1>
      <form>
        <input
          type="text"
          value={name.firstName}
          placeholder="FirstName"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          placeholder="LastName"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <p>Your FirstName={name.firstName}</p>
      <p>Your LastName={name.lastName}</p>
      <h1>Add an Random number as item</h1>
      <button onClick={addItem}>AddItem</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter;
