import { useState } from "react";

const Whatever = () => {
  const [state, stateSet] = useState("Initial state");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => stateSet("Button Clicked")}>Click Me</button>
    </div>
  );
};
export default Whatever;
