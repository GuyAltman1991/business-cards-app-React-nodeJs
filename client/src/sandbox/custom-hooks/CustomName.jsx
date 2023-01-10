import React from "react";
import useName from "./useName";

const CustomName = () => {
  const { name, setName } = useName("");
  return (
    <div>
      <p>my name is: {name}</p>
      <input
        type="text"
        placeholder="change the name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CustomName;
