import { useState, useRef, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });

  // const isStart = "Your code here";
  const displayTime = useRef();
  const active = useRef();
  const timeInterval = useRef();

  useEffect(() => {
    displayTime.current = time;
  }, [time]);

  const runTimer = () => {
    let { hour, minute, second } = displayTime.current;
    second++;
    if (second === 60) {
      minute++;
      second = 0;
    } else if (minute === 60) {
      hour++;
      minute = 0;
    }
    console.log("runTime", { hour, minute, second });
    setTime({ hour, minute, second });
    console.log("time", time);
  };

  const startTimer = () => {
    timeInterval.current = setInterval(() => runTimer(), 1000);
    active.current.disabled = true;
  };

  const stopTimer = () => {
    clearInterval(timeInterval.current);
    active.current.disabled = false;
  };

  const resetTimer = () => {
    setTime({ hour: 0, minute: 0, second: 0 });
    clearInterval(timeInterval.current);
    active.current.disabled = false;
  };
  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
