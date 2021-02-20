import React from "react";
import { Button, Icon } from "semantic-ui-react";
const SetTime = ({ type, value }) => {
  const [val, setVal] = value;
  // it won't go an hour.
  const handleIncrement = () => {
    if (val >= 60) {
      return null;
    } else {
      setVal(val + 1);
    }
  };

  const handleDecrement = () => {
    if (val === 1) {
      return null;
    } else {
      setVal(val - 1);
    }
  };

  return (
    <div>
      <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
      <Button.Group>
        <Button
          color="green"
          id={`${type.toLowerCase()}-increment`}
          onClick={handleIncrement}
          icon="plus"
        />
        <Button
          color="orange"
          id={`${type.toLowerCase()}-decrement`}
          onClick={handleDecrement}
          icon="minus"
        />
      </Button.Group>
      <h3 id={`${type.toLowerCase()}-length`}>{val}</h3>
    </div>
  );
};

export default SetTime;
