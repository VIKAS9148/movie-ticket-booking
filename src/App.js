import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  const fetchRate = async () => {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await res.json();
    setRate(data.rates[toCurrency]);
  };

  const convert = () => {
    if (!rate) return 0;
    return (amount * rate).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="selectors">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>AED</option>
        </select>

        <span>to</span>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>AED</option>
        </select>
      </div>

      <h2>Converted Amount: {convert()}</h2>
    </div>
  );
}

export default App;
