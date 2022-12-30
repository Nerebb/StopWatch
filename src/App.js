// import "Your code here";
import React, { useEffect, useState } from "react";
import DisplayTimer from "./DisplayTimer";

function App() {
  const [totalTimer, setTotalTimer] = useState([0]);
  const addTimer = () => {
    setTotalTimer([...totalTimer, 0]);
  };
  const removeTimer = () => {
    setTotalTimer(i=> i.slice(0,i.length - 1 ));
  };

  return (
    <div className="App container">
      <div className="title">
        <h1>Coder Timer</h1>
        <div className="btn_wrapper">
          <button className="btn_timer" onClick={() => addTimer()}>Add timer</button>
          <button className="btn_timer" onClick={() => removeTimer()}>Remove timer</button>
        </div>
      </div>
      <div className="total_timer">
        {totalTimer.map(() => (
          <DisplayTimer />
        ))}
      </div>
    </div>
  );
}

export default App;
