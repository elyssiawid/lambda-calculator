import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

import { operators } from "../../../data";

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorsState, setOperatorState] = useState(operators);
  const operatorStateMap = operatorsState.map(num => num.char);
  console.log("HI", operatorsState);
  console.log("apa", operatorStateMap);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorsState.map(x => (
        <OperatorButton key={x.char} operatorStateMap={x.char} />
      ))}
    </div>
  );
};

export default Operators;
