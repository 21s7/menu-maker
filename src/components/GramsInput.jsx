// src/components/GramsInput.jsx
import React from "react";

const GramsInput = ({ grams, setGrams, onKeyPress }) => {
  return (
    <input
      type="number"
      className="product__grams"
      placeholder="Вес в граммах"
      value={grams}
      onChange={(e) => setGrams(e.target.value)}
      onKeyPress={onKeyPress}
    />
  );
};

export default GramsInput;
