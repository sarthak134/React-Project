import { useState } from "react";
import "./styles.css";

export default function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interset, setInterset] = useState(null);
  function handleInterset() {
    const principalAmount = parseFloat(principal);
    const rateOfInterest = parseFloat(rate);
    const timePeriod = parseFloat(time);

    if (
      !isNaN(principalAmount) &&
      !isNaN(rateOfInterest) &&
      !isNaN(timePeriod)
    ) {
      const simpleInterest =
        (principalAmount * rateOfInterest * timePeriod) / 100;
      setInterset(simpleInterest.toFixed(2));
    } else {
      setInterset(null);
    }
  }
  function handleReset() {
    setInterset("");
    setPrincipal("");
    setRate("");
    setTime("");
  }
  return (
    <div className="calculator-container">
      <h2 className=" h2">Simple Calculator</h2>
      <p>calculate your simple intrset Easily</p>
      <div className="result">
        {interset !== null ? ` ${interset}` : "Total simple interest"}
      </div>
      <div className="input-group ">
        <label>Principal amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="input-group ">
        <label>Rate of intrset(p.a)%</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className="input-group ">
        <label>Time period (Yr)</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button className="calculate" onClick={handleInterset}>
        Calculate
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
