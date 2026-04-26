// src/components/Controls.jsx
import React from "react";

const Controls = ({ onAdd, onRemove }) => {
  return (
    <div className="controls">
      <button className="controls__btn" onClick={onAdd}>
        Добавить продукт
      </button>
      <button className="controls__btn" onClick={onRemove}>
        Удалить последний
      </button>
    </div>
  );
};

export default Controls;
