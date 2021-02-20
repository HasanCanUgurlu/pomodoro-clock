import React from "react";
import moment from "moment";
// takes miliseconds from currentTime property, converts it with
//-moment.js as minutes : seconds.
const Timer = ({ currentMode, currentTime }) => {
  const [mode] = currentMode;
  const [time] = currentTime;
  return (
    <>
      <h2 id="timer-label">{mode === "session" ? "Session" : "Break"}</h2>
      <h3 id="time-left">{moment(time).format("mm:ss")}</h3>
    </>
  );
};

export default Timer;
