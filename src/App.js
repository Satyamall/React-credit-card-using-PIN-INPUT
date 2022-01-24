import { useState } from "react";
import PinInput from "./Pin/PinInput";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <h1>Credit Card</h1>
      <PinInput onChange={(pin) => setState(pin)} />
      <div>
        {state.length === 16 ? (
          <span style={{ color: "green" }}>
            CREDIT CARD NUMBER YOU ENTERED : {state} <br />
            STATUS: MATCHED
          </span>
        ) : (
          state
        )}
      </div>
    </div>
  );
}
