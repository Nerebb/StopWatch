import React from 'react'
import useTimer from './useTimer';

const DisplayTimer = () => {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer();

  return (
    <div className="timer__wrapper">
    <div className="timer__display">
      <p>{`${time.hour < 10 ? `0${time.hour}`:time.hour}:${time.minute < 10 ? `0${time.minute}`:time.minute}:${time.second < 10 ? `0${time.second}`:time.second}`}</p>
    </div>
    <div className="button__wrapper">
      <button className="button" onClick={stopTimer}>
        Stop
      </button>
      <button
        className="button"
        ref={active}
        onClick={startTimer}
      >
        Start
      </button>
      <button className="button" onClick={resetTimer}>
        Reset
      </button>
    </div>
  </div>
  )
}

export default DisplayTimer