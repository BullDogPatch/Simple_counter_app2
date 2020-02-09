import React, { useState } from "react";
import Test from "./Test";

function Button() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  if (count < 0) {
    return (
      <div>
        <h1 className="dangerZone">Danger Zone</h1>
        <button className="goo" onClick={increase}>
          Back to safety
        </button>
      </div>
    );
  } else if (count === 50) {
    return <Test />;
  }

  return (
    <div>
      <button className="goo" onClick={increase}>
        Increment
      </button>
      <button className="goo" onClick={decrease}>
        Decrement
      </button>
      <p>You have clicked {count} times</p>
    </div>
  );
}

export default Button;
