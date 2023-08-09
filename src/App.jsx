import { useState } from "react";
import "./app.css";

export function App() {
  const [warriors, setWarriors] = useState(0);
  const [rowNumber, setRowNumber] = useState(0);

  const handleRowNumber = () => {
    const rowsCalculator = (-1 + Math.sqrt(1 + 8 * warriors)) / 2;
    const rows = Math.floor(rowsCalculator);
    setRowNumber(rows);
    setWarriors("");
  };

  const TotalWarriors = (event) => {
    setWarriors(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <label>Número de guerreiros:</label>
        <input type="number" value={warriors} onChange={TotalWarriors} />
        <button onClick={handleRowNumber}>Calcular</button>
      </div>
      <div className="row-container">
        {rowNumber !== 0 && <p>O número de fileiras é: {rowNumber}</p>}
      </div>
    </div>
  );
}
