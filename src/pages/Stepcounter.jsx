import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Stepcounter() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    if (count >= 100) {
      return;
    } else {
      setCount(count + 1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };

  const increaseThree = () => {
    if (count + 3 > 100) {
      return;
    } else {
      setCount(count + 3);
    }
  };

  const increaseNine = () => {
    if (count + 9 > 100) {
      return;
    } else {
      setCount(count + 9);
    }
  };

  const subTen = () => {
    if (count - 10 < -100) {
      return;
    } else {
      setCount(count - 10);
    }
  };

  const changeCount = (step) => {
    if (count + step > 100 || count - step < -100) {
      return;
    } else {
      setCount((prev) => prev + step);
    }
  };
  return (
    <>
      <button onClick={() => changeCount(-1)}>-</button>
      <p>{count}</p>
      <button onClick={countIncrease}>+</button>
      <button onClick={resetCount}>Rest Count</button>
      <div>
        <h1>Step Size Selector</h1>
        <button onClick={increaseThree}>Add +3</button>
        <button onClick={increaseNine}>Add +9</button>
        <button onClick={subTen}>Subtract -10</button>
      </div>

      <Link to={"/"}>
        <button>Return to Home</button>
      </Link>
    </>
  );
}

export default Stepcounter;
