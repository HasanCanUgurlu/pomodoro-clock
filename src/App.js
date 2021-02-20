import { useState, useRef, useEffect } from "react";
import { useInterval } from "./components/Interval";
import { Header, Container } from "semantic-ui-react";
import SetTime from "./components/SetTime";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import alarm from "./sounds/alarm.wav";
function App() {
  const [mode, setMode] = useState("session");
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [time, setTime] = useState(sessionTime * 60 * 1000);
  const [isTimerActive, setTimerActive] = useState(false);
  const beep = useRef();
  // found it on the web -> https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // This custom hook uses "ref" as a prevState to remember the latest callback.
  // It's a better substitute for setInterval because we can play with delay.
  useInterval(() => setTime(time - 1000), isTimerActive ? 1000 : null);

  useEffect(() => {
    setTime(sessionTime * 60 * 1000);
  }, [sessionTime]);

  useEffect(() => {
    if (time === 0 && mode === "session") {
      beep.current.play();
      setMode("break");
      setTime(breakTime * 60 * 1000);
    } else if (time === 0 && mode === "break") {
      beep.current.play();
      setMode("session");
      setTime(sessionTime * 60 * 1000);
    }
  }, [time, breakTime, sessionTime, mode]);

  const handleReset = () => {
    beep.current.pause();
    beep.current.currentTime = 0;
    setTimerActive(false);
    setMode("session");
    setBreakTime(5);
    setSessionTime(25);
    setTime(25 * 60 * 1000);
  };

  return (
    <div className="App">
      <Container className="Container" inverted="true" color="red">
        <Header
          textAlign="center"
          as="h1"
          dividing
          content="🍅 Pomodoro Clock"
          subheader="Pomodoro is a time management technique created by Francesco Cirillo for a more productive way to work and study. Set up your work sessions with this timer and be more productive!"
        />
      </Container>
      <main>
        <div className="timer">
          <Timer currentMode={[mode, setMode]} currentTime={[time, setTime]} />
        </div>
        <div className="controls">
          <Controls
            activeStatus={[isTimerActive, setTimerActive]}
            handleReset={handleReset}
          />
        </div>

        <div className="setTime">
          <div className="controlBreak">
            <SetTime type={"Break"} value={[breakTime, setBreakTime]} />
          </div>

          <div className="controlSession">
            <SetTime type={"Session"} value={[sessionTime, setSessionTime]} />
          </div>
        </div>
        <p className="credit">made by hasan ugurlu</p>
      </main>
      <audio id="beep" src={alarm} ref={beep} />
    </div>
  );
}

export default App;
