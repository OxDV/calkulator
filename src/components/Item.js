import React from "react";

export default function Item({ item, index, handleChange }) {
  const handleClick = () => {
    handleChange(item.value);
  };

  return (
    <>
      <h1 key={index} onClick={handleClick}>
        {item.value}
      </h1>
    </>
  );
}
