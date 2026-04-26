// src/components/ProductsList.jsx
import React from "react";
import { useDismissibleWarning } from "../hooks/useDismissibleWarning";

const ProductWarning = ({ product }) => {
  const { isDismissed, dismiss } = useDismissibleWarning(
    `product_${product.id}`
  );

  if (isDismissed) return null;

  const handleDismiss = (e) => {
    e.stopPropagation(); // Останавливаем всплытие, чтобы не удалить продукт
    dismiss();
  };

  return (
    <div className="products-list__item-warning">
      <div className="warning-content">
        <div className="warning-text-wrapper">
          <span className="warning-icon">⚠️</span>
          <span className="warning-text">
            "{product.name}" содержит растительный белок. Он не будет
            учитываться в расчете из-за низкой биодоступности.
            {product.originalProteins && (
              <span className="original-proteins">
                {" "}
                · исходно: {product.originalProteins.toFixed(2)} г
              </span>
            )}
          </span>
        </div>
        <button
          className="warning-dismiss-btn"
          onClick={handleDismiss}
          title="Больше не показывать это предупреждение"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ProductsList = ({
  products,
  mealId,
  onRemoveProduct,
  showMealContext,
}) => {
  if (products.length === 0) {
    return (
      <div className="products-list">
        <div className="products-list__empty">Нет добавленных продуктов</div>
      </div>
    );
  }

  const handleRemoveClick = (e, mealId, productId) => {
    e.stopPropagation(); // Останавливаем всплытие
    onRemoveProduct?.(mealId, productId);
  };

  return (
    <div className="products-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="products-list__item"
          onClick={() =>
            showMealContext && onRemoveProduct?.(mealId, product.id)
          }
          title={showMealContext ? "Нажмите, чтобы удалить продукт" : ""}
        >
          <div className="products-list__item-header">
            <strong className="products-list__item-name">{product.name}</strong>
            <div className="products-list__item-header-right">
              <span className="products-list__item-grams">
                {product.grams} г
              </span>
              {showMealContext && (
                <button
                  className="products-list__item-remove"
                  onClick={(e) => handleRemoveClick(e, mealId, product.id)}
                  title="Удалить продукт"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 1L9 9M9 1L1 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="products-list__item-nutrition">
            <span className="nutrition-badge calories">
              Ккал {product.calories.toFixed(1)}
            </span>
            <span className="nutrition-badge proteins">
              Б {product.proteins.toFixed(1)} г
            </span>
            <span className="nutrition-badge fats">
              Ж {product.fats.toFixed(1)} г
            </span>
            <span className="nutrition-badge carbs">
              У {product.carbs.toFixed(1)} г
            </span>
          </div>

          {product.proteinSource === "plant" && (
            <ProductWarning product={product} />
          )}

          {product.proteinSource === "mixed" && (
            <div className="products-list__item-info">
              ℹ️ Источник белка требует проверки
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
