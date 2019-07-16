import React from "react";

const SpecialButton = prop => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="specialBtn">{prop.specialsStateMap}</button>
    </>
  );
};
export default SpecialButton;
