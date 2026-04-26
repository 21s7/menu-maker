// src/components/Controls.jsx
import React from "react";

const Controls = ({ onAdd, onRemove, onAddMeal }) => {
  return (
    <div className="controls">
      <button className="controls__btn" onClick={onAdd}>
        Добавить продукт
      </button>
      <button className="controls__btn" onClick={onRemove}>
        Удалить последний
      </button>
      <button
        className="controls__btn controls__btn--accent"
        onClick={onAddMeal}
      >
        + Новый прием пищи
      </button>
    </div>
  );
};

export default Controls;
