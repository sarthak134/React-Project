import { useState } from "react";
import "./styles.css";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setMessage(getBMICategory(bmiValue));
    } else {
      setBmi(null);
      setMessage("Please enter valid height and weight.");
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <div>
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <button className="btn" onClick={calculateBMI}>
          Calculate BMI
        </button>
        {bmi && (
          <div>
            <h2>Your BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
