import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Controls = ({ activeStatus, handleReset }) => {
  const [isTimerActive, setTimerActive] = activeStatus;
  return (
    <>
      <div className="playButton">
        <Button
          color="green"
          circular
          icon
          onClick={() => setTimerActive(!isTimerActive)}
        >
          {isTimerActive ? (
            <span>
              <Icon id="playPause" name="pause" />
            </span>
          ) : (
            <span>
              <Icon id="playPause" name="play" />
            </span>
          )}
        </Button>
      </div>
      <div className="resetButton">
        <Button color="red" circular icon id="reset" onClick={handleReset}>
          <Icon name="repeat" />
        </Button>
      </div>
    </>
  );
};

export default Controls;
