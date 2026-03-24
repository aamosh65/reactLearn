import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tempconverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [status, setStatus] = useState("");

  // Check water status based on Celsius
  const checkStatus = (c) => {
    if (c <= 0) setStatus("Water Freezes");
    else if (c >= 100) setStatus("Water Boils");
    else setStatus("Water is liquid");
  };

  // Handle Celsius input
  const handleChangeC = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
      setStatus("");
      return;
    }
    const num = Number(value);
    setCelsius(num);
    setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    checkStatus(num);
  };

  // Handle Fahrenheit input
  const handleChangeF = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
      setStatus("");
      return;
    }
    const num = Number(value);
    const celsiusValue = ((num - 32) * 5) / 9;
    setFahrenheit(num);
    setCelsius(celsiusValue.toFixed(2));
    checkStatus(celsiusValue);
  };

  return (
    <>
      <h1>Temperature Converter</h1>

      <label htmlFor="celsius">Celsius</label>
      <input
        type="number"
        id="celsius"
        value={celsius}
        onChange={handleChangeC}
      />

      <label htmlFor="fahrenheit">Fahrenheit</label>
      <input
        type="number"
        id="fahrenheit"
        value={fahrenheit}
        onChange={handleChangeF}
      />

      <h2>Status of the water</h2>
      <p>{status}</p>

      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </>
  );
};

export default Tempconverter;
