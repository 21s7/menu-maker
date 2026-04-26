// src/components/MealBlock.jsx
import React, { useState } from "react";
import ProductsList from "./ProductsList";

const ClockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="meal-block__clock-icon"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const EditIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="meal-block__edit-icon"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const MealBlock = ({
  meal,
  onRemoveMeal,
  onUpdateTime,
  onUpdateName,
  onRemoveProduct,
  isLast,
}) => {
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [editTime, setEditTime] = useState(meal.time);

  const handleTimeClick = () => {
    setIsEditingTime(true);
    setEditTime(meal.time);
  };

  const handleTimeChange = (e) => {
    setEditTime(e.target.value);
  };

  const handleTimeBlur = () => {
    setIsEditingTime(false);
    if (editTime && editTime !== meal.time) {
      onUpdateTime(meal.id, editTime);
    }
  };

  const handleTimeKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTimeBlur();
    }
    if (e.key === "Escape") {
      setIsEditingTime(false);
      setEditTime(meal.time);
    }
  };

  return (
    <div className="meal-block">
      <div className="meal-block__header">
        <div className="meal-block__header-left">
          {isEditingTime ? (
            <div className="meal-block__time-edit">
              <ClockIcon />
              <input
                type="time"
                className="meal-block__time-input"
                value={editTime}
                onChange={handleTimeChange}
                onBlur={handleTimeBlur}
                onKeyDown={handleTimeKeyDown}
                autoFocus
              />
            </div>
          ) : (
            <div
              className="meal-block__time-display meal-block__time-display--editable"
              onClick={handleTimeClick}
              title="Нажмите, чтобы изменить время"
            >
              <ClockIcon />
              <span>{meal.time}</span>
              <EditIcon />
            </div>
          )}

          <input
            type="text"
            className="meal-block__name-input"
            value={meal.name}
            onChange={(e) => onUpdateName(meal.id, e.target.value)}
            placeholder="Название приема пищи"
          />
        </div>
        <div className="meal-block__header-right">
          <span className="meal-block__product-count">
            {meal.products.length} продукт(ов)
          </span>
          {!isLast && (
            <button
              className="meal-block__remove-btn"
              onClick={() => onRemoveMeal(meal.id)}
              title="Удалить прием пищи"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="meal-block__content">
        {meal.products.length > 0 ? (
          <ProductsList
            products={meal.products}
            mealId={meal.id}
            onRemoveProduct={onRemoveProduct}
            showMealContext={true}
          />
        ) : (
          <div className="meal-block__empty">
            Нет продуктов в этом приеме пищи.
            <br />
            <span className="meal-block__hint">
              Выберите продукт и нажмите "+ Добавить"
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealBlock;
