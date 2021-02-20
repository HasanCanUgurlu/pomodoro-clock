import { useEffect, useRef } from "react";
// first prop is the function that we will be calling.
// second prop is how frequent we want it to run the first prop.
// it's very similar to setInterval but this custom hook is more accurate
//-and its dynamic.
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Set the last value in the ref hook.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      // clear the interval.
      return () => clearInterval(id);
    }
  }, [delay]);
}
