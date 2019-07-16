import React from "react";

//import any components needed

import { numbers } from '../path/to/data';
import { operators} from '../path/to/data';
import { specials } from '../path/to/data';



const [numberState, setNumberState] = useState(numbers);
const [operatorsState, setOperatorState] =useState(operators);
const [specialsState, setSpecialsState] = useState(specials);

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
