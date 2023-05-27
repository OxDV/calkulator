import React, { useState } from "react";
import Item from "./Item";

export default function Main({ items }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    if (value === "Del") {
      setSelectedValue("");
    } else if (value === "=") {
      handleCalculate();
    } else if (value === "C") {
      handleClear();
    } else {
      setSelectedValue((prevValue) => (prevValue += value));
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(selectedValue);
      setSelectedValue(result.toString());
    } catch (error) {
      setSelectedValue("Error");
    }
  };

  const handleClear = () => {
    if (selectedValue.length === 1) {
      setSelectedValue("");
    } else {
      setSelectedValue(selectedValue.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={selectedValue} />
      {items.map((item, index) => (
        <Item item={item} key={index} handleChange={handleChange} />
      ))}
    </div>
  );
}
