// src/components/MealBlock.jsx
import React from "react";
import ProductsList from "./ProductsList";

const MealBlock = ({
  meal,
  onRemoveMeal,
  onUpdateTime,
  onUpdateName,
  onRemoveProduct,
  isLast,
}) => {
  return (
    <div className="meal-block">
      <div className="meal-block__header">
        <div className="meal-block__header-left">
          <div className="meal-block__time-display">🕐 {meal.time}</div>
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
              ×
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
